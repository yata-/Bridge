using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;

namespace Bridge.Translator
{
    public class AssignmentBlock : AbstractEmitterBlock
    {
        public AssignmentBlock(IEmitter emitter, AssignmentExpression assignmentExpression)
            : base(emitter, assignmentExpression)
        {
            this.Emitter = emitter;
            this.AssignmentExpression = assignmentExpression;
        }

        public AssignmentExpression AssignmentExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitAssignmentExpression();
        }

        protected void VisitAssignmentExpression()
        {
            AssignmentExpression assignmentExpression = this.AssignmentExpression;
            var oldAssigment = this.Emitter.IsAssignment;
            var oldAssigmentType = this.Emitter.AssignmentType;

            var delegateAssigment = false;
            bool isEvent = false;
            var initCount = this.Emitter.Writers.Count;

            var asyncExpressionHandling = this.Emitter.AsyncExpressionHandling;

            this.WriteAwaiters(assignmentExpression.Left);
            this.WriteAwaiters(assignmentExpression.Right);

            var leftResolverResult = this.Emitter.Resolver.ResolveNode(assignmentExpression.Left, this.Emitter);
            var rightResolverResult = this.Emitter.Resolver.ResolveNode(assignmentExpression.Right, this.Emitter);
            var orr = this.Emitter.Resolver.ResolveNode(assignmentExpression, this.Emitter) as OperatorResolveResult;

            if (assignmentExpression.Operator == AssignmentOperatorType.Divide &&
                (
                    (Helpers.IsIntegerType(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Right), this.Emitter.Resolver))
                ))
            {
                this.Emitter.IsAssignment = true;
                this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                var oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;
                assignmentExpression.Left.AcceptVisitor(this.Emitter);

                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write(" = ");
                }

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AssignmentType = oldAssigmentType;
                this.Emitter.IsAssignment = oldAssigment;

                this.Write("Bridge.Int.div(");
                assignmentExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(", ");
                oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;
                assignmentExpression.Right.AcceptVisitor(this.Emitter);
                this.Write(")");

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AsyncExpressionHandling = asyncExpressionHandling;

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }
                return;
            }

            if (assignmentExpression.Operator == AssignmentOperatorType.Add ||
                assignmentExpression.Operator == AssignmentOperatorType.Subtract)
            {
                var add = assignmentExpression.Operator == AssignmentOperatorType.Add;

                if (this.Emitter.Validator.IsDelegateOrLambda(leftResolverResult))
                {
                    delegateAssigment = true;
                    var leftMemberResolveResult = leftResolverResult as MemberResolveResult;

                    if (leftMemberResolveResult != null)
                    {
                        isEvent = leftMemberResolveResult.Member is DefaultResolvedEvent;
                    }

                    if (!isEvent)
                    {
                        this.Emitter.IsAssignment = true;
                        assignmentExpression.Left.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = false;
                        this.Write(" = ");
                        this.Write(Bridge.Translator.Emitter.ROOT + "." + (add ? Bridge.Translator.Emitter.DELEGATE_COMBINE : Bridge.Translator.Emitter.DELEGATE_REMOVE));
                        this.WriteOpenParentheses();
                    }
                }
            }



            bool nullable = orr != null && orr.IsLiftedOperator;
            bool isDecimal = false;
            string root = Bridge.Translator.Emitter.ROOT + ".Nullable.";

            if (assignmentExpression.Operator != AssignmentOperatorType.Assign &&
                (Helpers.IsDecimalType(leftResolverResult.Type, this.Emitter.Resolver) ||
                 Helpers.IsDecimalType(rightResolverResult.Type, this.Emitter.Resolver) ||
                 Helpers.IsDecimalType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Left), this.Emitter.Resolver) ||
                 Helpers.IsDecimalType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Right), this.Emitter.Resolver)))
            {
                isDecimal = true;
                nullable = false;
                root = Bridge.Translator.Emitter.ROOT + ".Decimal.";
            }

            bool special = nullable || isDecimal;

            this.Emitter.IsAssignment = true;
            this.Emitter.AssignmentType = assignmentExpression.Operator;
            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            bool thisAssignment = leftResolverResult is ThisResolveResult;

            if (!thisAssignment)
            {
                if (special)
                {
                    this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                }
                assignmentExpression.Left.AcceptVisitor(this.Emitter);
            }
            else
            {
                this.Write("(");
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AssignmentType = oldAssigmentType;
            this.Emitter.IsAssignment = oldAssigment;

            if (this.Emitter.Writers.Count == 0 && !delegateAssigment && !thisAssignment)
            {
                this.WriteSpace();
            }

            if (!delegateAssigment)
            {
                if (!special)
                {
                    switch (assignmentExpression.Operator)
                    {
                        case AssignmentOperatorType.Assign:
                            break;
                        case AssignmentOperatorType.Add:
                            this.Write("+");
                            break;
                        case AssignmentOperatorType.BitwiseAnd:
                            this.Write("&");
                            break;
                        case AssignmentOperatorType.BitwiseOr:
                            this.Write("|");
                            break;
                        case AssignmentOperatorType.Divide:
                            this.Write("/");
                            break;
                        case AssignmentOperatorType.ExclusiveOr:
                            this.Write("^");
                            break;
                        case AssignmentOperatorType.Modulus:
                            this.Write("%");
                            break;
                        case AssignmentOperatorType.Multiply:
                            this.Write("*");
                            break;
                        case AssignmentOperatorType.ShiftLeft:
                            this.Write("<<");
                            break;
                        case AssignmentOperatorType.ShiftRight:
                            this.Write(">>");
                            break;
                        case AssignmentOperatorType.Subtract:
                            this.Write("-");
                            break;
                        default:
                            throw new EmitterException(assignmentExpression,
                                "Unsupported assignment operator: " + assignmentExpression.Operator.ToString());
                    }
                }

                if (special)
                {
                    if (this.Emitter.Writers.Count == initCount)
                    {
                        this.Write(" = ");
                    }
                    this.Write(root);

                    switch (assignmentExpression.Operator)
                    {
                        case AssignmentOperatorType.Assign:
                            break;
                        case AssignmentOperatorType.Add:
                            this.Write("add");
                            break;
                        case AssignmentOperatorType.BitwiseAnd:
                            this.Write("band");
                            break;
                        case AssignmentOperatorType.BitwiseOr:
                            this.Write("bor");
                            break;
                        case AssignmentOperatorType.Divide:
                            this.Write("div");
                            break;
                        case AssignmentOperatorType.ExclusiveOr:
                            this.Write("xor");
                            break;
                        case AssignmentOperatorType.Modulus:
                            this.Write("mod");
                            break;
                        case AssignmentOperatorType.Multiply:
                            this.Write("mul");
                            break;
                        case AssignmentOperatorType.ShiftLeft:
                            this.Write("sl");
                            break;
                        case AssignmentOperatorType.ShiftRight:
                            this.Write("sr");
                            break;
                        case AssignmentOperatorType.Subtract:
                            this.Write("sub");
                            break;
                        default:
                            throw new EmitterException(assignmentExpression,
                                "Unsupported assignment operator: " + assignmentExpression.Operator.ToString());
                    }

                    this.WriteOpenParentheses();

                    assignmentExpression.Left.AcceptVisitor(this.Emitter);
                    this.Write(", ");
                    }

                int count = this.Emitter.Writers.Count;
                if (count == 0 && !thisAssignment && !special)
                {
                    this.Write("= ");    
                }
            }
            else if (!isEvent)
            {
                this.WriteComma();
            }

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            assignmentExpression.Right.AcceptVisitor(this.Emitter);

            if (special)
            {
                this.WriteCloseParentheses();
            }

            if (thisAssignment)
            {
                this.Write(").$clone(this)");
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = asyncExpressionHandling;

            if (this.Emitter.Writers.Count > initCount)
            {
                this.PopWriter();
            }

            if (delegateAssigment)
            {
                this.WriteCloseParentheses();
            }
        }
    }
}
