FROM node:latest
ADD . /app
WORKDIR /app
RUN npm install
CMD ["node", "/service/index.js"]