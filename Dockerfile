FROM node:9.11.1-alpine

ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn

ENV HOST 0.0.0.0
EXPOSE 3000
