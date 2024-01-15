import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Estagio } from "./estagio";
export function GroupEstagios() {
  const { control } = useForm();

  const { fields, append } = useFieldArray({
    name: "estagios",
    control,
  });

  const [currentStage, setCurrentStage] = useState(1);

  const submitStage = (stage) => {
    append(stage);
    setCurrentStage((prevStage) => prevStage + 1);
  };

  useEffect(() => console.log(fields), [fields]);

  return (
    <Estagio
      key={currentStage}
      submit={submitStage}
      currentStage={currentStage}
    />
  );
}
