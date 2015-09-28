using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class LambdaVisitor : DepthFirstAstVisitor
    {
        public LambdaVisitor()
        {
            this.LambdaExpression = new List<Expression>();
        }

        public List<Expression> LambdaExpression
        {
            get;
            set;
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            this.LambdaExpression.Add(anonymousMethodExpression);
            base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            this.LambdaExpression.Add(lambdaExpression);
            base.VisitLambdaExpression(lambdaExpression);
        }
    }

    public class ContinueBreakVisitor : DepthFirstAstVisitor
    {
        public ContinueBreakVisitor()
        {
            this.Continue = new List<ContinueStatement>();
            this.Break = new List<BreakStatement>();
        }

        public List<ContinueStatement> Continue
        {
            get;
            set;
        }

        public List<BreakStatement> Break
        {
            get;
            set;
        }

        public override void VisitForStatement(ForStatement forStatement)
        {
        }

        public override void VisitForeachStatement(ForeachStatement foreachStatement)
        {
        }

        public override void VisitWhileStatement(WhileStatement whileStatement)
        {
        }

        public override void VisitDoWhileStatement(DoWhileStatement doWhileStatement)
        {
        }

        public override void VisitContinueStatement(ContinueStatement continueStatement)
        {
            this.Continue.Add(continueStatement);
            base.VisitContinueStatement(continueStatement);
        }

        public override void VisitBreakStatement(BreakStatement breakStatement)
        {
            this.Break.Add(breakStatement);
            base.VisitBreakStatement(breakStatement);
        }
    }
}
