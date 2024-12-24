FROM node:20.11.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
