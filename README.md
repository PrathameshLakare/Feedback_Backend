````markdown
# 🛠️ Feedback App - Backend

This is the **Node.js/Express backend** for the Feedback Web Application. It handles feedback submissions and retrieval using MongoDB.

---

## ✨ Features

- REST API to store and retrieve feedback
- Stores name, email, message, and timestamp
- Uses MongoDB via Mongoose
- Environment config via `.env`

---

## 🧰 Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- dotenv
- CORS

---

## 🚀 Getting Started

### 1. Install dependencies

```bash

npm install
```
````

### 2. Create a .env file in the root of backend:

PORT=5000
MONGODB_URI=mongodb-url

Replace the URI with your actual MongoDB connection string.

### 3. Start the server

```bash

npm run dev

```

Backend will run at: http://localhost:5000

## 🚀 API Endpoints

| Method | Endpoint     | Description                |
| ------ | ------------ | -------------------------- |
| POST   | /v1/feedback | Submit new feedback        |
| GET    | /v1/feedback | Get all submitted feedback |
