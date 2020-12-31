const { HOST, PORT } = window.config;

let socket;

/**
 * Connect to the configured server.
 * 
 * @param {function} setConnectedState - Callback to update connectedState.
 * @param {function} onWebsocketMessage - Callback when a message is received.
 */
export const connect = (setConnectedState, onWebsocketMessage) => {
  const protocol = HOST.includes('https') ? 'wss://' : 'ws://';
  
  try {
    socket = new WebSocket(`${protocol}${HOST}:${PORT}`);
    
    socket.addEventListener('open', () => setConnectedState(true));
    socket.addEventListener('message', event => onWebsocketMessage(JSON.parse(event.data)));
    socket.addEventListener('error', (event) => {
      alert(event);
      setConnectedState({ error: event });
    });
  } catch (err) {
    console.log(err);
    setConnectedState({ error: err.message });
    setTimeout(() => alert(err.stack), 500);
  }
};

/**
 * Send a chat event message to the server.
 * 
 * @param {string} userName - This client's userName.
 * @param {string} draft - Draft message.
 * @param {string} color - This client's color.
 */
export const sendMessage = (userName, draft, color) => {
  const event = {
    type: 'ChatMessage',
    data: {
      from: userName,
      content: draft,
      backgroundColor: color,
      timestamp: Date.now(),
    }
  };

  socket.send(JSON.stringify(event));
};

/**
 * Send an event message reporting this new user.
 * 
 * @param {string} userName - This client's username.
 */
export const reportNewUser = (userName) => {
  const event = {
    type: 'NewClient',
    data: { userName },
  };

  socket.send(JSON.stringify(event));
};
