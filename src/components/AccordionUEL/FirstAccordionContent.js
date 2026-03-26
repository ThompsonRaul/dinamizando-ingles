import { Link } from "@nextui-org/react";

const FirstAccordionContentUEL = ({ jsonFirstAccordion }) => {
  return (
    <>
      <div className="font-normal">
        <p>
          Edital UESC n. {jsonFirstAccordion.edital} -{" "}
          <Link isExternal href={jsonFirstAccordion.linkEdital} showAnchorIcon>
            clique aqui
          </Link>
        </p>
      </div>

      <div className="font-normal">
        <p>
          Modelo de proposta -{" "}
          <Link isExternal href={jsonFirstAccordion.linkModelo} showAnchorIcon>
            clique aqui
          </Link>
        </p>
      </div>
    </>
  );
};
export default FirstAccordionContentUEL;
