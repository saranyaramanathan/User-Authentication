**🔐 Authentication API**

A simple JWT-based authentication API using Node.js, Express, and MongoDB following the MVC pattern.


**📌 Features**

User Registration & Login

Password hashing with bcrypt

JWT-based Authentication

Protected route to get user info

MongoDB integration with Mongoose

MVC folder structure

**Create a .env file**

PORT=5000

MONGO_URI=your-mongodb-uri

JWT_SECRET=your-jwt-secret


**📂 Project Structure**

User-Authentication/

├── config/

│   └── connectionDB.js

├── controllers/

│   └── user.js

├── middleware/

│   └── auth.js

├── models/

│   └── userSchema.js

├── routes/

│   └── user.js

├── .env

├── index.js

├── package.json


**🔗 API Endpoints**

POST /api/user — Register a new user

POST /api/user/login — Login and receive JWT

GET /api/user/:id — Get user info (Protected)


**📃 Sample Requests**

🔸 Register

POST /api/user/register
{
 
  "username": "saranya",
  
  "email": "saranya@example.com",
  
  "password": "password123"
  
}

🔸 Login

POST /api/user/login
{
 
  "email": "saranya@example.com",
  "password": "password123"
  
}

Response:
{
  "token": "<jwt-token>"
}

🔸 Get User Info

GET /api/user:id

Authorization: Bearer <jwt-token>

Response:

{
  
  "username": "saranya",
  
  "email": "saranya@example.com"
  
}




