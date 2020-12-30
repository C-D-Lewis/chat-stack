const WebSocket = require('ws');

const port = process.env.PORT || 8080;
const server = new WebSocket.Server({ port });

/**
 * When a client sends a message.
 * 
 * @param {object} client - Client that sent the message.
 * @param {string} msg - The message.
 */
const onClientMessage = (client, msg) => {
  console.log(`message: ${msg}`);

  // Rebroadcast
  server.clients.forEach((client) => client.send(msg));
};

/**
 * When a new client connects.
 *
 * @param {object} client - The newly connected client.
 */
const onNewClient = client => {
  console.log('New client connected');
  client.on('message', msg => onClientMessage(client, msg));
};

/**
 * The main function.
 */
const main = () => {
  server.on('connection', onNewClient);
  console.log(`Server listening on ${port}`);
};

main();
