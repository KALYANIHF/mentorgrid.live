## Register a User

**POST** `/api/v1/auth/register`

**Access:** Public

---

### Description

Registers a new user in the system with `name`, `email`, `password`, and `role`. Returns a JWT token and user details.

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123",
  "role": "user"
}
```

### Example Response

```json
{
  "success": true,
  "message": "User Registerd Successfully",
  "data": {
    "_id": "6501a8f9e18a5b3c9c1aab12",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2025-10-01T10:30:00.000Z"
  },
  "token": "jwt_token_here"
}
```

---

### Login User

**POST** `/api/v1/auth/login`
**Access:** Public

---

### Description

Logs in a user using email and password. Returns a JWT token and user details.

### Request Body:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

---

### Logout User

**GET** `/api/v1/auth/logout`
**Access:** Public

---

### Description

Logs out the current user by clearing the JWT cookie.

---

### Get Current User

**GET** `/api/v1/auth/me`
**Access:** Private/admin or publisher (JWT Token required)

---

### Description

Retrieves the currently logged-in user’s details using their JWT token.

---

### Forgot Password

**GET** `/api/v1/auth/forgotpassword`
**Access:** Public

---

### Description

Generates a reset password token and sends a reset link to the user’s email.

### Request Body

```json
{
  "email": "john@example.com"
}
```

---

### Reset Password

**POST** `/api/v1/auth/resetpassword/:token`
**Access:** Public

---

### Description

Resets the user's password using the provided reset token and new password.

### Request Body:

```json
{
  "success": true,
  "message": "Password Reset Successfully",
  "token": "jwt_token_here"
}
```

### Request Params

- `token` (required): The reset password token received in the email.

---

### Update User Details

**PUT** `/api/v1/auth/updateuser`
**Access:** Private/admin or publisher (JWT Token required)

---

### Description

Updates the details of a user using their JWT token. Only the fields provided in the request body will be updated.

### Request Body:

```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
