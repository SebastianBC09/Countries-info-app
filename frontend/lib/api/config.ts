export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;
