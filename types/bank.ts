export type Bank = {
  description: string;
  age: number;
  url: string;
  bankName: string;
};

export type BanksContextType = {
  banksList: Array<Bank>;
  error: boolean;
  loading: boolean;
};
