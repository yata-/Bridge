using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class ConditionalBlock : ConversionBlock
    {
        public ConditionalBlock(IEmitter emitter, ConditionalExpression conditionalExpression)
            : base(emitter, conditionalExpression)
        {
            this.Emitter = emitter;
            this.ConditionalExpression = conditionalExpression;
        }

        public ConditionalExpression ConditionalExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.ConditionalExpression;
        }

        protected override void EmitConversionExpression()
        {
            var conditionalExpression = this.ConditionalExpression;

            conditionalExpression.Condition.AcceptVisitor(this.Emitter);
            this.Write(" ? ");
            conditionalExpression.TrueExpression.AcceptVisitor(this.Emitter);
            this.Write(" : ");
            conditionalExpression.FalseExpression.AcceptVisitor(this.Emitter);
        }
    }
}