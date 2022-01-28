FROM node:17-alpine

RUN mkdir -p /home/file-converter
WORKDIR /home/file-converter

COPY . /home/file-converter/
RUN npm install

CMD npm run start