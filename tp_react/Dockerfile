# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install 
CMD ["npm", "run", "start"]