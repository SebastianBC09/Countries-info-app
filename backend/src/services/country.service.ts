import { CountryInfo } from '../types/country-info.interface';
import { apiService } from './api.service';
import { AvailableCountry } from '../types/available-country.interface';

interface CountryDetails extends CountryInfo {
  flag: string;
  populationData: {
    year: number;
    value: number;
  }[];
}

export class CountryService {
  async getAllCountries(): Promise<AvailableCountry[]> {
    return apiService.getAvailableCountries();
  }

  async getCountryDetails(countryCode: string): Promise<CountryDetails> {
    try {
      const countryInfo = await apiService.getCountryInfo(countryCode);
      const [population, flag] = await Promise.all([
        apiService.getCountryPopulation(countryInfo.commonName),
        apiService.getCountryFlag(countryInfo.commonName),
      ]);

      return {
        ...countryInfo,
        flag,
        populationData: population.populationCounts,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get country details: ${error.message}`);
      }
      throw error;
    }
  }
}

export const countryService = new CountryService();
