FROM node

ARG SRCDIR="/usr/local/ssr"
ADD . ${SRCDIR}
WORKDIR ${SRCDIR}
CMD node build/server.js
EXPOSE 8080
