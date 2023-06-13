import "./Style.css";
//Images
import Logo from "../Header/Menu/assets/NikeLogo.svg";
import { useState } from "react";

import React from "react";

const Responsivo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header id="Responsivo">
      <div id="topReponsivo">
        <img src={Logo} alt="" />
        <div id="ButtonNavResponsivo">
          <button className="button" id="btn1"></button>
          <button className="button" id="btn2"></button>

          <button id="btn3">
            <span className="material-symbols-outlined" onClick={openNav}>
              {isOpen}
              menu
            </span>
          </button>

          {isOpen ? (
            <div id="mySidenav" className="sidenav">
              <button className="closebtn" onClick={closeNav}>
                {isOpen}&times;
              </button>
              <a href="link">Promoções</a>
              <a href="link">Lançamentos</a>
              <a href="link">Ofertas</a>
              <a href="link">Masculino</a>
              <a href="link">Feminino</a>
              <a href="link">SNKRS</a>
            </div>
          ) : null}
        </div>
      </div>
      <div id="bottomReponsivo">
        <input type="text" />
        <button></button>
      </div>
    </header>
  );
};

export default Responsivo;
