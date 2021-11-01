# Algorand connector

## Documentation

Check the OpenApi 3.0 documentation in `./interfaces/http/docs/api.yaml`

## System dependencies
- NodeJs
- MongoDB
- HTTP port
- AMQP
- Algorand network access


## Instalation

- Create a .env file following the .env.example
- `npm install`
- `node index.js` to deploy the http interface
- `node worker.js` to deploy the worker
