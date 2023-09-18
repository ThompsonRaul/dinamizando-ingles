import CCAccordion from "@/components/conversation-club/ccAccordion";
import NavbarDinamizando from "@/components/navbar/navbarDinamizando";
import Head from "next/head";
import React from "react";

const CC = () => {
  return (
    <>
      <Head>
        <title>Dinamizando Inglês - Conversation Club</title>
        <meta name="description" content="Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarDinamizando />
      <CCAccordion />
    </>
  );
};

export default CC;
