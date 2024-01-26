import { useState } from "react";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";
import { Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
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

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            <div key={index} onClick={onOpen}>
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

      {list.map((item, index) => (
        <>
        <Modal key={`${item.title - index}`} isOpen={isOpen} onOpenChange={onOpenChange} size ="sm">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{item.title}</ModalHeader>
                <ModalBody>
                  <p> 
                    Porem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      ))}



    </>
  );
}
