import React from "react";
import { Accordion, AccordionItem, Image, Link } from "@nextui-org/react";
import { entrevistasArray } from "./entrevistasArray";
import { resultadoFinalArray } from "./resultadoFinalArray";
import { ausentesExcedentesArray } from "./ausentesExcedentesArray";
import { UEClassTime } from "./ueClassTime";

const UEAccordion = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const uescEnglishContent = () => {
    return (
      <>
        <div className="font-normal">
          <p>
            Edital UESC n. 138/2023 -{" "}
            <Link
              isExternal
              href="https://www2.uesc.br/publicacoes/editais/arquivo/2023/08/138_2023.pdf"
              showAnchorIcon
            >
              clique aqui
            </Link>
          </p>
          <p>Quadro de turmas:</p>
          <div className="flex justify-center">
            <UEClassTime />
          </div>
        </div>
      </>
    );
  };

  const agendamentoEntrevistasContent = () => {
    return (
      <>
        {entrevistasArray.map((entrevistado, index) => (
          <>
            <h1 key={index} className="font-bold">
              {entrevistado.horario}
            </h1>
            <div className="font-normal">
              {entrevistado.pessoas.map((pessoa, index) => (
                <p key={index}>{pessoa}</p>
              ))}
            </div>
            <br />
          </>
        ))}
      </>
    );
  };

  const resultadoFinalContent = () => {
    return (
      <>
        {resultadoFinalArray.map((resultado, index) => (
          <>
            <h1 key={index} className="font-bold">
              {resultado.turma}
            </h1>
            <div className="font-normal">
              {resultado.pessoas.map((pessoa, index) => (
                <p key={index}>{pessoa}</p>
              ))}
            </div>
            <br />
          </>
        ))}
      </>
    );
  };

  const ausentesexcedentesContent = () => {
    return (
      <>
        {ausentesExcedentesArray.map((lista, index) => (
          <>
            <h1 key={index} className="font-bold">
              {lista.descricao}
            </h1>
            <div className="font-normal">
              {lista.pessoas.map((pessoa, index) => (
                <p key={index}>{pessoa}</p>
              ))}
            </div>
            <br />
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <p className="text-center py-5">
        Para acessar o semestre anterior,{" "}
        <Link
          isExternal
          href="https://sites.google.com/site/estesinversos/uesc-english/ue-2023-1?authuser=1"
          showAnchorIcon
        >
          clique aqui
        </Link>
      </p>
      <Accordion variant="splitted">
        <AccordionItem
          className="font-bold"
          key="1"
          aria-label="UESC English 2023.2"
          title="UESC English 2023.2"
        >
          {uescEnglishContent()}
        </AccordionItem>
        <AccordionItem
          className="font-bold"
          key="2"
          aria-label="Agendamento de Entrevistas de Nivelamento"
          title="Agendamento de Entrevistas de Nivelamento"
        >
          {agendamentoEntrevistasContent()}
        </AccordionItem>
        <AccordionItem
          className="font-bold"
          key="3"
          aria-label="Resultado Final"
          title="Resultado Final"
        >
          {resultadoFinalContent()}
        </AccordionItem>
        <AccordionItem
          className="font-bold"
          key="4"
          aria-label="Lista de Ausentes/Excedentes"
          title="Lista de Ausentes/Excedentes"
        >
          {ausentesexcedentesContent()}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default UEAccordion;
