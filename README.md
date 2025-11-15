# Student Management Portal

A full-stack web application for managing student records, built with React (frontend) and Spring Boot (backend), using MySQL as the database. Deployed using Render for the backend and Netlify for the frontend.

## Screenshots

![Login Page](./Images/Screenshot(293).png "Login Page")
![Registration Page](./Images/Screenshot(292).png "Registration Page")
![Dashboard](./Images/Screenshot(291).png "Dashboard")
![Student List](./Images/Screenshot(290).png "Student List")
![Add Student](./Images/Screenshot(289).png "Add Student Form")
![Student Details](./Images/Screenshot(288).png "Student Details")

## Features

- User registration and authentication using JWT
- CRUD operations for student data
- Responsive React frontend UI
- RESTful API design with Spring Boot
- MySQL database integration and schema migration with Hibernate

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

- **Frontend:** React, React Router, Axios
- **Backend:** Spring Boot, Spring Security, JWT, Hibernate, MySQL
- **Deployment:** Render (backend), Netlify (frontend)
- **Containerization:** Docker

## Getting Started

### Prerequisites

- Node.js and npm/yarn for frontend development
- JDK 17 or higher for backend
- Maven for building the backend
- Docker (optional, if using containerized builds)
- Access to a MySQL database

### Running Locally

#### Backend

1. Configure MySQL credentials in `application.properties` or via environment variables:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/student_portal_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

   For Render production, use variables like:

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

## API Endpoints

All endpoints are prefixed with `/api`.

### Auth Endpoints

| Method | Endpoint                | Description           | Body / Params              |
|--------|-------------------------|-----------------------|----------------------------|
| POST   | `/api/auth/register`    | Register new user     | `{ "fullName", "email", "password", "confirmPassword" }` |
| POST   | `/api/auth/login`       | User login            | `{ "email", "password" }`  |

#### Register Example

**Request** (POST `/api/auth/register`):

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Success Response** (201 Created):

```json
{
  "status": "success",
  "message": "User registered successfully"
}
```

### User Endpoints

| Method | Endpoint         | Description           | Authentication |
|--------|------------------|-----------------------|----------------|
| GET    | `/api/users`     | Get all users         | Bearer Token   |
| GET    | `/api/users/me`  | Get current user info | Bearer Token   |

### Student Endpoints

| Method | Endpoint              | Description        | Authentication | Body / Params    |
|--------|-----------------------|--------------------|----------------|------------------|
| GET    | `/api/students`       | Get all students   | Bearer Token   |                  |
| POST   | `/api/students`       | Add new student    | Bearer Token   | `{student data}` |
| GET    | `/api/students/{id}`  | Get student by ID  | Bearer Token   |                  |
| PUT    | `/api/students/{id}`  | Update student     | Bearer Token   | `{student data}` |
| DELETE | `/api/students/{id}`  | Delete student     | Bearer Token   |                  |

### JWT Authentication

For secured endpoints, pass the JWT as an HTTP header:

```
Authorization: Bearer <your_token_here>
```

### Error Responses

- **401 Unauthorized** – Missing or invalid token
- **403 Forbidden** – Insufficient permissions
- **404 Not Found** – Resource doesn't exist
- **400 Bad Request** – Invalid/missing data

**Note:** Your actual API paths/methods may slightly differ depending on your controller mappings. Update the table above if you add or change endpoints.

## Deployment

### Backend

- Deployed on Render with environment variables set for database connection and JWT secrets
- Uses Docker multi-stage build for production image

### Frontend

- Deployed on Netlify
- Environment variable:

  ```bash
  REACT_APP_API_URL=https://student-management-portal-backend.onrender.com/api
  ```

- Use a `_redirects` file in the public folder to handle client-side routing:

  ```
  /* /index.html 200
  ```






---

