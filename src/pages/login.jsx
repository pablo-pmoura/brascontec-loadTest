import { Botao } from "../components/botao";
import { useForm } from "react-hook-form";

export function Login() {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    window.location.href = "/home";
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-2.5">
      <h1 className="font-sans text-2xl font-bold text-red-600">Acessar</h1>
      <input
        className="bg-gray-100 w-96 h-11 pl-5"
        type="text"
        placeholder="Usuário"
        {...register("name", { required: true })}
      />
      {formState?.errors?.name?.type === "required" && (
        <p className="text-red-600">Nome obrigatorio</p>
      )}
      <input
        className="bg-gray-100 w-96 h-11 pl-5"
        type="text"
        placeholder="Senha"
        {...register("password", { required: true })}
      />
      <div className="mt-4">
        <button
          className="flex items-center justify-center font-sans text-2xl font-semibold text-white bg-red-600 rounded-xl h-14 w-96 hover:bg-red-400 transition-all"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Acessar
        </button>
      </div>

      <h3 className="text-red-600 text-center w-96 font-semibold">
        Cadastre-se.
      </h3>
    </div>
  );
}
