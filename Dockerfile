
FROM node:latest
COPY . .
RUN npm install
EXPOSE 5500
CMD [ "node", "index.js"]