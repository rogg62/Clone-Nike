import "./Style.css";
import React from "react";
//Images
import NikeLogo from "./assets/NikeLogo.svg";

const Menu = () => {
  return (
    <nav id="Menu">
      <div id="navMenu">
        <img src={NikeLogo} alt="" />

        <div id="linksMenu2">
          <div className="dropdown">
            <button className="dropbtn">Promoções</button>

            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Lançamentos</button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Ofertas</button>

            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Masculino</button>

            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Feminino</button>

            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">SNKRS</button>

            <div className="dropdown-content">
              <div className="row">
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="buttonsMenu">
          <div id="search">
            <input type="text" placeholder="Buscar" />
            <button></button>
          </div>

          <button id="btn1" className="button"></button>
          <button id="btn2" className="button"></button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
