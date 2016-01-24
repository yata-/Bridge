namespace Bridge.Html5
{
    [External]
    [Name("Storage")]
    public class Storage
    {
        private Storage()
        {
        }

        /// <summary>
        ///
        /// </summary>
        public readonly int Length;

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public override object this[string key]
        {
            get
            {
                return null;
            }
            set
            {
            }
        }

        /// <summary>
        ///
        /// </summary>
        public virtual extern void Clear();

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public virtual extern object GetItem(string key);

        /// <summary>
        ///
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual extern string Key(int index);

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        public virtual extern void RemoveItem(string key);

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public virtual extern void SetItem(string key, object value);
    }
}
