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
	public class ClientWebSocket: IBridgeClass
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
	}
}
