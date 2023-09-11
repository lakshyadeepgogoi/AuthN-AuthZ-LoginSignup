# Authentication and Authorization System with Node.js, MongoDB, and JWT

This repository contains a Node.js backend project that implements an authentication and authorization system, complete with login and signup functionality, user roles (Admin and Student), JWT (JSON Web Tokens) for secure authentication, bcrypt for password encryption, and cookies for session management.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [JWT (JSON Web Tokens)](#jwt-json-web-tokens)
- [Bcrypt Password Encryption](#bcrypt-password-encryption)
- [Database Connection](#database-connection)
- [Express Middleware](#express-middleware)
- [User Model](#user-model)
- [Routes](#routes)
- [Middleware Functions](#middleware-functions)
- [Controllers](#controllers)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Node.js backend project provides a robust authentication and authorization system. Users can sign up, log in, and access protected routes based on their roles (Admin or Student). The project is designed to demonstrate best practices for building secure authentication systems.

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database used for storing user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Tokens)**: A method for securely transmitting information between parties as JSON objects.
- **Bcrypt**: A password hashing library used to securely store user passwords.
- **Cookies**: Used for session management and maintaining user authentication.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A code editor (e.g., Visual Studio Code)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/auth-system.git
   ```

2. Navigate to the project directory:

   ```shell
   cd auth-system
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=3000
   MONGODB_URI=your-mongodb-connection-uri
   JWT_SECRET=your-secret-key
   ```

   Replace `your-mongodb-connection-uri` with your MongoDB connection URI and `your-secret-key` with a secure secret key for JWT.

## Project Structure

The project follows a structured layout for better organization:

- **index.js**: The main file that sets up the Express app, middleware, and routes.
- **./config/database.js**: Connects to the MongoDB database using Mongoose.
- **./routes/user.js**: Defines routes for login, signup, and protected routes with middleware functions.
- **./models/User.js**: Defines the User schema for MongoDB using Mongoose.
- **./middleware/auth.js**: Middleware functions for checking JWT and user roles.
- **./controllers/Auth.js**: Functions to handle user login and signup requests.

## JWT (JSON Web Tokens)

JWT (JSON Web Tokens) is a compact, URL-safe means of representing claims to be transferred between two parties. In this project, JWTs are used for secure user authentication. When a user logs in, they receive a JWT token, which is included in subsequent requests to access protected routes.

## Bcrypt Password Encryption

Bcrypt is used to securely hash and store user passwords in the database. This ensures that user passwords are not stored in plain text and provides a high level of security.

## Database Connection

The project uses MongoDB as the database, connected via Mongoose. The `./config/database.js` file handles the database connection, using the provided MongoDB connection URI.

## Express Middleware

Middleware functions, such as `express.json` and `cookie-parser`, are used to handle incoming requests and manage cookies. These functions are configured in `index.js` to process data and maintain user sessions.

## User Model

The User model, defined in `./models/User.js`, specifies the structure of the User document in the MongoDB database. It includes fields such as username, email, password hash, and role.

## Routes

Routes for user authentication and authorization are defined in `./routes/user.js`. These include routes for user signup, login, and protected routes that require authentication and specific roles (Admin or Student).

## Middleware Functions

The `./middleware/auth.js` file exports middleware functions that check JWTs and user roles. These functions are used to protect routes and ensure that only authorized users can access them.

## Controllers

The `./controllers/Auth.js` file exports functions that handle user login and signup requests. These functions interact with the database and manage JWT generation and user authentication.

## Usage

To use this project as a foundation for your authentication and authorization system:

1. Configure the `.env` file with your MongoDB connection URI and secret key.

2. Define your desired user roles, routes, and additional user fields as needed.

3. Customize error handling, validation, and responses according to your project requirements.

4. Build frontend components to interact with the backend authentication system.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Contributions are welcome and appreciated.

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use and modify it for your own projects.
