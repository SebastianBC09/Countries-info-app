import { fetchApi } from './client';
import * as T from '../types/country';

export const countriesApi = {
  getCountries: () =>
    fetchApi<T.CountryListItem[]>('/countries'),

  getCountryDetail: (countryCode: T.CountryCode) =>
    fetchApi<T.CountryDetail>(`/countries/${countryCode}`),
} as const;
