# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /code/book-store-ui/

# add `/code/book-store-ui/node_modules/.bin` to $PATH
ENV PATH /code/book-store-ui/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install sass --silent
RUN npm install redux-devtools-extension --silent

# add app
COPY . ./

# start app
ENTRYPOINT ["npm", "start"]