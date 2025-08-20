# Base image
FROM cirrusci/flutter:latest

# Set working directory
WORKDIR /app

# Copy the pubspec.yaml and install dependencies
COPY pubspec.yaml ./
RUN flutter pub get

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 8080

# Start the application
CMD ["flutter", "run", "--web-port=8080"]
