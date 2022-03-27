FROM node:alpine

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . .
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

# RUN npm install
ENTRYPOINT ["docker-entrypoint"]

