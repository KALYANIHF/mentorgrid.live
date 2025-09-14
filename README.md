# MentorGrid.io Backend

MentorGrid.io is a backend API built with **Node.js** and **Express**, providing user authentication, course management, and enrollment functionality.  
This project is designed for bootcamp-style applications where admins can publish courses and users can register, login, and enroll.

---

## 🚀 Features
- **User Authentication**
  - Register and login with JWT-based authentication
  - Secure password hashing with bcrypt

- **Role-based Access**
  - Admins can publish and manage courses
  - Users can browse and enroll in courses

- **Course Management**
  - Create, update, and delete courses (Admin only)
  - View available courses

- **Enrollments**
  - Users can enroll in courses
  - Track user enrollments

- **Database**
  - MongoDB used for data storage
  - Mongoose ODM for schema modeling

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JWT (JSON Web Tokens), bcrypt

---

## 📂 Project Structure
```
mentorgrid.io/
├── src/
│   ├── config/        # DB connection, environment setup
│   ├── controllers/   # Route logic (auth, course, user)
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── middleware/    # Auth & error handling middleware
│   └── server.js      # Entry point
├── .env               # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mentorgrid.io.git
   cd mentorgrid.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

---

## 📌 API Endpoints

### Auth
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive a JWT

### Users
- `GET /api/users/me` – Get logged-in user details

### Courses
- `POST /api/courses` – Create a new course (Admin only)
- `GET /api/courses` – Get all courses
- `GET /api/courses/:id` – Get course details
- `PUT /api/courses/:id` – Update a course (Admin only)
- `DELETE /api/courses/:id` – Delete a course (Admin only)

### Enrollments
- `POST /api/courses/:id/enroll` – Enroll in a course (User only)
- `GET /api/users/me/enrollments` – Get enrolled courses

---

## ✅ Scripts
- `npm run start` – Start server
- `npm run dev` – Start server with nodemon (for development)

---

## 📖 Future Improvements
- Add payment gateway integration for course enrollment
- Add progress tracking for users
- Add reviews and ratings for courses
- Add email notifications

---

## 📝 License
This project is licensed under the **MIT License**.
