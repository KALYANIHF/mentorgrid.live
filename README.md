# MentorGrid.live Backend

MentorGrid.live is a backend API built with **Node.js** and **Express**, providing user authentication, course management, and enrollment functionality.  
This project is designed for bootcamp-style applications where admins or publisher can publish courses and users can register, login, and enroll in thouse coures

> Visit: [https://mentorgrid.live](https://mentorgrid.live)

---

## 🚀 Features

- **User Authentication**

  - Register and login with JWT-based authentication
  - Secure password hashing with bcrypt

- **Role-based Access**

  - Admins can publish and manage courses
  - Users can browse and enroll in courses

- **Course Management**

  - Create, update, and delete courses (Admin/Publisher only)
  - View available courses

- **Bootcamp Management**

  - Create, update, and delete Bootcamps (Admin/Publisher only)
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
- **Email Service:** AWS SES for sending emails
- **Swagger:** API documentation with Swagger UI

---

## 📂 Project Structure

```
mentorgrid.live/
├── .env               # Environment variables (encrypted)
├── .env.keys          # Not provided this holds the encryption key sha256
├── _data/             # Initial data files
├── config/            # Environment variables
├── controllers/       # Controller function to handle the route request
├── doc/               # Contains all the doc for the API
├── handlers/          # helper function to do the same handler function task
├── middleware/        # Middleware function to handle the route request
├── models/            # Mongoose schemas
├── public/            # Static files (index.html)
├── routes/            # Express routes
├── swagger.js         # Swagger configuration
├── seeds/             # Initial data seeding
├── tests/             # Unit tests
├── .gitignore         # Files to ignore during commit
├── package-lock.json
├── package.json
├── LICENSE            # License file
├── server.js          # Entry point
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/mentorgrid.io.git
   cd mentorgrid.live
   ```

2. **Install dependencies**

   ```bash
    bun install
   ```

   OR

   ```bash
    npm install
   ```

   OR

   ```bash
    pnpm install
   ```

---

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   all values are encrypted using dotenvx and you have to use your own values in the place of that
   ```

4. **Run the server**
   ```bash
   bun start
   ```
   The server will run on `http://localhost:4033`.

---

## 📌 API Endpoints

---

### 🔑 Auth

- `POST /api/v1/auth/register` – Register a new user
- `POST /api/v1/auth/login` – Login and receive a JWT
- `GET /api/v1/auth/me` – Get Login user by Token
- `POST /api/v1/auth/forgetpassword` – Forgotten Password
- `POST /api/v1/auth/resetpassword/:token` – Reset Password
- `PUT /api/v1/auth/updatedetails` – Update User Details (name and email only)
- `GET /api/v1/auth/logout` – Logout the current login user

---

### 👤 Users

- `GET /api/v1/users` – Get logged-in user details
- `GET /api/v1/users/:useId` – Get user details by ID
- `POST /api/v1/users` – Create a User
- `PUT /api/v1/users/:useId` – Update user details by ID
- `DELETE /api/v1/users/:useId` – Delete user by ID

---

### 🏫 Bootcamps

- `GET /api/v1/bootcamps` - Public Get all bootcamps
- `GET /api/v1/bootcamps/:id` - Public Get a single bootcamp by ID
- `POST /api/v1/bootcamps` - Private Create a new bootcamp
- `PUT /api/v1/bootcamps/:id` - Private Update an existing bootcamp by ID
- `DELETE /api/v1/bootcamps/:id` - Private Delete a bootcamp by ID
- `PUT /api/v1/bootcamps/:id/photos` - Private Upload Photos for the Bootcamp

---

### 📝 Reviews & Ratings

- `POST /api/v1/reviews` – Create a new review (owner of the review only)
- `GET /api/v1/reviews` – Get all reviews
- `PUT /api/v1/reviews/:id` – Update a review (owner of the review only)
- `GET /api/v1/reviews/:id` – Get a single review by ID (owner of the review only)
- `DELETE /api/v1/reviews/:id` – Delete a review by ID (owner of the review only)

### 📚 Courses

- `POST /api/v1/courses` – Create a new course (Admin/Publisher only)
- `GET /api/v1/courses` – Get all courses
- `GET /api/v1/courses/:id` – Get a Single course details
- `GET /api/v1/bootcamps/:id/courses` – Get all courses in a Bootcamp
- `PUT /api/v1/courses/:id` – Update a course (Admin/Publisher only)
- `DELETE /api/v1/courses/:id` – Delete a course (Admin/Publisher only)

---

## ✅ Scripts

- `npm run start` – Start server
- `npm run dev` – Start server with nodemon (for development)

---

## 🚀 Deployment

- Deploy to Render MCP Server
- Deploy to Heroku

## 📖 Future Improvements

- Add payment gateway integration for course enrollment
- Add progress tracking for users
- Add reviews and ratings for courses
- Add email notifications

---

## 📝 License

This project is licensed under the **MIT License**.
