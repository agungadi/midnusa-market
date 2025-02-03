# Stage 1: Build the React app
FROM node:20.18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies with frozen lockfile
RUN npm ci

# Copy the rest of your application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using nginx
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Change the default port to 85
RUN sed -i 's/80/3003/g' /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 3003

# Start nginx
CMD ["nginx", "-g", "daemon off;"]