FROM node:alpine


WORKDIR /App


COPY package*.json ./
RUN npm install


COPY App/ ./




EXPOSE 3000


CMD ["npm", "start"]