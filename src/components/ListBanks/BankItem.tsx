import { Bank } from '../../../types/bank';

interface PropsItem {
  bank: Bank;
}

export const BankItem = ({ bank }: PropsItem) => {
  const { bankName, url, age, description } = bank;
  return (
    <div className="max-w-350 bg-slate-300 dark:bg-slate-600 p-2 rounded-md flex flex-col justify-center hover:bg-slate-400 dark:hover:bg-slate-700 hover:cursor-pointer">
      <div className="w-24 h-24 m-auto flex items-center">
        <img src={url} className="object-contain rounded-sm" />
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="text-xl text-center">{bankName}</p>
        <p className="text-sm text-center text-slate-600 dark:text-slate-50 mt-3">
          {description}
        </p>
        <p className="text-sm text-center text-slate-700 dark:text-slate-100 mt-4">
          Antigüedad: {age} años
        </p>
      </div>
    </div>
  );
};
