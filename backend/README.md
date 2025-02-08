# 🌍 Countries Info API

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A modern, type-safe backend service that aggregates and serves comprehensive country information from multiple trusted sources. Built with Express.js and TypeScript, this API powers the Countries Info application.

## ✨ Features

| Feature            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| 🔍 Country List    | Get a comprehensive list of all available countries     |
| 📊 Country Details | Detailed information including borders and demographics |
| 📈 Population Data | Historical population statistics                        |
| 🎌 Country Flags   | High-quality flag images for each country               |

## 🛠️ Tech Stack

| Technology | Purpose                                       |
| ---------- | --------------------------------------------- |
| Node.js    | Runtime environment                           |
| Express.js | Web framework                                 |
| TypeScript | Type safety and enhanced developer experience |
| Axios      | HTTP client for API requests                  |
| CORS       | Cross-Origin Resource Sharing                 |
| dotenv     | Environment configuration                     |

## 📋 Prerequisites

| Requirement | Version  |
| ----------- | -------- |
| Node.js     | ≥ 18.0.0 |
| npm         | Latest   |

## 🗂️ Project Structure

```
backend/
├── 📁 src/
│   ├── 📁 controllers/  # Request handlers
│   ├── 📁 services/     # Business logic
│   ├── 📁 routes/       # API endpoints
│   ├── 📁 types/        # TypeScript interfaces
│   ├── 📁 utils/        # Helper functions
│   └── 📄 app.ts        # Express app setup
└── 📄 README.md
```

## 🚀 Quick Start

1️⃣ **Clone and Install**

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install
```

2️⃣ **Environment Setup**

```bash
# Copy environment example
cp .env.example .env
```

3️⃣ **Configure Environment**

| Variable              | Description           | Default                             |
| --------------------- | --------------------- | ----------------------------------- |
| PORT                  | Server port           | 3001                                |
| NODE_ENV              | Environment           | development                         |
| DATE_NAGER_API_URL    | Date Nager API URL    | https://date.nager.at/api/v3        |
| COUNTRIES_NOW_API_URL | Countries Now API URL | https://countriesnow.space/api/v0.1 |
| ALLOWED_ORIGINS       | CORS allowed origins  | http://localhost:3000               |

## 📜 Available Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | 🔥 Start development server with hot reload |
| `npm run build`      | 🏗️ Build production bundle                  |
| `npm start`          | 🚀 Start production server                  |
| `npm run lint`       | 🔍 Run ESLint                               |
| `npm run lint:fix`   | 🛠️ Fix ESLint issues                        |
| `npm run format`     | ✨ Format code with Prettier                |
| `npm run type-check` | ✅ Run TypeScript type checking             |

## 🔌 API Endpoints

### Get Available Countries

```http
GET /api/countries
```

#### Response

```typescript
{
  "data": [
    {
      "countryCode": "US",
      "name": "United States"
    }
    // ...more countries
  ]
}
```

### Get Country Details

```http
GET /api/countries/:code
```

#### Response

```typescript
{
  "data": {
    "commonName": "United States",
    "officialName": "United States of America",
    "countryCode": "US",
    "region": "Americas",
    "borders": [...],
    "flag": "URL",
    "populationData": [
      {
        "year": 2020,
        "value": 331002651
      }
    ]
  }
}
```

## ⚠️ Error Handling

All errors follow a consistent format:

```typescript
{
  "error": "Error title",
  "message": "Detailed error message"
}
```

| Status Code | Description                        |
| ----------- | ---------------------------------- |
| 400         | Bad Request - Invalid input        |
| 404         | Not Found - Resource doesn't exist |
| 500         | Internal Server Error              |

## 🔗 External APIs

| API           | Purpose                | Documentation                                    |
| ------------- | ---------------------- | ------------------------------------------------ |
| Date Nager    | Country info & borders | [Docs](https://date.nager.at/swagger/index.html) |
| Countries Now | Population & flags     | [Docs](https://countriesnow.space/)              |

## 💻 Development

This project follows modern development practices:

- 📝 **TypeScript** for type safety
- 🔍 **ESLint** for code quality
- ✨ **Prettier** for consistent formatting
- 🔄 **Nodemon** for development experience

## 🚀 Production Deployment

```bash
# Build project
npm run build

# Start server
npm start
```

## 🔐 Security

- ✅ CORS protection
- ✅ Rate limiting
- ✅ Security headers
- ✅ Error sanitization

## ⚖️ License

This project is part of a technical assessment and is not licensed for public use.

---

Made with ❤️ as part of a technical assessment
