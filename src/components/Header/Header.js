import React from "react";
import "./Style.css";
//Components
import MenuTop from "./Menu/MenuTop";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <header id="header">
      <MenuTop />
      <Menu />
    </header>
  );
};

export default Header;
