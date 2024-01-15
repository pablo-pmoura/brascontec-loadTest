export function Botao({ nome, onClick }) {
  return (
    <h1
      onClick={onClick}
      className=" flex items-center justify-center font-sans text-2xl font-semibold text-white bg-red-600 rounded-xl h-14 w-96 hover:bg-red-400 transition-all"
    >
      {nome}
    </h1>
  );
}
