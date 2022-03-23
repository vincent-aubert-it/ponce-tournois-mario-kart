FROM node:alpine

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . .
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint
RUN chown -R node:node /home/node
RUN chown -R node:node /var/app

USER node

# RUN npm install
ENTRYPOINT ["docker-entrypoint"]

