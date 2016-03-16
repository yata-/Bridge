namespace Bridge.Html5
{
	/// <summary>
	/// A CloseEvent is sent to clients using WebSockets when the connection is closed.
	/// </summary>
	[External]
	[Name("CloseEvent")]
	public class CloseEvent : Event
	{
		private CloseEvent()
		{
		}

		/// <summary>
		/// Close code sent by the server.
		/// </summary>
		public readonly ushort Code;

		/// <summary>
		/// Reason the server closed the connection. This is specific to the particular server and sub-protocol.
		/// </summary>
		public readonly float Reason;

		/// <summary>
		/// Indicates whether or not the connection was cleanly closed.
		/// </summary>
		public readonly string WasClean;
	}
}
