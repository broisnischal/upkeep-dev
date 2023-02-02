FROM node:18-alpine
WORKDIR /usr/api
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]