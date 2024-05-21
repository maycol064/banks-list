import Cat from '../../../public/bank-robbery.svg';

export const Error = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-10">
      <h1 className="text-xl text-red-700">
        Error al cargar la información...
      </h1>
      <img src={Cat} width={200} className="mt-5" />
    </div>
  );
};
