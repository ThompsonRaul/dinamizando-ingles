import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

import imgUE from "../utils/images/homepage/ue.png";
import imgCC from "../utils/images/homepage/cc.png";
import imgPC from "../utils/images/homepage/pc.png";
import imgCertificados from "../utils/images/homepage/certificados.png";

export default function Home() {
  const list = [
    {
      title: "UESC English",
      img: imgUE,
      description: "Programa do Dinamizando 1",
    },
    {
      title: "Conversation Club",
      img: imgCC,
      description: "Programa do Dinamizando 2",
    },
    {
      title: "Popcorn Club",
      img: imgPC,
      description: "Programa do Dinamizando 3",
    },
    {
      title: "Certificados",
      img: imgCertificados,
      description: "Meio para facilitar a busca por certificados",
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page do Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <div className="min-h-screen">
        <section className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
              Bem vindos ao Dinamizando o Ensino da Língua Inglesa na UESC!
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              O Dinamizando é um projeto de extensão da UESC que tem como
              objetivo oferecer cursos de inglês para a comunidade acadêmica e
              administrativa da universidade. O projeto é coordenado pelo
              Departamento de Letras e Artes (DLA) e pela Pró-Reitoria de
              Extensão (PROEX).
            </p>
          </div>
        </section>

        <div className="gap-4 grid sm:grid-cols-1 xl:grid-cols-2 w-[30%] mx-auto">
          {list.map((item, index) => (
            <Card
              className=""
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-black uppercase font-bold">
                  {item.title}
                </p>
              </CardHeader>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={item.title}
                  className="w-full object-cover h-[150px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.description}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <DinamizandoFooter />
    </>
  );
}
