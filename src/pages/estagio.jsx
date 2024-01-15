import { useEffect } from "react";
import { Botao } from "../components/botao";
import { InputRelatorio } from "../components/input-relatorio";
import { useForm } from "react-hook-form";
export function Estagio({ submit, currentStage }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    submit(data);
  };

  return (
    <div className="py-10 w-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-red-600 font-bold text-4xl ">
        Estágio {currentStage}
      </h1>
      <InputRelatorio
        props={{
          ...register("carga-estagio", { required: true }),
        }}
        title="Carga"
      />
      <InputRelatorio
        props={{
          ...register("pressao-estagio", { required: true }),
        }}
        title="Pressao"
      />
      {["5", "10", "15", "30"].map((min, i) => (
        <div
          key={i}
          className="mt-10 flex flex-col gap-5 items-center justify-center"
        >
          <h1 className="text-red-600 font-bold text-2xl ">{min}'</h1>

          <InputRelatorio
            props={{
              ...register(`${min}-deflec-1-estagio`, { required: true }),
            }}
            title="Deflectometro 1"
          />
          <InputRelatorio
            props={{
              ...register(`${min}-deflec-2-estagio`, { required: true }),
            }}
            title="Deflectometro 2"
          />
          <InputRelatorio
            props={{
              ...register(`${min}-deflec-3-estagio`, { required: true }),
            }}
            title="Deflectometro 3"
          />
          <InputRelatorio
            props={{
              ...register(`${min}-deflec-4-estagio`, { required: true }),
            }}
            title="Deflectometro 4"
          />
        </div>
      ))}
      {/* 
      <div className="mt-10 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-red-600 font-bold text-2xl ">10'</h1>
        <InputRelatorio
          nome1="Deflectômetro 1"
          nome2="Deflectômetro 2"
          register={register}
          index={`10min`}
        />
        <InputRelatorio
          nome1="Deflectômetro 3"
          nome2="Deflectômetro 4"
          register={register}
          index={`10min`}
        />
      </div>

      <div className="mt-10 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-red-600 font-bold text-2xl ">15'</h1>
        <InputRelatorio
          nome1="Deflectômetro 1"
          nome2="Deflectômetro 2"
          register={register}
          index={`15min`}
        />
        <InputRelatorio
          nome1="Deflectômetro 3"
          nome2="Deflectômetro 4"
          register={register}
          index={`15min`}
        />
      </div>

      <div className="mt-10 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-red-600 font-bold text-2xl ">30'</h1>
        <InputRelatorio
          nome1="Deflectômetro 1"
          nome2="Deflectômetro 2"
          register={register}
          index={`30min`}
        />
        <InputRelatorio
          nome1="Deflectômetro 3"
          nome2="Deflectômetro 4"
          register={register}
          index={`30min`}
        />
      </div> */}
      <div className="mt-10 flex justify-center gap-5">
        <Botao nome="Continuar" />
        <a>
          <Botao onClick={() => handleSubmit(onSubmit)()} nome="Novo Estágio" />
        </a>
      </div>
    </div>
  );
}
