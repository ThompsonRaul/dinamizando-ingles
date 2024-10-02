import SearchLinks from "@/components/Certificados/SearchLinks";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";

const dados = require("./links.json");

const CC = () => {
  return (
    <>
      <Head>
        <title>Certificados</title>
        <meta
          name="description"
          content="Página de Certificados do Dinamizando"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <div className="min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mt-4">Buscador de Certificados</h1>
          <div className="max-w-[50%] mx-auto">
            <p className="text-left text-xs mt-4">
              Orientação: digite e busque o seu nome ou sobrenome; todos os
              certificados correspondentes à busca que estiverem disponíveis em
              nossa base de dados aparecerão; clique em cada arquivo (seus
              certificados) e faça o download.
            </p>
          </div>
        </div>
        <SearchLinks dados={dados} />
      </div>

      <DinamizandoFooter />
    </>
  );
};

export default CC;
