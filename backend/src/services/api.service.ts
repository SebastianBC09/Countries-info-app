import { AvailableCountry } from '../types/available-country.interface';
import { CountryInfo } from '../types/country-info.interface';
import { CountryPopulationData } from '../types/country-population-data.interface';
import { FlagsData } from '../types/flags-data.interface';
import {
  dateNagerApi,
  countriesNowApi,
  handleApiError,
} from '../utils/api/api-clients';

export class ApiService {
  async getAvailableCountries(): Promise<AvailableCountry[]> {
    try {
      const { data } = await dateNagerApi.get<AvailableCountry[]>(
        '/AvailableCountries'
      );
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfo> {
    try {
      const { data } = await dateNagerApi.get<CountryInfo>(
        `/CountryInfo/${countryCode}`
      );
      return data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  async getCountryPopulation(
    countryName: string
  ): Promise<CountryPopulationData> {
    try {
      const { data } = await countriesNowApi.post<{
        data: CountryPopulationData;
      }>('/countries/population', { country: countryName });
      return data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  async getCountryFlag(countryName: string): Promise<string> {
    try {
      const { data } = await countriesNowApi.get<FlagsData>(
        '/countries/flag/images'
      );
      const countryFlag = data.data.find(
        flag => flag.name.toLowerCase() === countryName.toLowerCase()
      );

      if (!countryFlag) {
        throw new Error(`Flag not found for country: ${countryName}`);
      }

      return countryFlag.flag;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}

export const apiService = new ApiService();
