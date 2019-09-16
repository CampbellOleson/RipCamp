FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --silent

ARG NODE_ENV=production
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . . 
EXPOSE 5000
CMD ["npm", "run", "dev"]