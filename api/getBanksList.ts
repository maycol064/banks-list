import axios, { AxiosResponse } from 'axios';
import { Bank } from '../types/bank';

export const getBanksList = async (): Promise<AxiosResponse<Array<Bank>>> => {
  try {
    const response = await axios.get<Array<Bank>>(
      'https://dev.obtenmas.com/catom/api/challenge/banks',
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Ocurrió une error...');
  }
};
