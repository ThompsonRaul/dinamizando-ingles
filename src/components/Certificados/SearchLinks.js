// components/SearchLinks.js
import React, { useState } from "react";

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

  const handlePesquisa = () => {
    // Realiza a pesquisa nos dados
    const resultadosPesquisa = dados.flatMap((pasta) =>
      pasta.subpastas.flatMap((subpasta) =>
        subpasta.subpastas.flatMap((arquivo) =>
          arquivo.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
            ? { ...arquivo, pasta, subpasta }
            : null
        )
      )
    );

    setResultados(resultadosPesquisa.filter(Boolean));
    setPesquisaRealizada(true);
  };

  return (
    <div className="my-4 min-h-screen flex flex-col items-center">
      <input
        type="text"
        placeholder="Digite o nome para pesquisar"
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        className="border border-gray-300 p-2 mb-2"
      />
      <button
        onClick={handlePesquisa}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
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
