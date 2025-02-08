import { YearRecord } from "./api";

export interface BaseCountry {
  countryCode: string;
  commonName: string;
  officialName: string;
  region: string;
}

export interface CountryListItem extends Pick<BaseCountry, 'countryCode' | 'commonName'> {
  name: string;
}

export interface CountryDetail extends BaseCountry {
  borders: Array<Omit<CountryDetail, 'borders' | 'flag' | 'populationData'> | null>;
  flag: string;
  populationData: Array<YearRecord<number>>;
}

export const isCountryDetail = (country: unknown): country is CountryDetail => {
  const c = country as CountryDetail;
  return (
    typeof c === 'object' &&
    c !== null &&
    typeof c.countryCode === 'string' &&
    typeof c.commonName === 'string' &&
    typeof c.officialName === 'string' &&
    typeof c.region === 'string' &&
    Array.isArray(c.populationData) &&
    typeof c.flag === 'string'
  );
};

export type CountryCode = CountryDetail['countryCode'];
export type PopulationData = CountryDetail['populationData'];

export type CountryWithoutBorders = Omit<CountryDetail, 'borders'>;
export type CountryWithSelectedKeys<K extends keyof CountryDetail> = Pick<CountryDetail, K>;

export type SortableCountryKeys = keyof Pick<CountryDetail, 'commonName' | 'region'>;
export type CountryFilterCriteria = Partial<Record<SortableCountryKeys, string>>;
