export type ApiResponse<T> = {
  data: T;
  error?: string;
};

export type YearRecord<T> = {
  year: number;
  value: T;
};
