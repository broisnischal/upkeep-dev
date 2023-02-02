FROM node:18-alpine
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
EXPOSE 8000
CMD ["npm", "run", "dev"]