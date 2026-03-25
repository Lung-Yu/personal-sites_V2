# --- Dev stage ---
FROM node:20-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Prod stage (nginx) ---
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html/personal-sites_V2
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
