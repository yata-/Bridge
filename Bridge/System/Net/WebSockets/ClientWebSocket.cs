using System.Threading;
using System.Threading.Tasks;
using Bridge;

namespace System.Net.WebSockets
{
	/// <summary>
	/// Provides a client for connecting to WebSocket services.
	/// </summary>
	[External]
	[Namespace("Bridge.Net.WebSockets")]
	public class ClientWebSocket: IBridgeClass, IDisposable
	{
		/// <summary>
		/// Get the WebSocket state of the <see cref="ClientWebSocket"/> instance.
		/// </summary>
		public WebSocketState State
		{
			get
			{
				return WebSocketState.None;
			}
		}

		/// <summary>
		/// Gets the WebSocket options for the ClientWebSocket instance.
		/// </summary>
		public ClientWebSocketOptions Options
		{
			get
			{
				return null;
			}
		}

		/// <summary>
		/// Connect to a WebSocket server as an asynchronous operation.
		/// </summary>
		/// <param name="uri">The URI of the WebSocket server to connect to.</param>
		/// <param name="cancellationToken">IGNORED: Connection can't be interrupted in Javascript.</param>
		public extern Task ConnectAsync(Uri uri, CancellationToken cancellationToken);

		/// <summary>
		/// Send data on ClientWebSocket. Though this method has Async suffix, returned Task will
		/// always be completed(i.e. you can't track sending progress), due to Javascript limitations.
		/// </summary>
		/// <param name="buffer">The buffer containing the message to be sent.</param>
		/// <param name="messageType">Specifies whether the buffer is clear text or in a binary format.</param>
		/// <param name="endOfMessage">IGNORED: You can't define end of WebSocket message in Javascript.</param>
		/// <param name="cancellationToken">IGNORED: Send can't be interrupted in Javascript.</param>
		public extern Task SendAsync(ArraySegment<byte> buffer, WebSocketMessageType messageType,
			bool endOfMessage = true, CancellationToken cancellationToken = default(CancellationToken));

		public extern Task<WebSocketReceiveResult> ReceiveAsync(ArraySegment<byte> buffer,
			CancellationToken cancellationToken);

		public extern void Dispose();
	}
}
