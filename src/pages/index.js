import { useState } from "react";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

import imgUE from "../utils/images/homepage/ue.png";
import imgCC from "../utils/images/homepage/test-cc.png";
import imgPC from "../utils/images/homepage/pc.png";
import imgCertificados from "../utils/images/homepage/certificados.png";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

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
      <div className={`min-h-screen ${isModalOpen ? "blur-md" : ""}`}>
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
        <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 w-[50%] mx-auto">
          {list.map((item, index) => (
            <div key={index} onClick={() => openModal(item)}>
              <Card className="py-4 mx-2 mb-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">{item.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.img}
                    width={320}
                  />
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <DinamizandoFooter />

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <Image
              alt="Selected item"
              className="object-cover rounded-xl"
              src={selectedItem.img}
              width={320}
            />
            <p className="mt-4">{selectedItem.description}</p>
            <button className="mt-4" onClick={closeModal}>
              Fechar Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
