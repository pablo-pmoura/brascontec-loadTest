import { Header } from "../components/header";
import { InputRelatorio } from "../components/input-relatorio";
import { Botao } from "../components/botao";
import { useForm } from "react-hook-form";
export function DadosFixos({ submit, currentStage }) {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onStartProva = (data) => {
    console.log(data);
    window.location.href = "/tabelas-incio";
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <p className="flex justify-center text-center w-3/4">
          PROVA DE CARGA ESTÁTICA À
          <span>
            <InputRelatorio
              props={{
                ...register("estatica-a", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          (CARREGAMENTO LENTO) NA ESTACA
          <span>
            <InputRelatorio
              props={{
                ...register("na-estaca", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          - DO TIPO
          <span>
            <InputRelatorio
              props={{
                ...register("do-tipo", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          Ø
          <span>
            <InputRelatorio
              props={{
                ...register("diametro", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          cm - COMPRIMENTO ÚTIL:
          <span>
            <InputRelatorio
              props={{
                ...register("comprimento-util", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          m - CARGA MÁXIMA DE ENSAIO:
          <span>
            <InputRelatorio
              props={{
                ...register("carga-maxima", { required: true }),
                className: "mx-2 bg-gray-100 w-40 h-11 pl-5",
              }}
            />
          </span>{" "}
          tf
        </p>
        <div className="mt-10 flex flex-col">
          <InputRelatorio
            props={{ ...register("cliente", { required: true }) }}
            title="Cliente"
          />
          <InputRelatorio
            props={{ ...register("obra", { required: true }) }}
            title="Obra"
          />
          <InputRelatorio
            props={{ ...register("local", { required: true }) }}
            title="Local"
          />
          <InputRelatorio
            props={{ ...register("area", { required: true }) }}
            title="Area"
          />
        </div>

        <div className="mt-20 flex gap-12">
          <Botao nome="Salvar dados" onClick={() => handleSubmit(onSubmit)()} />
          <Botao
            nome="Começar Prova de carga"
            onClick={() => handleSubmit(onStartProva)()}
          />
        </div>
      </div>
    </>
  );
}
