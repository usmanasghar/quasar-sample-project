FROM node:16.20.0-alpine AS build
WORKDIR /app

RUN rm -rf .env.example
COPY .env .
COPY . .
RUN yarn install
RUN yarn build

FROM httpd:latest
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/
COPY frontend.conf /usr/local/apache2/conf/httpd.conf
