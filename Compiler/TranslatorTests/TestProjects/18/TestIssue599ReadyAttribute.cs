using Bridge.Html5;

namespace TestIssue599
{
    public class Issue599
    {
        private string _something = "HI!";

        [Ready]
        public static void Main()
        {
            Console.WriteLine(_something);
        }
    }
}
