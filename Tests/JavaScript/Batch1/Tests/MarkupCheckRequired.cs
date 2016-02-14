using Bridge;

namespace Bridge.ClientTest.BridgeIssues
{
    // [#69]
    public struct Point69
    {
        public int x;
        public int y;

        public Point69(int y1)
        {
            this = new Point69();
            y = y1;
        }
    }
}
