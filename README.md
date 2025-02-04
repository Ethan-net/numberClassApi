# Number Classification API

## 📌 Project Overview

This is a simple Node.js Express API that takes a number as input and returns interesting mathematical properties about it. The API determines if the number is prime, perfect, or an Armstrong number, calculates the sum of its digits, and provides a fun fact related to the number.

## 🚀 Features

- Accepts GET requests with a number parameter.
- Returns JSON response with:
  - Prime status
  - Perfect number status
  - Classification properties (armstrong, even, odd, etc.)
  - Sum of digits
  - A dynamically generated fun fact about the number
- Input validation and error handling.
- Fast response time (< 500ms).

## 🔧 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Ethan-net/numberClassApi.git
   ```
2. Navigate to the project folder:
   ```sh
   cd numberClassApi
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:4100` by default.

## 📡 API Endpoint

### GET `https://numberclassapi.onrender.com/api/classify-number?number=<VALUE>`

#### ✅ Success Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### ❌ Error Response (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true
}


## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
```
