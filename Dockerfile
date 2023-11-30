# dockerfile

#stage 1
FROM node:18.18.2-alpine3.18
LABEL authors="erastian"
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm ci --loglevel verbose
CMD ["npm", "run", "dev"]

#RUN npm run build
#
## # stage 2
#FROM nginx:stable-alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]