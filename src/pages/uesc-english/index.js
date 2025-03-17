import Head from "next/head";
import React from "react";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import DinamizandoAccordion from "@/components/Accordion/DinamizandoAccordion";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";

import imgURL from "../../utils/images/25-1/UECT.png";

const imgAlt = "Horários de aula do UESC English 2025.1";
const jsonFirstAccordion = require("./fac.json");
const jsonMap = require("./ue.json");
const UE = () => {
  return (
    <>
      <Head>
        <title>UESC English 2025.1</title>
        <meta
          name="description"
          content="Página do UESC English 2025.1 do Dinamizando"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <DinamizandoAccordion
        imgURL={imgURL}
        imgAlt={imgAlt}
        jsonFirstAccordion={jsonFirstAccordion}
        jsonMap={jsonMap}
      />
      <DinamizandoFooter />
    </>
  );
};

export default UE;
