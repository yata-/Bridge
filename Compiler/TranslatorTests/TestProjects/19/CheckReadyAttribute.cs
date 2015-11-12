using Bridge.Html5;

namespace Test
{
    public class App
    {
        private string _something = "HI!";

        [Ready]
        public static void Main()
        {
            var inst = new App();
        }

        [Ready]
        public void Test()
        {
            Console.WriteLine(_something);
        }
    }
}