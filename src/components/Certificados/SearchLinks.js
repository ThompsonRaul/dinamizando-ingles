import React, { useState } from "react";
import unorm from "unorm"; // Importa a biblioteca unorm para normalização de caracteres

const SearchResult = ({ pasta, subpasta, nome, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-blue-500 text-white p-4 my-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out mx-4"
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{nome}</p>
        <p className="text-sm text-gray-300">
          {pasta.nomePasta} - {subpasta.nomePasta}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a>
);

const SearchLinks = ({ dados }) => {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);

  const removerAcentos = (str) => {
    return unorm
      .nfd(str)
      .replace(/[\u0300-\u036f]/g, "") // Remove caracteres de acento
      .toLowerCase();
  };

  const handlePesquisa = () => {
    // Realiza a pesquisa nos dados
    const resultadosPesquisa = dados.flatMap((pasta) =>
      pasta.subpastas.flatMap((subpasta) =>
        subpasta.subpastas.flatMap((arquivo) =>
          removerAcentos(arquivo.nome)
            .toLowerCase()
            .includes(removerAcentos(termoPesquisa.toLowerCase()))
            ? { ...arquivo, pasta, subpasta }
            : null,
        ),
      ),
    );

    setResultados(resultadosPesquisa.filter(Boolean));
    setPesquisaRealizada(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePesquisa();
    }
  };

  const handleClear = () => {
    setTermoPesquisa("");
  };

  return (
    <div className="my-4 flex flex-col items-center sm:w-full md:w-">
      <div className="flex flex-col items-center relative">
        <input
          type="text"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 p-2 pr-10 rounded-full shadow-md focus:outline-none w-full"
        />
        {termoPesquisa && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={handleClear}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <button
        onClick={handlePesquisa}
        className="mt-2 bg-blue-800 text-white p-2 rounded-full hover:bg-blue-950 transition duration-300 ease-in-out"
      >
        Pesquisar
      </button>
      <div className="mt-4">
        {pesquisaRealizada && resultados.length > 0 ? (
          <div>
            <h2 className="text-center text-xl font-bold mb-2">
              Resultados da Pesquisa
            </h2>
            {resultados.map((resultado, index) => (
              <SearchResult
                key={`${resultado.link}-${resultado.nome}-${index}`}
                pasta={resultado.pasta}
                subpasta={resultado.subpasta}
                nome={`${resultado.nome}`}
                link={resultado.link}
              />
            ))}
          </div>
        ) : pesquisaRealizada ? (
          <p className="text-center text-gray-600">
            Não foram encontrados resultados para esta pesquisa :(
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchLinks;
