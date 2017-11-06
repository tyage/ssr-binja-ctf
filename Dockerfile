FROM node
MAINTAINER tyage <namatyage@gmail.com>

ARG SRCDIR="/usr/local/ssr"

ADD . ${SRCDIR}
WORKDIR ${SRCDIR}

RUN set -x && \
  npm install && \
  npm run build

ADD conf/xinetd.conf /etc/xinetd.d/ssr

RUN set -x && \
  apt-get update && \
  apt-get install -y xinetd

CMD ["sh", "-c", "touch /var/log/xinetd.log && service xinetd start && tail -f /var/log/xinetd.log"]

EXPOSE 8080
