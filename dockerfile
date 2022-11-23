FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "vite" ]
