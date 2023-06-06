import "./Style.css";
import React from "react";
//Images
import NikeLogo from "./assets/NikeLogo.svg";

const Menu = () => {
  return (
    <nav id="Menu">
      <img src={NikeLogo} alt="" />
      <div id="BoxMenu">
        <nav>
          <a href="New">New & Featured</a>
          <a href="Men">Men</a>
          <a href="Women">Women</a>
          <a href="Kids">Kids</a>
          <a href="Sale">Sale</a>
          <a href="SNKRS">SNKRS</a>
        </nav>
      </div>

      <div id="MenuItens">
        <div id="Search">
          <input type="text" name="" placeholder="Search" id="SearchButton" />
          <button className="SearchIcon"></button>
        </div>
        <button id="btn1"></button>
        <button id="btn2"></button>
      </div>
    </nav>
  );
};

export default Menu;
