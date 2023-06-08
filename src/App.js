import "./App.css";
import Header from "./components/Header/Header";
import Carousel, {
  CarouselItem,
} from "./components/Header/Carrousel/Carrousel";
import Section1 from "./components/Main/section1/section1";
import Section2 from "./components/Main/section2/Section2";
import Section3 from "./components/Main/section3/Section3";

import {
  Buttons1,
  Buttons2,
  Buttons3,
  Buttons4,
  Buttons5,
} from "./components/Main/Buttons/Buttons";
import Logo1 from "./components/Header/Menu/assets/span.svg";
import Logo2 from "./components/Header/Menu/assets/free_exchange_c7e139dc0d.png";
import Logo3 from "./components/Header/Menu/assets/gift_nike_fdabd13fca.png";
import Logo4 from "./components/Header/Menu/assets/gift_card_99aa6b2828.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel>
        <CarouselItem>
          <img src={Logo3} alt="" />
          <span className="linkCarousel">DIA DOS NAMORADOS</span>
          Presentes em oferta <a href="aqui">aqui</a>.
        </CarouselItem>
        <CarouselItem>
          <img src={Logo1} alt="" />
          <span className="linkCarousel">GUIA TÊNIS DE CORRIDA</span>
          Encontre o seu tênis ideal. <a href="saibaMais">Saiba mais.</a>
        </CarouselItem>
        <CarouselItem>
          <img src={Logo2} alt="" />
          <span className="linkCarousel">TROCA GRÁTIS</span>
          Confira os detalhes da nossa política de trocas e devoluções.
          <a href="VejaAqui">Veja aqui.</a>
        </CarouselItem>
        <CarouselItem>
          <img src={Logo4} alt="" />
          <span className="linkCarousel"> CARTÃO PRESENTE</span>
          para presentes de última hora. <a href="aqui">Saiba mais.</a>
        </CarouselItem>
      </Carousel>
      <Section1 />
      <section id="Base">
        <Buttons1 />
        <Buttons2 />
        <Buttons3 />
      </section>

      <div id="title">
        <h1>Corinthians</h1>
      </div>
      <Section2 />

      <section id="Base">
        <Buttons4 />
      </section>


      <div id="title">
        <h1>Dia dos Namorados</h1>
      </div>
      <Section3 />

      <section id="Base">
        <Buttons1 />
        <Buttons5 />
        <Buttons2 />
      </section>
    </div>
  );
}

export default App;
