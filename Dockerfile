FROM node:16-alpine

WORKDIR /backend

COPY *.json ./


RUN npm install

RUN npm run build
COPY . .


CMD [ "npm","run", "start:dev" ]