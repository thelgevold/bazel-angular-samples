FROM ubuntu:latest

RUN apt-get update
RUN apt-get -y install openjdk-8-jdk
RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade bazel

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

RUN npm i npm@latest -g

WORKDIR /usr

COPY package.json /usr
COPY WORKSPACE /usr
COPY BUILD.bazel /usr
COPY tsconfig.json /usr
COPY angular.tsconfig.json /usr
COPY index.html /usr
COPY rollup.config.js /usr

RUN npm install

RUN node_modules/.bin/ngc -p angular.tsconfig.json

CMD [ "npm", "start" ]