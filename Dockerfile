FROM ruby:2.5.3
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y \
    curl build-essential libpq-dev
RUN apt-get install -y --no-install-recommends yarn

RUN apt-get -y autoclean
RUN mkdir -p /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.11.3

RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN node -v
RUN npm -v
RUN yarn -v

WORKDIR /app
ADD . /app

RUN bundle && yarn

EXPOSE 3200
EXPOSE 3040
CMD rails s -b 0.0.0.0 -p 3200
