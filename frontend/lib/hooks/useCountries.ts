import { useState, useEffect } from 'react';
import { countriesApi } from '../api/countries';
import * as T from '../types/country';

export function useCountries() {
  const [countries, setCountries] = useState<T.CountryListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await countriesApi.getCountries();
        setCountries(response.data.data); // Access the nested data property
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
}

export function useCountryDetail(countryCode: T.CountryCode) {
  const [country, setCountry] = useState<T.CountryDetail  | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await countriesApi.getCountryDetail(countryCode);
        setCountry(response.data.data); // Access the nested data property
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (countryCode) {
      fetchCountryDetail();
    }
  }, [countryCode]);

  return { country, loading, error };
}
