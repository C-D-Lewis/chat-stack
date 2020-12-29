const { HOST, PORT } = window.config;

let socket;

/**
 * Connect to the configured server.
 */
export const connect = (setConnectedState) => {
  const protocol = HOST.includes('https') ? 'wss://' : 'ws://';
  const uri = `${protocol}${HOST}:${PORT}`;
  console.log(`Connecting to: ${uri}`);
  
  try {
    socket = new WebSocket(uri);
    
    socket.addEventListener('open', () => setConnectedState(true));
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

export const sendMessage = () => {

};

