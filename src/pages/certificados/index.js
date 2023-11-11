import SearchLinks from "@/components/Certificados/SearchLinks";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";

const dados = require("./links.json");

const CC = () => {
  return (
    <>
      <Head>
        <title>Dinamizando Inglês - Certificados</title>
        <meta name="description" content="Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <SearchLinks dados={dados} />
      <DinamizandoFooter />
    </>
  );
};

export default CC;
