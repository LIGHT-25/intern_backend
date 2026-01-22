🔐 Backend Authentication & Payment API

A secure and scalable backend application built using Node.js, Express, and MongoDB, featuring JWT-based authentication, role-based access control (RBAC), and payment transaction handling.
This project demonstrates real-world backend patterns suitable for internships, portfolios, and production-ready systems.

🚀 Features

User registration & login

JWT-based authentication

Role-based access control (User / Admin)

Protected API routes

Payment processing & transaction logging

MongoDB Atlas cloud database integration

Secure password hashing

Clean REST API design

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas

Authentication: JWT (JSON Web Token)

Security: bcrypt

API Testing: Postman

📁 Project Structure
├── controllers
│   ├── auth.controller.js
│   ├── payment.controller.js
├── middlewares
│   ├── auth.middleware.js
│   ├── role.middleware.js
├── models
│   ├── user.model.js
│   ├── transaction.model.js
├── routes
│   ├── auth.routes.js
│   ├── payment.routes.js
│   ├── user.routes.js
├── config
│   ├── db.js
├── .env
├── server.js
└── README.md

📸 Screenshots & API Flow
1️⃣ User Registration API

POST /api/auth/register

Accepts name, email, and password

Password is securely hashed before storage

Returns 201 Created on success

User data stored in MongoDB

2️⃣ User Login API

POST /api/auth/login

Validates user credentials

Generates JWT token on success

Token required for protected routes

3️⃣ Protected User Route

GET /api/user

Requires Bearer token

Accessible only to authenticated users

Verifies JWT via middleware

4️⃣ Protected Test Route

Demonstrates JWT verification

Returns decoded token payload

Confirms middleware execution

Useful for debugging authentication flow

5️⃣ Admin Route – Access Denied

GET /api/admin

Blocks non-admin users

Returns 403 Forbidden

Enforces role-based restrictions

6️⃣ Admin Route – Access Granted

Accessible only to admin users

Confirms role validation

Demonstrates RBAC implementation

7️⃣ Users Collection (MongoDB Atlas)

Stores registered users

Passwords stored in encrypted format

Includes roles and timestamps

Managed via MongoDB Atlas

8️⃣ Database Overview

Clean collection separation

Users and transactions managed independently

Optimized for scalability

Indexed for performance

9️⃣ Payment API

POST /api/payment/pay

Records payment transactions

Linked to authenticated users

Returns transaction details

Ensures data integrity

🔟 Transactions Collection

Stores all payment records

Tracks amount, status, and timestamps

User-linked transaction history

Suitable for audits and analytics

🔐 Security Highlights

JWT-based authentication

Password hashing using bcrypt

Role-based route protection

Secure environment variable handling

Middleware-driven authorization

⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project directory
cd your-repo-name

# Install dependencies
npm install

# Run the server
npm run dev

🔑 Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

📌 API Testing

All APIs tested using Postman

JWT token passed via Authorization → Bearer Token

Screenshots included for reference

🎯 Use Cases

Backend internship project

Authentication boilerplate

Role-based access systems

Payment & transaction services

Portfolio-ready backend application

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Rupak Chatterjee
Backend Developer | Node.js | MongoDB | REST APIs
