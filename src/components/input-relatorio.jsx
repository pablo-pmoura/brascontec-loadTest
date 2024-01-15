export function InputRelatorio({ id, title, error, props }) {
  return (
    <div>
      <h3 className="text-red-600 font-bold text-lg">{title}</h3>
      <input
        className="bg-gray-100 w-72 h-11 pl-5"
        type="text"
        placeholder="Digite Aqui"
        {...props}
      />
    </div>
  );
}
