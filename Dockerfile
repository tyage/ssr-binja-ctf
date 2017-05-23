FROM node

ARG SRCDIR="/usr/local/ssr"

RUN mkdir ${SRCDIR}

ADD . ${SRCDIR}
WORKDIR ${SRCDIR}
CMD node build/server.js
EXPOSE 8080
