FROM node:14

WORKDIR /app
COPY . .

COPY package*.json ./
COPY prisma ./prisma/

# RUN apt-get update -y && apt-get upgrade -y

RUN npm install
# RUN npx prisma migrate dev --name init
# RUN npx prisma generate
RUN npm start

CMD ["npm", "start"]
