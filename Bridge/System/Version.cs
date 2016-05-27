using Bridge;

namespace System
{
    // A Version object contains four hierarchical numeric components: major, minor,
    // build and revision.  Build and revision may be unspecified, which is represented
    // internally as a -1.  By definition, an unspecified component matches anything
    // (both unspecified and specified), and an unspecified component is "less than" any
    // specified component.
    [Name("Bridge.Version")]
	[External]
    public sealed class Version : ICloneable, IComparable<Version>, IEquatable<Version>
    {
        public extern Version(int major, int minor, int build, int revision);

        public extern Version(int major, int minor, int build);

        public extern Version(int major, int minor);

        public extern Version(String version);

        public extern Version();

        // Properties for setting and getting version numbers
        public extern int Major
        {
            get;
        }

        public extern int Minor
        {
            get;
        }

        public extern int Build
        {
            get;
        }

        public extern int Revision
        {
            get;
        }

        public extern short MajorRevision
        {
            get;
        }

        public extern short MinorRevision
        {
            get;
        }

        public extern Object Clone();

        public extern int CompareTo(Object version);

        public extern int CompareTo(Version value);

        public override extern bool Equals(Object obj);

        public extern bool Equals(Version obj);

        public override extern int GetHashCode();

        public override extern String ToString();

        public extern String ToString(int fieldCount);

        public static extern Version Parse(string input);

        public static extern bool TryParse(string input, out Version result);

        public static extern bool operator ==(Version v1, Version v2);

        public static extern bool operator !=(Version v1, Version v2);

        public static extern bool operator <(Version v1, Version v2);

        public static extern bool operator <=(Version v1, Version v2);

        public static extern bool operator >(Version v1, Version v2);

        public static extern bool operator >=(Version v1, Version v2);
    }
}