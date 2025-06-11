import Head from "next/head";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DinamizandoNavbar from "@/components/Navbar/DinamizandoNavbar";
import DinamizandoFooter from "@/components/Footer/DinamizandoFooter";

export default function DezoitoAnos() {
  // Função para scroll suave com offset
  const scrollToProgramacao = () => {
    const navbarHeight = document.querySelector("nav").offsetHeight; // Pega a altura da navbar
    const programacaoSection = document.getElementById("programacao");
    const offsetPosition = programacaoSection.offsetTop - navbarHeight; // Calcula o deslocamento

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Dinamizando - 18 Anos 🎉</title>
      </Head>
      <DinamizandoNavbar />
      <div className="min-h-screen bg-yellow-50 text-center flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-4">
            🎉 18 Anos de Dinamizando! 🎉
          </h1>
          <p className="text-lg text-yellow-700 mb-8 max-w-xl">
            Estamos comemorando 18 anos de história, impacto e transformação!
          </p>

          {/* Setinha animada para descer */}
          <div className="animate-bounce mb-8">
            <svg
              onClick={scrollToProgramacao} // Chama a função ao clicar
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-700 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 8.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Seção de Programação com ID para ancoragem */}
      <div id="programacao" className="min-h-screen bg-yellow-50 px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-yellow-700 mb-4">
            Vozes que ensinam e aprendem: 18 anos Dinamizando o Inglês!
          </h1>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Programação
          </h2>
          <p className="text-lg text-yellow-700 mb-2">
            Data: 21 de agosto de 2025
          </p>
          <p className="text-lg text-yellow-700 mb-6">
            Local: Auditório Jorge Amado, 1º andar do Pav. Jorge Amado,
            Universidade Estadual de Santa Cruz
          </p>

          <Accordion aria-label="Programação do Evento" variant="bordered">
            <AccordionItem title="Manhã" className="text-left text-yellow-700">
              <p>
                08h – 08h30 | Credenciamento, Recepção e Entrega de materiais
              </p>
              <p>08h – 08h30 | Cerimônia de Abertura</p>
              <p>
                08h30 – 9h40 | Conferência de Abertura - Desafios da formação de
                professores de línguas (Profa. Dra. Ana Maria Ferreira Barcelos
                & Profa. Dra. Suellen Thomaz de Aquino Martins)
              </p>
              <p>
                9h40 – 10h | Conversa Aberta - Espaço para perguntas e interação
                com a palestrante
              </p>
              <p>10h – 11h | Cerimônia de Homenagens</p>
            </AccordionItem>

            <AccordionItem title="Tarde" className="text-left text-yellow-700">
              <p>
                14h – 17h | Oficina A (voltada para o público de LEA-NI) -
                Ministrada pela profa. Dra. Tatiany Pertel Sabaini Dalben
              </p>
            </AccordionItem>

            <AccordionItem title="Noite" className="text-left text-yellow-700">
              <p>
                19h - 21h | Conferência de Encerramento - E-motions and the
                emotional literacy phase (Prof. Dr. Luis Javier Pentón Herrera &
                Prof. Dr. Renato Gonçalves Peruzzo)
              </p>
              <p>
                21h – 21h20 | Conversa Aberta - Espaço para perguntas e
                interação com a palestrante
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <DinamizandoFooter />
    </>
  );
}
