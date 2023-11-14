import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import FirstAccordionContent from "./FirstAccordionContent";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";

const DinamizandoAccordion = ({
  imgURL,
  imgAlt,
  jsonFirstAccordion,
  jsonMap,
}) => {
  return (
    <>
      <p className="text-center py-5">
        Para acessar o semestre anterior,{" "}
        <Link isExternal href={jsonFirstAccordion.link} showAnchorIcon>
          clique aqui
        </Link>
      </p>

      <Accordion className="min-h-screen" variant="splitted">
        <AccordionItem
          className="font-bold"
          key={jsonFirstAccordion.nome}
          aria-label={jsonFirstAccordion.nome}
          title={jsonFirstAccordion.nome}
        >
          <FirstAccordionContent
            imgURL={imgURL}
            imgAlt={imgAlt}
            jsonFirstAccordion={jsonFirstAccordion}
          />
        </AccordionItem>
        {jsonMap.map((topicos) => (
          <AccordionItem
            className="font-bold"
            key={`${topicos.nome}`}
            aria-label={topicos.nome}
            title={topicos.nome}
          >
            {topicos.tipos.map((entrevistado) => (
              <div key={`${entrevistado.descricao}`} className="font-bold">
                {entrevistado.descricao}
                <div className="font-normal">
                  {entrevistado.pessoas.map((pessoa, index) => (
                    <p key={`${pessoa}-${index}`}>{pessoa}</p>
                  ))}
                </div>
                <br />
              </div>
            ))}
          </AccordionItem>
        ))}
      </Accordion>

      <ScrollToTopButton />
    </>
  );
};

export default DinamizandoAccordion;
