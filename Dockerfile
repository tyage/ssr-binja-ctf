FROM node
MAINTAINER tyage <namatyage@gmail.com>

ARG SRCDIR="/usr/local/ssr"

COPY package.json /tmp/package.json
WORKDIR /tmp
RUN set -x && \
  npm install && \
  mkdir ${SRCDIR} && \
  mv /tmp/node_modules ${SRCDIR}/node_modules

# build sources
COPY . ${SRCDIR}
WORKDIR ${SRCDIR}
RUN set -x && \
  npm run build

CMD ["node", "build/server.js"]

EXPOSE 8080
