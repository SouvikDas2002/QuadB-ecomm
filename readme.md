# MERN Stack E-Commerce Web Application

## Introduction
This is a basic-featured E-Commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to browse products, add items to the cart, and place orders. Admin users can manage products, categories, and user accounts.

## Features
- User authentication and authorization
- Product listing and search
- Shopping cart functionality
- Order management
- Admin panel for managing products, categories, and users
- Responsive design for optimal viewing on various devices

## Technologies Used
- *Frontend:* React.js, Redux, Bootstrap
- *Backend:* Node.js, Express.js
- *Database:* MongoDB
- *Authentication:* JWT (JSON Web Tokens)

## Installation
To set up the project locally, follow these steps:

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Clone the Repository
```bash
git clone https://github.com/SouvikDas2002/QuadB-ecomm
cd mern-ecommerce

### Install Dependencies

**backend
cd backend
npm install

**frontend
cd ../frontend
npm install

###Set Up Environment Variables
Create a .env file in the backend directory and add the following:

** .env file
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Run the Application
** Backend
cd backend
nodemon server

** frontend
->In another terminal
cd frontend
npm start

##Usage
Navigate to http://localhost:3000 in your web browser to access the frontend.
The backend server runs on http://localhost:4000.

### Folder Structure
mern-ecommerce/
├── backend/
│   ├── dbconfig
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── helper
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── routes/
    │   |----index.css
    │   ├── App.js
    │   ├── index.js
    │   └── package.json