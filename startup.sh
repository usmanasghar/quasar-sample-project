#!/bin/bash
cd /app && npm install -g pm2 && nohup pm2 start "npm run dev" &
apachectl -D FOREGROUND
