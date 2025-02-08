import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV,
  DATE_NAGER_API_URL,
  COUNTRIES_NOW_API_URL,
  ALLOWED_ORIGINS,
} = process.env;

if (!DATE_NAGER_API_URL || !COUNTRIES_NOW_API_URL) {
  throw new Error('Missing required environment variables for API URLs');
}

export const config = {
  port: PORT || 3001,
  nodeEnv: NODE_ENV || 'development',
  dateNagerApi: DATE_NAGER_API_URL,
  countriesNowApi: COUNTRIES_NOW_API_URL,
  allowedOrigins: ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
} as const;
