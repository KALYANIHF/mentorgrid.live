## Get a Single Review

**GET** `/api/v1/reviews/:id`

**Access:** Public

---

### Description

Fetches a single review by its id. Populates related bootcamp and user fields (only name is returned).

### Example Response

```json
{
  {
  "success": true,
  "message": "Found Review",
  "data": {
    "_id": "6512a8f9e18a5b3c9c1aab77",
    "title": "Great Bootcamp",
    "text": "I learned so much here!",
    "rating": 9,
    "bootcamp": {
      "_id": "6512a8f9e18a5b3c9c1aab12",
      "name": "Code Mastery Bootcamp"
    },
    "user": {
      "_id": "6501a8f9e18a5b3c9c1aab15",
      "name": "John Doe"
    }
  }
}
}

```

### Request Parameters

- `id` (required): The ID of the review to fetch.

---

### Create a Rating

**POST** `/api/v1/reviews/:bootcampId/ratings`
**Access:** Private/admin

---

### Description

Creates a rating for a specific bootcamp. Populates related bootcamp field (only name is returned).

### Request Body:

```json
{
  "title": "Great Bootcamp",
  "text": "The instructors were amazing and the content was well structured.",
  "rating": 10
}
```

### Request Params

- `bootcampId` (required): The ID of the bootcamp to rate.

---

### Update a Rating

**PUT** `/api/v1/reviews/:id`
**Access:** Private/admin

---

### Description

Updates a rating for a specific review. Populates related bootcamp field (only name is returned).

### Request Body:

```json
{
  "title": "Updated Review",
  "rating": 8
}
```

### Request Params

- `id` (required): The ID of the review to update.

---

### Delete a Rating

**DELETE** `/api/v1/reviews/:id`
**Access:** Private/admin

---

### Description

Deletes a rating for a specific review. Populates related bootcamp field (only name is returned).

### Request Params

- `id` (required): The ID of the review to delete.

---
