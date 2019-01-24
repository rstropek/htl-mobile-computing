FROM node:alpine
COPY ./dist /app
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]
