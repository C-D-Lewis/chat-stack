const WebSocket = require('ws');

const port = process.env.PORT || 8080;
const server = new WebSocket.Server({ port });

/**
 * Broadcast data to all clients.
 * 
 * @param {string} data - Data to send
 */
const broadcast = data => server.clients.forEach(p => p.send(data));

/**
 * When a client sends a message.
 * 
 * @param {object} client - Client that sent the message.
 * @param {string} data - The message.
 */
const onClientMessage = (client, data) => {
  console.log(`message: ${data}`);

  // Re-broadcast message to all clients
  broadcast(data);
};

/**
 * When a new client connects.
 *
 * @param {object} client - The newly connected client.
 */
const onNewClient = client => {
  console.log('New client connected');
  client.on('message', data => onClientMessage(client, data));  
};

/**
 * The main function.
 */
const main = () => {
  server.on('connection', onNewClient);
  console.log(`Server listening on ${port}`);
};

main();
