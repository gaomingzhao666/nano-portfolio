FROM node:20-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "dev"]