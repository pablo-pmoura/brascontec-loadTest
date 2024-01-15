import { Botao } from "../components/botao";
import { InputRelatorio } from "../components/input-relatorio";
import { useForm } from "react-hook-form";
export function TabelaInicio() {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onStartProva = (data) => {
    console.log(data);
    window.location.href = "/estagio";
  };
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-red-600 font-bold text-2xl">Início</h1>
      <InputRelatorio
        props={{
          ...register("date-inicio", { required: true }),
        }}
        title="Data inicio"
      />
      <InputRelatorio
        props={{
          ...register("hr-inicio", { required: true }),
        }}
        title="Horario Inicio"
      />
      <InputRelatorio
        props={{
          ...register("carga-inicio-estagios", { required: true }),
        }}
        title="Carga"
      />
      <InputRelatorio
        props={{
          ...register("pressao-incio-estagios", { required: true }),
        }}
        title="Pressao"
      />
      <h1 className="text-red-600 font-bold text-2xl mt-10">Leituras</h1>
      <div className="flex flex-wrap justify-center gap-5 w-1/2">
        <InputRelatorio
          props={{
            ...register("deflec-1-incio", { required: true }),
          }}
          title="Deflectometro 1"
        />
        <InputRelatorio
          props={{
            ...register("deflec-2-incio", { required: true }),
          }}
          title="Deflectometro 2"
        />
        <InputRelatorio
          props={{
            ...register("deflec-3-incio", { required: true }),
          }}
          title="Deflectometro 3"
        />
        <InputRelatorio
          props={{
            ...register("deflec-4-incio", { required: true }),
          }}
          title="Deflectometro 4"
        />
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <Botao nome="Salvar" onClick={() => handleSubmit(onSubmit)()} />

        <Botao nome="Continuar" onClick={() => handleSubmit(onStartProva)()} />
      </div>
    </div>
  );
}
