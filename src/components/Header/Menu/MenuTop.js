import React from "react";
import "./Style.css";
//Imagens
import Converse from "./assets/converse.svg";
import Jordan from "./assets/jordan.svg";

const MenuTop = () => {
  return (
    <nav id="TopMenu">
      <div id="TopMenu-Logos">
        <img src={Jordan} alt="" />
        <img src={Converse} alt="" />
      </div>
      <div id="TopMenu-Links">
        <a href="Find">Find a Store</a>
        <a href="Help">Help</a>
        <a href="Join">Join Us</a>
        <a href="Sign" id="none">
          Sign in
        </a>
      </div>
    </nav>
  );
};

export default MenuTop;
