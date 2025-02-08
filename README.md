# 🌍 Country Info Application Test

A Node.js/React application that provides detailed information about countries, including borders, population data, and flags. Built as part of a technical assessment.

```
root/
├── backend/    # Express.js + TypeScript API
├── frontend/   # Next.js 14 application
└── README.md   # You are here
```

## Quick Start

### Backend Setup (Port 3001)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup (Port 3000)
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

For detailed information about each service, please check:
- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

---
Developed as part of a technical assessment using Node.js, Express, Next.js, and TypeScript.