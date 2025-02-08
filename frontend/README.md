# 🌍 Countries Information App

[![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern, responsive web application that provides comprehensive information about countries worldwide. This application showcases country information including borders and population data visualization. Built with cutting-edge technologies and designed with user experience in mind. 🚀

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🗺️ Country Explorer | Browse countries with an elegant, responsive grid layout |
| 📊 Data Visualization | Interactive charts showing historical population data |
| 🌓 Dark Mode | Seamless dark/light theme switching |
| 🎯 Type Safety | Full TypeScript implementation |
| 🚄 Fast Navigation | Optimized routing with Next.js App Router |
| 💫 Smooth Animations | Polished transitions using Framer Motion |

## 🛠️ Tech Stack

### Frontend

| Category | Technologies |
|----------|-------------|
| 📱 Frontend Framework | Next.js 14 (App Router) |
| 🔒 Type Safety | TypeScript |
| 🎨 Styling | Tailwind CSS |
| ✨ Animations | Framer Motion |
| 📊 Data Visualization | Recharts |

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | ≥ 18.0.0 |
| npm/yarn | Latest |
| Backend Service | Running on port 3001 |

### 📥 Installation Steps

1️⃣ **Clone & Install**
```bash
# Clone repository
git clone <repository-url>

# Navigate to frontend
cd frontend

# Install dependencies
npm install
```

2️⃣ **Environment Setup**
```bash
# Create environment file
cp .env.example .env.local
```

3️⃣ **Configure Environment**

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_BACKEND_URL` | Backend API endpoint | `http://localhost:3001/api` |
| `NEXT_PUBLIC_API_TIMEOUT` | API timeout (ms) | `30000` |

4️⃣ **Start Development**
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 📁 Project Structure

```
frontend/
├── 📱 app/                 # Next.js app directory
│   ├── page.tsx           # Home page
│   └── country/
│       └── [code]/        # Dynamic country routes
├── 🧩 components/         # React components
│   ├── countries/        # Country-specific components
│   └── pages/            # Page-level components
├── 🛠️ lib/               # Utilities and hooks
│   ├── api/             # API configuration
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
└── 🗂️ public/           # Static assets
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔥 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run start` | 🚀 Start production server |
| `npm run lint` | 🔍 Run ESLint |
| `npm run type-check` | ✅ TypeScript checking |

## 🔌 API Integration

### Endpoints

| Endpoint | Description | Response |
|----------|-------------|----------|
| `GET /api/countries` | List all countries | Array of country objects |
| `GET /api/countries/:code` | Detailed country info | Single country object with details |

## 🌐 API Integration
The frontend communicates with two main API endpoints:

1. Get Available Countries:
- Endpoint: `GET /api/countries`
- Returns a list of all available countries


2. Get Country Details:

- Endpoint: `GET /api/countries/:code`
- Returns detailed information about a specific country including:
    - Common and official names
    - Border countries
    - Population data
    - Flag URL

## 🎨 Design Features

- 🕹️ Modern, clean UI with attention to detail
- 💫 Smooth animations and transitions using Framer Motion
- 📱 Responsive grid layout for optimal viewing on all devices
- 📊 Interactive data visualization with Recharts
- 🌓 Dark mode support with Tailwind CSS

## ⚡ Performance Optimizations

- 🔄 Server and Client components optimization
- 🔍 TypeScript for type safety
- 🎯 Basic state management with React hooks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ as part of a technical assessment
