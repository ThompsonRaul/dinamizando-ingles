import Head from "next/head";
import React from "react";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import DinamizandoAccordion from "@/components/AccordionUEL/DinamizandoAccordion";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";

const jsonFirstAccordion = require("./fac.json");
const jsonMap = require("./uel.json");
const UE = () => {
  return (
    <>
      <Head>
        <title>UESC English Labs 2026</title>
        <meta
          name="description"
          content="Página do UESC English Labs 2026 do Dinamizando"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <DinamizandoAccordion
        jsonFirstAccordion={jsonFirstAccordion}
        jsonMap={jsonMap}
      />
      <DinamizandoFooter />
    </>
  );
};

export default UE;
