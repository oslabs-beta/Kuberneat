FROM node:18.12.1
WORKDIR / 
COPY ./ /
RUN npm install --force
EXPOSE 3000
CMD [ "npm", "run", "electron"]
ENTRYPOINT node ./src/server/server.ts