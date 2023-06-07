FROM node:alpine

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

# COPY ENV variable
COPY .env.production ./.env

RUN npm install

# Run and expose the server on port 5050
EXPOSE 5050
EXPOSE 5555

CMD npm start