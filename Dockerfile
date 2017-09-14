FROM node
MAINTAINER tyage <namatyage@gmail.com>

ARG SRCDIR="/usr/local/ssr"

ADD . ${SRCDIR}
WORKDIR ${SRCDIR}

RUN set -x && \
  npm install && \
  npm run build

CMD node start

EXPOSE 8080
