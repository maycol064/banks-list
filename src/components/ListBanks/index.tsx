import { Bank } from '../../../types/bank';
import { BankItem } from './BankItem';

interface PropsList {
  banks: Array<Bank>;
}

export const ListBanks = ({ banks }: PropsList) => {
  return (
    <div className="w-full h-full p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      {banks.map((bank) => (
        <BankItem bank={bank} key={bank.bankName} />
      ))}
    </div>
  );
};
