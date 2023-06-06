import React from "react";
import "./Style.css";
//Components
import MenuTop from "./Menu/MenuTop";
import Menu from "./Menu/Menu";
//Componentes Carrousel
import Carousel, { CarouselItem } from "./Carrousel/Carrousel";

const Header = () => {
  return (
    <header id="ContainerMenu">
      <MenuTop />
      <Menu />

      <Carousel>
        <CarouselItem>
          <p>Summer Ready Sale | 20% Off Select Styles Members:</p>
          <p>Log in and use code CAMPNIKE at checkout.</p>
        </CarouselItem>
        <CarouselItem>
          <p> Limited Time:</p>
          <p>Earn $75 with a new Apple Card. Learn more. Terms apply.</p>
        </CarouselItem>
        <CarouselItem>
          <p> Why Wait? Try Store Pickup Buy online and</p>
          <p>
            find a store near you for pick up in less than 2 hours. Shop now.
          </p>
        </CarouselItem>
      </Carousel>
    </header>
  );
};

export default Header;
