import { PopulationCount } from './population-count.interface';

export interface CountryPopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}
