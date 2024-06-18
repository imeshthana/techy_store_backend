FROM node:22-alpine

WORKDIR app

COPY . .

RUN npm install -g nodemon

EXPOSE 4001

CMD ["npm", "start"]
