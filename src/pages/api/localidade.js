export default async function localidade(req, res) {  

  try {
    const resposta = await fetch("https://ipinfo.io/json");
    const dados = await resposta.json();
    console.log(dados);
    res.json(dados);
  } catch (erro) {
    console.error("Erro ao obter o endereço IP:", erro);
  }
}
