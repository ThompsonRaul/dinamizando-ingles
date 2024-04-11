import nodemailer from "nodemailer";

export default async function sendMail(req, res) {
  if (req.method === "POST") {
    const {
      nomeCompleto,
      nomeSocial,
      email,
      instituicaoVinculo,
      categoria,
      tipoInscricao,
      simposioTematico,
      tituloTrabalho,
      resumoCompleto,
      palavrasChave,
      referencias,
      autoriaPrincipal,
      coautoria,
      orientacao,
      vinculoInstitucionalTrabalho,
    } = req.body;

    // Configuração do nodemailer com suas credenciais
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "", // Use variáveis de ambiente para segurança
        pass: "",
      },
    });

    const mailOptions = {
      from: "",
      to: "",
      subject: `Nova Inscrição de ${nomeCompleto}`,
      text: `
        Nome Completo: ${nomeCompleto}
        Nome Social: ${nomeSocial}
        Email: ${email}
        Instituição de Vínculo: ${instituicaoVinculo}
        Categoria: ${categoria}
        Tipo de Inscrição: ${tipoInscricao}
        Simpósio Temático: ${simposioTematico}
        Título do trabalho: ${tituloTrabalho}
        Resumo completo: ${resumoCompleto}
        Palavras-chave: ${palavrasChave}
        Referências: ${referencias}
        Autoria principal: ${autoriaPrincipal}
        Coautoria: ${coautoria}
        Orientação: ${orientacao}
        Vínculo Institucional do Trabalho: ${vinculoInstitucionalTrabalho}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Erro ao enviar o e-mail");
      } else {
        console.log("Email enviado: " + info.response);
        res.status(200).send("E-mail enviado com sucesso");
      }
    });
  } else {
    // Método não permitido
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
