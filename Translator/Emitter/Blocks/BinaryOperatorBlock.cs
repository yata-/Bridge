using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class BinaryOperatorBlock : ConversionBlock
    {
        public BinaryOperatorBlock(IEmitter emitter, BinaryOperatorExpression binaryOperatorExpression)
            : base(emitter, binaryOperatorExpression)
        {
            this.Emitter = emitter;
            this.BinaryOperatorExpression = binaryOperatorExpression;
        }

        public BinaryOperatorExpression BinaryOperatorExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.BinaryOperatorExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitBinaryOperatorExpression();
        }

        protected bool ResolveOperator(BinaryOperatorExpression binaryOperatorExpression, OperatorResolveResult orr)
        {
            if (orr != null && orr.UserDefinedOperatorMethod != null)
            {
                var method = orr.UserDefinedOperatorMethod;
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, binaryOperatorExpression, orr), inline).Emit();
                    return true;
                }
                else
                {
                    if (orr.IsLiftedOperator)
                    {
                        this.Write(Bridge.Translator.Emitter.ROOT + ".Nullable.lift(");
                    }

                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    if (orr.IsLiftedOperator)
                    {
                        this.WriteComma();
                    }
                    else
                    {
                        this.WriteOpenParentheses();
                    }

                    new ExpressionListBlock(this.Emitter, new Expression[] { binaryOperatorExpression.Left, binaryOperatorExpression.Right }, null).Emit();
                    this.WriteCloseParentheses();

                    return true;
                }
            }

            return false;
        }

        protected void VisitBinaryOperatorExpression()
        {
            BinaryOperatorExpression binaryOperatorExpression = this.BinaryOperatorExpression;
            var resolveOperator = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression, this.Emitter);

            if (resolveOperator is ConstantResolveResult)
            {
                this.WriteScript(((ConstantResolveResult)resolveOperator).ConstantValue);
                return;
            }

            OperatorResolveResult orr = resolveOperator as OperatorResolveResult;

            var delegateOperator = false;

            if (this.ResolveOperator(binaryOperatorExpression, orr))
            {
                return;
            }

            var leftResolverResult = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Left, this.Emitter);
            var rightResolverResult = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Right, this.Emitter);

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Divide &&
                (
                    (Helpers.IsIntegerType(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), this.Emitter.Resolver))
                ))
            {
                this.Write("Bridge.Int.div(");
                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(", ");
                binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
                this.Write(")");
                return;
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Add ||
                binaryOperatorExpression.Operator == BinaryOperatorType.Subtract)
            {

                var add = binaryOperatorExpression.Operator == BinaryOperatorType.Add;

                if (this.Emitter.Validator.IsDelegateOrLambda(leftResolverResult) && this.Emitter.Validator.IsDelegateOrLambda(rightResolverResult))
                {
                    delegateOperator = true;
                    this.Write(Bridge.Translator.Emitter.ROOT + "." + (add ? Bridge.Translator.Emitter.DELEGATE_COMBINE : Bridge.Translator.Emitter.DELEGATE_REMOVE));
                    this.WriteOpenParentheses();
                }
            }

            bool nullable = orr != null && orr.IsLiftedOperator;
            bool isCoalescing = binaryOperatorExpression.Operator == BinaryOperatorType.NullCoalescing;
            bool isDecimal = false;
            string root = Bridge.Translator.Emitter.ROOT + ".Nullable.";

            if ((Helpers.IsDecimalType(leftResolverResult.Type, this.Emitter.Resolver) &&
                 Helpers.IsDecimalType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                (Helpers.IsDecimalType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), this.Emitter.Resolver) &&
                 Helpers.IsDecimalType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), this.Emitter.Resolver)))
            {
                isDecimal = true;
                nullable = false;
                root = Bridge.Translator.Emitter.ROOT + ".Decimal.";
            }

            bool special = nullable || isCoalescing || isDecimal;
            bool rootSpecial = nullable || isDecimal;


            if (rootSpecial)
            {
                this.Write(root);
            }
            else if (isCoalescing)
            {
                this.Write(Bridge.Translator.Emitter.ROOT + ".");
            }
            else
            {
                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
            }

            if (!delegateOperator)
            {
                if (!special)
                {
                    this.WriteSpace();
                }
                bool isBool = NullableType.IsNullable(resolveOperator.Type) ? NullableType.GetUnderlyingType(resolveOperator.Type).IsKnownType(KnownTypeCode.Boolean) : resolveOperator.Type.IsKnownType(KnownTypeCode.Boolean);
                switch (binaryOperatorExpression.Operator)
                {
                    case BinaryOperatorType.Add:
                        this.Write(rootSpecial ? "add" : "+");
                        break;
                    case BinaryOperatorType.BitwiseAnd:
                        if (isBool)
                        {
                            this.Write(rootSpecial ? "and" : "&&");
                        }
                        else
                        {
                            this.Write(rootSpecial ? "band" : "&");
                        }

                        break;
                    case BinaryOperatorType.BitwiseOr:
                        if (isBool)
                        {
                            this.Write(rootSpecial ? "or" : "||");
                        }
                        else
                        {
                            this.Write(rootSpecial ? "bor" : "|");
                        }
                        break;
                    case BinaryOperatorType.ConditionalAnd:
                        this.Write(rootSpecial ? "and" : "&&");
                        break;
                    case BinaryOperatorType.NullCoalescing:
                        this.Write("coalesce");
                        break;
                    case BinaryOperatorType.ConditionalOr:
                        this.Write(rootSpecial ? "or" : "||");
                        break;
                    case BinaryOperatorType.Divide:
                        this.Write(rootSpecial ? "div" : "/");
                        break;
                    case BinaryOperatorType.Equality:
                        this.Write(rootSpecial ? "eq" : "===");
                        break;
                    case BinaryOperatorType.ExclusiveOr:
                        this.Write(rootSpecial ? "xor" : "^");
                        break;
                    case BinaryOperatorType.GreaterThan:
                        this.Write(rootSpecial ? "gt" : ">");
                        break;
                    case BinaryOperatorType.GreaterThanOrEqual:
                        this.Write(rootSpecial ? "gte" : ">=");
                        break;
                    case BinaryOperatorType.InEquality:
                        this.Write(rootSpecial ? "neq" : "!==");
                        break;
                    case BinaryOperatorType.LessThan:
                        this.Write(rootSpecial ? "lt" : "<");
                        break;
                    case BinaryOperatorType.LessThanOrEqual:
                        this.Write(rootSpecial ? "lte" : "<=");
                        break;
                    case BinaryOperatorType.Modulus:
                        this.Write(rootSpecial ? "mod" : "%");
                        break;
                    case BinaryOperatorType.Multiply:
                        this.Write(rootSpecial ? "mul" : "*");
                        break;
                    case BinaryOperatorType.ShiftLeft:
                        this.Write(rootSpecial ? "sl" : "<<");
                        break;
                    case BinaryOperatorType.ShiftRight:
                        this.Write(rootSpecial ? "sr" : ">>");
                        break;
                    case BinaryOperatorType.Subtract:
                        this.Write(rootSpecial ? "sub" : "-");
                        break;
                    default:
                        throw new EmitterException(binaryOperatorExpression, "Unsupported binary operator: " + binaryOperatorExpression.Operator.ToString());
                }
            }
            else
            {
                this.WriteComma();
            }

            if (special)
            {
                this.WriteOpenParentheses();
                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                this.WriteComma();
            }
            else
            {
                this.WriteSpace();
            }

            binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);

            if (delegateOperator || special)
            {
                this.WriteCloseParentheses();
            }

            var op = binaryOperatorExpression.Operator;
            if (isDecimal && (op == BinaryOperatorType.Add || op == BinaryOperatorType.Divide || op == BinaryOperatorType.Modulus || op == BinaryOperatorType.Multiply || op == BinaryOperatorType.Subtract))
            {
                var parent = binaryOperatorExpression.Parent;
                if (!(parent is BinaryOperatorExpression || parent is UnaryOperatorExpression))
                {
                    this.Write(".toFloat()");
                }
            }
        }
    }
}
