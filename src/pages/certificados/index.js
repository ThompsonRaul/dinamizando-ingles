import CertContent from "@/components/Certificados/CertContent";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";

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
      <CertContent />
      <DinamizandoFooter />
    </>
  );
};

export default CC;
