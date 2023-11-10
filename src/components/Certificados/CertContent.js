import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const CertContent = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://drive.google.com/drive/search?q=title:${name}%20parent:1r1LKkbSqMDPmvFpjRdL6DbcEt7fYmMG3`,
      "searchTab"
    );
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center min-h-screen">
        <Input
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo."
          className="max-w-xs mx-auto"
          onChange={handleName}
          value={name}
        />
        <Button
          type="submit"
          radius="full"
          className="bg-blue-950 text-white shadow-lg"
        >
          Pesquisar
        </Button>
      </form>
    </>
  );
};

export default CertContent;
