import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
export const DinamizandoLogo = () => (
  <Link href="/">
    <Image
      src={Logo}
      alt="Logo do Dinamizando"
      width={90}
      height={27}
      className="cursor-pointer"
    />
  </Link>
);
