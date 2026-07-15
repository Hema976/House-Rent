# 🏠 House Rent Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application developed for online house rental management. The platform allows property owners to list rental properties and enables tenants to search, book, review, and manage rental houses securely.

---

# 🌐 Live Demo

### Frontend (Vercel)

https://house-rent-five.vercel.app/

### Backend API (Render)

https://house-rent-lt8a.onrender.com/

---

# 🎥 Project Demo Video

A complete demonstration of the House Rent Management System is available below.

### Google Drive Demo

(Add your Google Drive Demo Link Here)

The demo includes:

- User Registration
- User Login
- Property Listing
- Property Search
- Property Details
- Property Booking
- Payment System
- Review System
- Owner Dashboard
- Tenant Dashboard
- Admin Dashboard
- Backend API
- MongoDB Connection

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- React Router
- Axios
- HTML5
- CSS3
- Bootstrap

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

# 👥 User Roles

The application supports three user roles.

## Tenant

- Register
- Login
- Search Properties
- View Property Details
- Book House
- Make Payment
- Submit Reviews
- View Booking History
- Manage Profile

## Property Owner

- Login
- Add Property
- Edit Property
- Delete Property
- Manage Property Listings
- View Booking Requests

## Administrator

- Manage Users
- Manage Properties
- Manage Bookings
- Manage Reviews
- Monitor Payments

---

# ✨ Main Features

## Tenant Features

- Secure Registration
- JWT Authentication
- Search Rental Houses
- Property Filtering
- View Property Details
- Book Rental House
- Online Payment
- Review Properties
- Booking History
- Profile Management

## Owner Features

- Add New Property
- Edit Property
- Delete Property
- View Bookings
- Manage Listings

## Administrator Features

- User Management
- Property Management
- Booking Management
- Payment Monitoring
- Review Monitoring

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- MongoDB Data Security
- ---

# 📂 Project Structure

The repository contains separate frontend and backend applications.

```
House-Rent/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── README.md
└── LICENSE
```

---

# ⚙️ Environment Configuration

Create a `.env` file inside the **server** folder.

Example configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| PORT | Express Server Port |
| MONGODB_URI | MongoDB Atlas Connection String |
| JWT_SECRET | Secret key used for JWT Authentication |

> **Note:** Never commit your real MongoDB connection string or JWT secret to GitHub.

---

# 💻 Installation and Running

## Prerequisites

Before running the project install:

- Node.js
- npm
- Git
- MongoDB Atlas Account

---

## Clone Repository

```bash
git clone https://github.com/Hema976/House-Rent.git
```

```bash
cd House-Rent
```

---

## Install Backend Dependencies

```bash
cd server
npm install
```

---

## Configure Environment Variables

Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

---

## Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Start Frontend

```bash
npm run dev
```

---

# 🚀 Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# 🔌 API Overview

## Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

## Property

- GET `/api/properties`
- GET `/api/properties/:id`
- POST `/api/properties`
- PUT `/api/properties/:id`
- DELETE `/api/properties/:id`

## Booking

- GET `/api/bookings`
- POST `/api/bookings`

## Payment

- POST `/api/payments`

## Reviews

- GET `/api/reviews`
- POST `/api/reviews`

---

# 📄 License

This project was developed for educational purposes as part of the APSCHE SmartBridge Internship.

---

# 👨‍💻 Team

**Team Lead**

- Hema K

**Team Members**

- Hari Priya Muppala
- Swathi Ganjilla
- Tatigunta Chasanth Reddy
- Shalini Chitikela

---

# ❤️ Acknowledgement

Developed as part of the **APSCHE SmartBridge Full Stack Internship Program** using the MERN Stack.
