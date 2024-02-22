FROM node:18.17.1

WORKDIR /home/app


RUN apt update
RUN apt list --upgradable

COPY package*.json ./

RUN yarn 

COPY . . 



EXPOSE 3000


CMD ["yarn", "start-test"]