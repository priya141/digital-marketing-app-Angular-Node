# Use the official Node.js image as the base image for building Angular
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install the application dependencies
RUN npm install

# Copy the rest of the application code
COPY frontend ./

# Build the Angular app
RUN ng build --prod

# Use the official Nginx image as the base image for serving Angular app
FROM nginx:alpine

# Copy the built Angular app to the Nginx web server directory
COPY --from=build /usr/src/app/dist/digital-marketing-app /usr/share/nginx/html

# Expose the port on which the Nginx web server will run
EXPOSE 80

# Command to start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
