# Use official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-focal

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot jar to the container
COPY target/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
