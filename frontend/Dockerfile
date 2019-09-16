FROM node:10.16-alpine
WORKDIR /usr/src/app/frontend
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]