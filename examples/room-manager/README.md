# Room Manager example

A simple web server that uses the SDK to manage rooms and users on a Jellyfish server instance.

## Prerequisites

- Node.js
- Docker Compose

## Running

To start the Jellyfish server and the Room Manager, run the following commands:

```sh
EXTERNAL_IP=`ifconfig | grep 192.168 | cut -d ' ' -f 2` JELLYFISH_VERSION=edge docker compose up
cp .env.example .env
npm install
npm start
```

## Usage

Use

```sh
curl http://localhost:8080/rooms/exampleRoom/users/exampleUser
```

to obtain the websocket URL and authentication token of the `exampleUser` to connect to the `exampleRoom`.

Feel free use the example from
[react-client-sdk](https://github.com/jellyfish-dev/react-client-sdk/tree/main/examples/minimal-react) to test the
connection to the Jellyfish server with the provided token.
