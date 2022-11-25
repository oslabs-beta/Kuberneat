FROM node 
WORKDIR /zeus 
COPY ./zeus /zeus
RUN npm install 
CMD [ "npm", "run", "start" ]

