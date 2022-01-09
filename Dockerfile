#FROM node:latest
#WORKDIR /app
#COPY package.json .
#RUN npm install
#COPY . .
#EXPOSE 4200 49153
#CMD npm run start

FROM nginx:latest
COPY /dist/angular-basics/ /usr/share/nginx/html/
