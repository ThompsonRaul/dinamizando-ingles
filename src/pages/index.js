import { useState } from "react";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import Head from "next/head";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

import imgUE from "../utils/images/homepage/ue.png";
import imgCC from "../utils/images/homepage/cc.png";
import imgPC from "../utils/images/homepage/pc.png";
import imgCertificados from "../utils/images/homepage/certificados.png";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const list = [
    {
      title: "UESC English",
      img: imgUE,
      description:
        "Os cursos de inglês UESC English são ofertados semestralmente com o objetivo de desenvolver as quatro habilidades (ouvir, falar, ler, escrever) em língua inglesa à comunidade acadêmica (estudantes, professoras/es, servidoras/es e funcionárias/os terceirizadas/os) da UESC e à comunidade externa.",
      url: "/uesc-english",
    },
    {
      title: "Conversation Club",
      img: imgCC,
      description:
        "Os cursos de inglês Conversation Club são ofertados semestralmente com o objetivo de desenvolver as habilidades orais (ouvir e falar) em língua inglesa à comunidade acadêmica (estudantes, professoras/es, servidoras/es e funcionárias/os terceirizadas/os) da UESC e à comunidade externa.",
      url: "/conversation-club",
    },
    {
      title: "Popcorn Club",
      img: imgPC,
      description:
        "As oficinas de inglês Popcorn Club têm o objetivo de proporcionar um espaço interativo para o desenvolvimento das habilidades em língua inglesa à comunidade acadêmica (estudantes, professoras/es, servidoras/es e funcionárias/os terceirizadas/os) da UESC e à comunidade externa, por meio da exibição dialogada de produções audiovisuais em uma perspectiva intercultural.",
      url: "/popcorn-club",
    },
    {
      title: "Certificados",
      img: imgCertificados,
      description:
        "A partir dos editais de 2024.1, os certificados das ações do Projeto de Extensão Dinamizando o Ensino da Língua Inglesa na UESC serão disponibilizados diretamente em formato PDF pelo buscador de certificados, cabendo à cada cursista fazer a busca e o download dos certificados que tiver direito. Os certificados impressos que estavam armazenados na sala do projeto, anteriores ao semestre 2022.1, foram digitalizados e disponibilizados em nossa base de dados de certificados. Caso ainda precise de ajuda, envie e-mail para uescenglish@gmail.com com o assunto “Certificado”.",
      url: "/certificados",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page do Dinamizando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DinamizandoNavbar />
      <div className={`min-h-screen ${isOpen ? "blur-md" : ""}`}>
        <section className="bg-white dark:bg-gray-800 flex justify-center items-center">
          <div className="max-w-[50%] mx-auto">
            <div className="container py-8 mx-auto text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Bem-vindos ao Dinamizando o Ensino da Língua Inglesa na UESC!
              </h2>
              <p className=" text-sm text-left text-gray-700 dark:text-gray-400 mb-4">
                O Dinamizando é um projeto de extensão da UESC que oferece
                cursos de inglês para a comunidade acadêmica e externa. O
                projeto é coordenado pelo Departamento de Letras e Artes (DLA) e
                pela Pró-Reitoria de Extensão (PROEX).
              </p>
            </div>
          </div>
        </section>

        <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 w-[50%] mx-auto">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="transition-transform transform hover:scale-105"
            >
              <Card className="py-4 mx-2 mb-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center min-h-[60px] flex justify-center text-center">
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

      <Modal isOpen={isOpen} onOpenChange={onClose} size="sm">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {selectedItem?.title}
          </ModalHeader>
          <ModalBody>
            <p>{selectedItem?.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Fechar
            </Button>
            <Link href={selectedItem?.url}>
              <Button color="primary" onPress={onClose}>
                Ir para
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
