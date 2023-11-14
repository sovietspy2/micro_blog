# Use the official Nginx base image
FROM nginx:latest

# Set the working directory to the default Nginx web root
WORKDIR /usr/share/nginx/html

# Copy static content into the container
COPY ./src /usr/share/nginx/html

# Expose port 80
EXPOSE 80