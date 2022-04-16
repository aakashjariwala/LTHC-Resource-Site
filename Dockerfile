FROM node:16-alpine3.12 as builder
ENV NODE_ENV production

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

