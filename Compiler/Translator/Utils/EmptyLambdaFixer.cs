using ICSharpCode.NRefactory;
using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class EmptyLambdaDetecter : DepthFirstAstVisitor
    {
        public bool Found
        {
            get;
            set;
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            if (lambdaExpression.Body.IsNull)
            {
                this.Found = true;
            }

            base.VisitLambdaExpression(lambdaExpression);
        }

        public override void VisitForStatement(ForStatement forStatement)
        {
            if (!(forStatement.EmbeddedStatement is BlockStatement))
            {
                var visitor = new LambdaVisitor();
                forStatement.EmbeddedStatement.AcceptVisitor(visitor);

                if (visitor.LambdaExpression.Count > 0)
                {
                    this.Found = true;
                }
            }

            base.VisitForStatement(forStatement);
        }

        public override void VisitForeachStatement(ForeachStatement foreachStatement)
        {
            if (!(foreachStatement.EmbeddedStatement is BlockStatement))
            {
                var visitor = new LambdaVisitor();
                foreachStatement.EmbeddedStatement.AcceptVisitor(visitor);

                if (visitor.LambdaExpression.Count > 0)
                {
                    this.Found = true;
                }
            }

            base.VisitForeachStatement(foreachStatement);
        }

        public override void VisitWhileStatement(WhileStatement whileStatement)
        {
            if (!(whileStatement.EmbeddedStatement is BlockStatement))
            {
                var visitor = new LambdaVisitor();
                whileStatement.EmbeddedStatement.AcceptVisitor(visitor);

                if (visitor.LambdaExpression.Count > 0)
                {
                    this.Found = true;
                }
            }

            base.VisitWhileStatement(whileStatement);
        }

        public override void VisitDoWhileStatement(DoWhileStatement whileStatement)
        {
            if (!(whileStatement.EmbeddedStatement is BlockStatement))
            {
                var visitor = new LambdaVisitor();
                whileStatement.EmbeddedStatement.AcceptVisitor(visitor);

                if (visitor.LambdaExpression.Count > 0)
                {
                    this.Found = true;
                }
            }

            base.VisitDoWhileStatement(whileStatement);
        }
    }


    public class EmptyLambdaFixer : DepthFirstAstVisitor<AstNode>
    {
        public EmptyLambdaFixer()
        {
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

        public override AstNode VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            var clonLambdaExpression = (LambdaExpression)base.VisitLambdaExpression(lambdaExpression);

            if (clonLambdaExpression != null)
            {
                lambdaExpression = clonLambdaExpression;
            }

            if (lambdaExpression.Body.IsNull)
            {
                var l = (LambdaExpression)lambdaExpression.Clone();
                l.Body = new IdentifierExpression(lambdaExpression.Parameters.Last().Name);

                return l;
            }

            return lambdaExpression.Clone();
        }

        public override AstNode VisitForStatement(ForStatement forStatement)
        {
            var clonForStatement = (ForStatement)base.VisitForStatement(forStatement);

            if (clonForStatement != null)
            {
                forStatement = clonForStatement;
            }

            if (!(forStatement.EmbeddedStatement is BlockStatement))
            {
                var l = (ForStatement)forStatement.Clone();
                var block = new BlockStatement();
                block.Statements.Add(l.EmbeddedStatement.Clone());
                l.EmbeddedStatement = block;

                return l;
            }

            return forStatement.Clone();
        }
    }
}
