namespace Bridge.Html5
{
	/// <summary>
	/// A MessageEvent interface represents a message received by a target, being a WebSocket or a WebRTC RTCDataChannel.
	/// </summary>
	[External]
	[Name("MessageEvent")]
	public class MessageEvent : Event
	{
		private MessageEvent()
		{
		}

		public readonly Any<string, Blob, ArrayBuffer> Data;

		public readonly string Origin;
	}
}
