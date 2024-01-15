export function Header() {
  return (
    <div className="absolute h-28 min-w-full pl-8 pr-8 bg-red-600 flex items-center">
      <div className="w-2/4">
        <h2 className="font-sans-serif text-white font-bold text-2xl">
          Bem vindo,
        </h2>
        <h1 className="font-sans-serif text-white font-bold text-4xl">
          Pablo Moura
        </h1>
      </div>
      <div className="w-2/4 flex justify-end">
        <img src="/Logo-Brascontec.svg" alt="" />
      </div>
    </div>
  );
}
