import { Header } from "../components/header.jsx";

export function Home() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-2.5">
        <img className="my-2.5" src="/Logo-Brascontec.svg" alt="" />
        <a href="/dados-fixos">
          <h1 className="flex items-center justify-center font-sans text-2xl font-semibold text-white bg-red-600 rounded-xl h-14 w-96 hover:bg-red-400 transition-all">
            Novo relatório
          </h1>
        </a>
        <a href="">
          <h1 className="flex items-center justify-center font-sans text-2xl font-semibold text-white bg-red-600 rounded-xl h-14 w-96 hover:bg-red-400 transition-all">
            Acessar relatórios
          </h1>
        </a>
      </div>
    </>
  );
}
