import Head from "next/head";
import React from "react";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import DinamizandoAccordion from "@/components/Accordion/DinamizandoAccordion";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";

import imgURL from "../../utils/images/24-2/CCCT.png";

const imgAlt = "Horários de aula do Conversation Club 2024.2";
const jsonFirstAccordion = require("./fac.json");
const jsonMap = require("./cc.json");
const CC = () => {
  return (
    <>
      <Head>
        <title>Conversation Club 2024.2</title>
        <meta
          name="description"
          content="Página do Conversation Club 2024.2 do Dinamizando"
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

export default CC;
