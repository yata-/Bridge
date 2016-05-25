//#1050
namespace TestIssue1050
{
    public class App
    {
        static int Field;
        static int Property { get; set; }
        static void Method() { }

        public void Main1()
        {
            // Should be TestIssue1050.App.something = 1;
            App.Field = 1;

            // Should be TestIssue1050.App.setProperty(2);
            App.Property = 2;

            // Should be TestIssue1050.App.method();
            App.Method();
        }
    }
}
