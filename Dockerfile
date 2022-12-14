FROM node 
WORKDIR / 
COPY ./ /
RUN npm install 
CMD [ "npm", "run", "start" ]

