const { writeFileSync } = require('fs');

const {
  PORT = "8080",
  HOST = 'localhost',
  MOTD = 'Welcome to Stack Chat! Check out the source: https://github.com/c-d-lewis/stack-chat',
} = process.env;

const config = {
  PORT: parseInt(PORT, 10),
  HOST,
  MOTD,
};
console.log(config);

const configStr = `window.config=${JSON.stringify(config)};`;
writeFileSync(`${__dirname}/../config.js`, configStr, 'utf8');
