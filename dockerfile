FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm build

EXPOSE 3000
CMD ["npm", "dev"]