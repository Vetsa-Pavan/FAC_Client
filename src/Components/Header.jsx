import React from "react";
import Nav from "./Navbar/Nav";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <section>
      <MobileHeader />
      <Nav />
    </section>
  );
};

export default Header;
