import React from "react";
import "./Style.css";
//Imagens
import Jordan from "./assets/jordan.svg";
import Snkrs from "./assets/Snkrs.svg";

const MenuTop = () => {
  return (
    <nav id="MenuTop">
      <div id="center">
        <div id="logosMenu">
          <img src={Jordan} alt="" />
          <img src={Snkrs} alt="" />
        </div>
        <div id="linksMenu">
          <a href="#Ajuda">Ajuda</a>
          <a href="#junteSeANos">Junte-se a nós</a>
          <a href="#Entrar" id="noneMenu">Entrar</a>
        </div>
      </div>
    </nav>
  );
};

export default MenuTop;
