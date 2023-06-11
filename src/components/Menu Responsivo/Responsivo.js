import "./Style.css";
//Images
import Logo from "../Header/Menu/assets/NikeLogo.svg";

import React from "react";

const Responsivo = () => {
  return (
    <header id="Responsivo">
      <div id="topReponsivo">
        <img src={Logo} alt="" />
        <div id="ButtonNavResponsivo">
          <button className="button" id="btn1"></button>
          <button className="button" id="btn2"></button>
          <button id="btn3">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div id="bottomReponsivo">
        <input type="text" />
        <button>
        </button>
      </div>
    </header>
  );
};

export default Responsivo;
