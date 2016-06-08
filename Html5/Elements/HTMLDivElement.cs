namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLDivElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating div elements.
    /// </summary>
    [External]
    [Name("HTMLDivElement")]
    public class HTMLDivElement : Element<HTMLDivElement>
    {
        [Template("document.createElement('div')")]
        public HTMLDivElement()
        {
        }
    }
}