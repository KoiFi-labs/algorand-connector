FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN npm i
RUN npm install -g nodemon mocha supervisor

# Set grants SA and bundle app source
RUN chown -R node:node .

# Change SA
USER node

# Run app
CMD [ "npm", "start" ]
