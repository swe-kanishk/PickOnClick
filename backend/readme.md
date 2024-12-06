## Features

- User registration with validation.
- User login with JWT-based authentication.
- Password hashing for security.

## Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Validation: express-validator
- Authentication: JWT, bcrypt

## Quick Start

1. Clone the Repository:
   git clone https://github.com/swe-kanishk/PickOnClick.git
   cd backend

2. Install Dependencies:
   npm install

## API Endpoints

**Base URL**: `/`

1. **GET /**

   - **Description**: Health check for the API.
   - **Response**:
     - 200: Returns "hello".

2. **POST /users/register**

   - **Description**: Registers a new user.
   - **Request Body**:
     ```
     {
       "fullname": {
         "firstname": "John",
         "lastname": "Doe"
       },
       "email": "john.doe@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     - 201: User successfully registered, returns a token and user details.
     - 400: Validation error.

3. **POST /users/login**
   - **Description**: Authenticates a user.
   - **Request Body**:
     ```
     {
       "email": "john.doe@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     - 200: Login successful, returns a token and user details.
     - 401: Invalid email or password.
     - 400: Validation error.
