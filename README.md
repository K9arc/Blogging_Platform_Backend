# 📝 Blogging Platform - Backend

This is the backend service of the **Blogging Platform** built with **Node.js**, **Express**, and **MySQL**. It handles user authentication and blog post management through a set of secure RESTful APIs.

---

## ⚙️ Tech Stack

- **Node.js** + **Express.js**
- **MySQL** with **Sequelize ORM**
- **JWT** for authentication
- **BCrypt** for password hashing
- **CORS** and **Dotenv** for configuration

---

## ✅ Features

- 🔐 **User Authentication**
  - Signup with username, email, and password
  - Secure login and JWT-based session management
  - Protected routes with middleware

- 📝 **Blog Post Management**
  - Create, read, update, and delete (CRUD) posts
  - Only the author can modify or delete their own posts
  - Public endpoint to fetch all blog posts
  - View individual post by ID

---

## 🧠 My Approach

- Structured the app using **MVC architecture**.
- Used **Sequelize models** for clean database interaction.
- Implemented **middleware** to handle authentication and route protection.
- Followed RESTful best practices for endpoint design.
- Separated configuration, routes, controllers, and models for clarity and maintainability.

---

## 🤖 How I Used AI Tools

I used **ChatGPT** and **Copilot** to:
- Scaffold the Express application with authentication
- Write Sequelize model relationships and migrations
- Create route guards for protected endpoints
- Help debug async/await issues in controller logic
- Draft reusable utility functions and response formats

---

## 🔧 Installation & Setup

1. Clone the Repository

```bash
git clone https://github.com/K9arc/Blogging_Platform_Backend
cd backend

2. Install Dependencies
   npm install
