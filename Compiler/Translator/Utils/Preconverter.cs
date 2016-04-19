using System;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using System.Linq;
using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class PreconverterDetecter : DepthFirstAstVisitor
    {
        public PreconverterDetecter(MemberResolver resolver)
        {
            this.Resolver = resolver;
        }

        public bool Found
        {
            get;
            set;
        }

        public MemberResolver Resolver
        {
            get; 
            set;
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement)
            {
                var rr = this.Resolver.ResolveNode(unaryOperatorExpression, null);

                if (!Helpers.IsFloatType(rr.Type, this.Resolver) && !Helpers.Is64Type(rr.Type, this.Resolver))
                {
                    this.Found = true;
                }
            }

            base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            if (assignmentExpression.Operator != AssignmentOperatorType.Any && assignmentExpression.Operator != AssignmentOperatorType.Assign)
            {
                var rr = this.Resolver.ResolveNode(assignmentExpression, null);

                if (Helpers.IsIntegerType(rr.Type, this.Resolver))
                {
                    this.Found = true;
                }
            }

            base.VisitAssignmentExpression(assignmentExpression);
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            var rr = this.Resolver.ResolveNode(invocationExpression, null) as InvocationResolveResult;

            if (rr != null && rr.IsError)
            {
                this.Found = true;
            }

            base.VisitInvocationExpression(invocationExpression);
        }
    }

    public class PreconverterFixer : DepthFirstAstVisitor<AstNode>
    {
        public PreconverterFixer(MemberResolver resolver)
        {
            this.Resolver = resolver;
        }

        public MemberResolver Resolver
        {
            get; 
            set;
        }

        protected override AstNode VisitChildren(AstNode node)
        {
            List<AstNode> newChildren = null;

            int i = 0;
            foreach (var child in node.Children)
            {
                var newChild = child.AcceptVisitor(this);
                if (newChild != null)
                {
                    newChildren = newChildren ?? Enumerable.Repeat((AstNode)null, i).ToList();
                    newChildren.Add(newChild);
                }
                else if (newChildren != null)
                {
                    newChildren.Add(null);
                }
                i++;
            }

            if (newChildren == null)
                return null;

            var result = node.Clone();

            i = 0;
            foreach (var children in result.Children)
            {
                if (newChildren[i] != null)
                    children.ReplaceWith(newChildren[i]);
                i++;
            }

            return result;
        }

        public override AstNode VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            var rr = this.Resolver.ResolveNode(invocationExpression, null) as CSharpInvocationResolveResult;

            if (rr != null && rr.IsError)
            {
                var clonInvocationExpression = (InvocationExpression)base.VisitInvocationExpression(invocationExpression);

                if (clonInvocationExpression == null)
                {
                    clonInvocationExpression = (InvocationExpression)invocationExpression.Clone();
                }

                var map = rr.GetArgumentToParameterMap();
                var orig = clonInvocationExpression.Arguments.ToArray();
                var result = clonInvocationExpression.Arguments.ToArray();
                for (int i = 0; i < map.Count; i++)
                {
                    result[i] = orig[map[i]];
                }

                clonInvocationExpression.Arguments.ReplaceWith(result);
                return clonInvocationExpression;
            }

            return base.VisitInvocationExpression(invocationExpression);
        }

        public override AstNode VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement)
            {
                var rr = this.Resolver.ResolveNode(unaryOperatorExpression, null);
                if (Helpers.IsFloatType(rr.Type, this.Resolver) || Helpers.Is64Type(rr.Type, this.Resolver))
                {
                    return base.VisitUnaryOperatorExpression(unaryOperatorExpression);
                }

                var clonUnaryOperatorExpression = (UnaryOperatorExpression)base.VisitUnaryOperatorExpression(unaryOperatorExpression);

                if (clonUnaryOperatorExpression == null)
                {
                    clonUnaryOperatorExpression = (UnaryOperatorExpression)unaryOperatorExpression.Clone();
                }

                bool isPost = clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement ||
                              clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;

                var isStatement = unaryOperatorExpression.Parent is ExpressionStatement;
                var isIncr = clonUnaryOperatorExpression.Operator == UnaryOperatorType.Increment || clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;

                var ae = new AssignmentExpression(clonUnaryOperatorExpression.Expression.Clone(),
                             new BinaryOperatorExpression(clonUnaryOperatorExpression.Expression.Clone(), isIncr ? BinaryOperatorType.Add : BinaryOperatorType.Subtract, new PrimitiveExpression(1)));

                if (isPost && !isStatement)
                {
                    return new InvocationExpression(new MemberReferenceExpression(new MemberReferenceExpression(new IdentifierExpression("Bridge"), "Script"), "Identity"), clonUnaryOperatorExpression.Expression.Clone(), ae);
                }
                else
                {
                    if (isStatement)
                    {
                        return ae;
                    }

                    return new ParenthesizedExpression(ae);    
                }
            }

            return base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override AstNode VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            var rr = this.Resolver.ResolveNode(assignmentExpression, null);

            if (assignmentExpression.Operator != AssignmentOperatorType.Any && 
                assignmentExpression.Operator != AssignmentOperatorType.Assign &&
                (Helpers.IsIntegerType(rr.Type, this.Resolver)))
            {
                var clonAssignmentExpression = (AssignmentExpression)base.VisitAssignmentExpression(assignmentExpression);

                if (clonAssignmentExpression == null)
                {
                    clonAssignmentExpression = (AssignmentExpression)assignmentExpression.Clone();
                }

                var op = clonAssignmentExpression.Operator;
                clonAssignmentExpression.Operator = AssignmentOperatorType.Assign;
                BinaryOperatorType opType;
                switch (op)
                {
                    case AssignmentOperatorType.Add:
                        opType = BinaryOperatorType.Add;
                        break;
                    case AssignmentOperatorType.Subtract:
                        opType = BinaryOperatorType.Subtract;
                        break;
                    case AssignmentOperatorType.Multiply:
                        opType = BinaryOperatorType.Multiply;
                        break;
                    case AssignmentOperatorType.Divide:
                        opType = BinaryOperatorType.Divide;
                        break;
                    case AssignmentOperatorType.Modulus:
                        opType = BinaryOperatorType.Modulus;
                        break;
                    case AssignmentOperatorType.ShiftLeft:
                        opType = BinaryOperatorType.ShiftLeft;
                        break;
                    case AssignmentOperatorType.ShiftRight:
                        opType = BinaryOperatorType.ShiftRight;
                        break;
                    case AssignmentOperatorType.BitwiseAnd:
                        opType = BinaryOperatorType.BitwiseAnd;
                        break;
                    case AssignmentOperatorType.BitwiseOr:
                        opType = BinaryOperatorType.BitwiseOr;
                        break;
                    case AssignmentOperatorType.ExclusiveOr:
                        opType = BinaryOperatorType.ExclusiveOr;
                        break;

                    default:
                        throw new ArgumentOutOfRangeException();
                }

                if (clonAssignmentExpression.Right is BinaryOperatorExpression)
                {
                    clonAssignmentExpression.Right = new BinaryOperatorExpression(clonAssignmentExpression.Left.Clone(), opType, new ParenthesizedExpression(clonAssignmentExpression.Right.Clone()));
                }
                else
                {
                    clonAssignmentExpression.Right = new BinaryOperatorExpression(clonAssignmentExpression.Left.Clone(), opType, clonAssignmentExpression.Right.Clone());    
                }
                

                return clonAssignmentExpression;
            }

            return base.VisitAssignmentExpression(assignmentExpression);
        }
    }
}
