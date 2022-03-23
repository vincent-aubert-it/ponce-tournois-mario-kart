#!/bin/sh
cd /var/app/client

echo '---------- BEFORE CLIENT INSTALL ----------'
npm i
echo '---------- AFTER CLIENT INSTALL ----------'

echo '---------- BEFORE UPDATE BROWSER LIST ----------'

echo 'WHO AM I ?'
whoami
npm cache clean --force
npx browserslist@latest --update-db
echo '---------- AFTER UPDATE BROWSER LIST ----------'

echo '---------- BEFORE CLIENT BUILD ----------'
npm run build
echo '---------- AFTER CLIENT BUILD ----------'

cd /var/app
npm i
node index.js
