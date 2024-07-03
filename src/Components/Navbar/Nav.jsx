import React from "react";
import Image from "next/image";
import Logo from "../../../public/Images/navLogo.png";
import NavMenu from "./NavMenu";
import Button from "../Button";

const Nav = () => {
  return (
    <nav>
      <div className="flex items-center font-medium justify-around">
        <a href="/">
          <Image src={Logo} className="w-32" />
        </a>

        <ul>
          <NavMenu />
        </ul>

        <div>
          <Button name={"Donate Now"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
