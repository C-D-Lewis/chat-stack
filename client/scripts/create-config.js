const { writeFileSync } = require('fs');

const {
  PORT = "8080",
  HOST = 'localhost',
} = process.env;

const config = {
  PORT: parseInt(PORT, 10),
  HOST,
};
console.log({ config });

const configStr = `window.config=${JSON.stringify(config)};`;
writeFileSync(`${__dirname}/../config.js`, configStr, 'utf8');
