# stack-chat

Simple chat app server and client using WebSockets and React.

## Server

Start with `npm`:

```shell
export PORT=8080

npm start
```

## Client

Create a configuration:

```shell
# Server host
export HOST=localhost
# Server port
export PORT=8080
# Message of the day
export MOTD='Hello, this is the message of the day!'

npm run create-config
```

Build with Webpack:

```shell
npm run build
```

Serve with Python:

```shell
python3 -m http.server
```

## TODO

* Dockerfile
* Terraform deploy
* Press enter to send
* Autofocus input after send
