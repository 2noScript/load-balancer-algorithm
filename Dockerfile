FROM node:20.11.0

WORKDIR /home/app


RUN apt update
RUN apt list --upgradable

COPY package*.json ./
RUN yarn 

COPY ./test . 



EXPOSE 3000


CMD ["yarn", "start-test"]