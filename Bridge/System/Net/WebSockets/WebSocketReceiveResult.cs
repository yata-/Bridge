using Bridge;

namespace System.Net.WebSockets
{
	/// <summary>
	/// An instance of this class represents the result of performing a single ReceiveAsync operation on a WebSocket.
	/// </summary>
	[External]
	[Namespace("Bridge.Net.WebSockets")]
	public class WebSocketReceiveResult
	{
		public WebSocketReceiveResult(int count, WebSocketMessageType messageType, bool endOfMessage)
		{
		}

		public WebSocketReceiveResult(int count, WebSocketMessageType messageType, bool endOfMessage,
			WebSocketCloseStatus? closeStatus, string closeStatusDescription)
		{
		}

		/// <summary>
		/// Indicates the number of bytes that the WebSocket received.
		/// </summary>
		public int Count
		{
			get
			{
				return 0;
			}
		}

		/// <summary>
		/// Indicates whether the message has been received completely.
		/// </summary>
		public bool EndOfMessage
		{
			get
			{
				return true;
			}
		}

		/// <summary>
		/// Indicates whether the current message is a UTF-8 message or a binary message.
		/// </summary>
		public WebSocketMessageType MessageType
		{
			get
			{
				return WebSocketMessageType.Close;
			}
		}

		/// <summary>
		/// Indicates the reason why the remote endpoint initiated the close handshake.
		/// </summary>
		public WebSocketCloseStatus? CloseStatus
		{
			get
			{
				return null;
			}
		}

		/// <summary>
		/// Returns the optional description that describes why the close handshake has been initiated by the remote endpoint.
		/// </summary>
		public string CloseStatusDescription
		{
			get
			{
				return null;
			}
		}
	}
}