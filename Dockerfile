FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./

ARG REACT_APP_API_URL
ARG REACT_APP_ENVIRONMENT

ENV REACT_APP_API_URL $REACT_APP_API_URL
ENV REACT_APP_ENVIRONMENT $REACT_APP_ENVIRONMENT

RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
