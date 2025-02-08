import axios from 'axios';
import { config } from '../../config/env.config';

const axiosConfig = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;

export const dateNagerApi = axios.create({
  ...axiosConfig,
  baseURL: config.dateNagerApi,
});

export const countriesNowApi = axios.create({
  ...axiosConfig,
  baseURL: config.countriesNowApi,
});

export const handleApiError = (error: unknown): Error => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return new Error(error.response.data?.message || 'API request failed');
    }
    if (error.request) {
      return new Error('No response from server');
    }
  }
  return new Error('An unexpected error occurred');
};
