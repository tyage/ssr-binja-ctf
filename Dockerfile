FROM node
MAINTAINER tyage <namatyage@gmail.com>

ARG SRCDIR="/usr/local/ssr"

# install dependencies
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

# setup xinetd
RUN set -x && \
  apt-get update && \
  apt-get install -y xinetd
COPY conf/xinetd.conf /etc/xinetd.d/ssr

CMD ["sh", "-c", "touch /var/log/xinetd.log && service xinetd start && tail -f /var/log/xinetd.log"]

EXPOSE 8080
