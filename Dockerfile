FROM node

ARG SRCDIR="/usr/local/ssr"

ADD . ${SRCDIR}

RUN set -x \
  cd ${SRCDIR} && \
  npm install && \
  ./node_modules/.bin/webpack

WORKDIR ${SRCDIR}
CMD node build/server.js
EXPOSE 8080
