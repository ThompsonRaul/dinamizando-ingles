import NavbarDinamizando from "@/components/navbar/navbarDinamizando";
import UEAccordion from "@/components/uesc-english/ueAccordion";
import Head from "next/head";
import React from "react";

const UE = () => {
  return (
    <>
      <Head>
        <title>Dinamizando Inglês - UESC English</title>
        <meta name="description" content="Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarDinamizando />
      <UEAccordion />
    </>
  );
};

export default UE;
