using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator.Utils
{
    public class AssigmentExpressionHelper
    {
        public static bool CheckIsRightAssigmentExpression(AssignmentExpression expression)
        {
            return (expression.Right is ParenthesizedExpression ||
                    expression.Right is IdentifierExpression ||
                    expression.Right is MemberReferenceExpression ||
                    expression.Right is PrimitiveExpression ||
                    expression.Right is IndexerExpression ||
                    expression.Right is LambdaExpression ||
                    expression.Right is AnonymousMethodExpression ||
                    expression.Right is ObjectCreateExpression);
        }
    }
}