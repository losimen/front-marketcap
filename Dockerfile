FROM node:20.18-alpine as builder

MAINTAINER Bohdan Oskin <snizinkavolshebna@gmail.com>

RUN apk update && apk upgrade --available
RUN apk add --update python3
RUN python3 -V
WORKDIR /app

COPY src .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist /app/public
COPY etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
