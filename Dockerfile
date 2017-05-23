FROM node
MAINTAINER tyage <namatyage@gmail.com>

ARG SRCDIR="/usr/local/ssr"

ADD . ${SRCDIR}
WORKDIR ${SRCDIR}

RUN set -x && \
  npm install && \
  ./node_modules/.bin/webpack

CMD node build/server.js

EXPOSE 8080
