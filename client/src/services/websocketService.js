const { HOST, PORT } = window.config;

let socket;

/**
 * Connect to the configured server.
 */
export const connect = (setIsConnected) => {
  const protocol = HOST.includes('https') ? 'wss://' : 'ws://';
  const uri = `${protocol}${HOST}:${PORT}`;
  console.log(`Connecting to: ${uri}`);
  
  try {
    socket = new WebSocket(uri);
    setIsConnected(true);
  } catch (err) {
    console.log(err);
    setIsConnected(false);
    setTimeout(() => alert(err.stack), 500);
  }
};

export const sendMessage = () => {

};

