FROM node:latest

WORKDIR /usr/src/app

COPY index.js .
COPY package.json .
RUN npm init -y && \
  npm i --save

ENTRYPOINT ["node", "."]
