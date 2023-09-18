import NavbarDinamizando from "@/components/navbar/navbarDinamizando";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinamizando Inglês - Página Inicial</title>
        <meta name="description" content="Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarDinamizando />
    </>
  );
}
