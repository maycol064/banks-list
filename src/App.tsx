import { useContext } from 'react';
import { Header } from './components/Header';
import { BanksContext } from '../context/BanksContext';
import { ListBanks } from './components/ListBanks';
import { Error } from './components/Error';

function App() {
  const { banksList, error } = useContext(BanksContext);

  return (
    <div className="w-full min-h-screen p-0 flex flex-col justify-start items-start bg-stone-200 dark:bg-slate-800 text-slate-800 dark:text-stone-200">
      <header className="w-full sticky top-0">
        <Header />
      </header>
      <main className="w-full h-full flex-grow">
        {!error ? <ListBanks banks={banksList} /> : <Error />}
      </main>
    </div>
  );
}

export default App;
