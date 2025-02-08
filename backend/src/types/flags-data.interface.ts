import { CountryFlagData } from './country-flag-data.interface';

export interface FlagsData {
  error: boolean;
  msg: string;
  data: CountryFlagData[];
}
