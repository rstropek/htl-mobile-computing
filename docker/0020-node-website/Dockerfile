FROM node as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "server.js"]
