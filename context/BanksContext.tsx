import React, { ReactNode, useEffect, useState } from 'react';
import { Bank, BanksContextType } from '../types/bank';
import { getBanksList } from '../api/getBanksList';

export const BanksContext = React.createContext<BanksContextType>(
  {} as BanksContextType
);

interface PropsProvider {
  children: ReactNode;
}

export const BanksProvider = ({ children }: PropsProvider) => {
  const [banks, setBanks] = useState<Array<Bank>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const recoverBanks = localStorage.getItem('listBanks');
    if (recoverBanks) {
      setBanks(JSON.parse(recoverBanks));
    } else {
      getBanksList()
        .then((response) => {
          if (response.status === 200) {
            setBanks(response.data);
            localStorage.setItem('listBanks', JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    }
  }, []);

  return (
    <BanksContext.Provider value={{ banksList: banks, error }}>
      {children}
    </BanksContext.Provider>
  );
};
