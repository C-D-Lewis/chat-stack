const { HOST, PORT } = window.config;

let socket;

/**
 * Connect to the configured server.
 */
export const connect = (setConnectedState, onMessage) => {
  const protocol = HOST.includes('https') ? 'wss://' : 'ws://';
  const uri = `${protocol}${HOST}:${PORT}`;
  console.log(`Connecting to: ${uri}`);
  
  try {
    socket = new WebSocket(uri);
    
    socket.addEventListener('open', () => setConnectedState(true));
    socket.addEventListener('message', event => onMessage(JSON.parse(event.data)));
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
 * Send a message to the server.
 * 
 * @param {string} userName - This client's userName.
 * @param {string} draft - Draft message.
 * @param {string} color - This client's color.
 */
export const sendMessage = (userName, draft, color) => {
  const message = {
    from: userName,
    content: draft,
    backgroundColor: color,
    timestamp: Date.now(),
  };

  socket.send(JSON.stringify({ message }));
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

  socket.send(JSON.stringify({ event }));
};
