FROM node

ARG SRCDIR="/usr/local/ssr"

RUN mkdir ${SRCDIR}
ADD . ${SRCDIR}

RUN set -x \
  cd ${SRCDIR} && \
  npm install && \
  ./node_modules/.bin/webpack

WORKDIR ${SRCDIR}
CMD node build/server.js
EXPOSE 8080
