FROM node:14

WORKDIR /opt/app

COPY ./src .
COPY package.json .
COPY yarn.lock .

EXPOSE 4000

RUN yarn

CMD yarn watch