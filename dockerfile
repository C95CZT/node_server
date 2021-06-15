FROM node:12

WORKDIR /home/node/app

COPY . ./

RUN npm install
RUN npm run buildDev

EXPOSE 8818

CMD [ "node", "./dist/server.js" ]