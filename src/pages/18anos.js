import Head from "next/head";

export default function DezoitoAnos() {
  return (
    <>
      <Head>
        <title>Dinamizando - 18 Anos 🎉</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-4">
          🎉 18 Anos de Dinamizando! 🎉
        </h1>
        <p className="text-lg text-yellow-700 mb-8 max-w-xl">
          Estamos comemorando 18 anos de história, impacto e transformação. Em
          breve, uma nova fase está chegando. Fique de olho!
        </p>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
      </div>
    </>
  );
}
