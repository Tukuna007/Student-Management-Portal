# Student Management Portal

A full-stack web application for managing student records, built with React (frontend) and Spring Boot (backend), using MySQL as the database. Deployed using Railway for the backend and Netlify for the frontend.

## Features

- User registration and authentication using JWT
- CRUD operations for student data
- Responsive React frontend UI
- RESTful API design with Spring Boot
- MySQL database integration and schema migration with Hibernate

## Tech Stack

- **Frontend:** React, React Router, Axios
- **Backend:** Spring Boot, Spring Security, JWT, Hibernate, MySQL
- **Deployment:** Railway (backend), Netlify (frontend)
- **Containerization:** Docker

## Getting Started

### Prerequisites

- Node.js and npm/yarn for frontend development
- JDK 17 or higher for backend
- Maven for building the backend
- Docker (optional, if using containerized builds)
- Access to a MySQL database or Railway MySQL plugin

### Running Locally

#### Backend

1. Configure MySQL credentials in `application.properties` or via environment variables:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/student_portal_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

   For Railway production, use variables like:

   ```properties
   spring.datasource.url=${SPRING_DATASOURCE_URL}
   spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
   spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
   ```

2. Build and run the backend:

   ```bash
   ./mvnw clean package -DskipTests
   java -jar target/app.jar
   ```

#### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd Frontend/student-portal-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup `.env.local` with:

   ```bash
   REACT_APP_API_URL=http://localhost:8080/api
   ```

4. Start the frontend dev server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 to view in browser.

## Deployment

### Backend

- Deployed on Railway with environment variables set for database connection and JWT secrets
- Uses Docker multi-stage build for production image

### Frontend

- Deployed on Netlify
- Environment variable:

  ```bash
  REACT_APP_API_URL=https://your-railway-backend-url/api
  ```

- Use a `_redirects` file in the public folder to handle client-side routing:

  ```
  /* /index.html 200
  ```

## Troubleshooting

- Ensure environment variables are correctly set in both Railway and Netlify
- Check Railway and Netlify logs for deployment errors
- Backend errors often relate to MySQL connection string or port mismatch
- Frontend issues commonly involve routing or environment variables

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Images

![Alt text](./Images/Screenshot(293).png "Optional title")
![Alt text](./Images/Screenshot(292).png "Optional title")
![Alt text](./Images/Screenshot(291).png "Optional title")
![Alt text](./Images/Screenshot(290).png "Optional title")
![Alt text](./Images/Screenshot(289).png "Optional title")
![Alt text](./Images/Screenshot(288).png "Optional title")