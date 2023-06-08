import "./App.css";
import Header from "./components/Header/Header";
import Carousel, {
  CarouselItem,
} from "./components/Header/Carrousel/Carrousel";
import Logo1 from "./components/Header/Menu/assets/span.svg";
import Logo2 from "./components/Header/Menu/assets/free_exchange_c7e139dc0d.png";
import Logo3 from "./components/Header/Menu/assets/gift_nike_fdabd13fca.png";
import Logo4 from "./components/Header/Menu/assets/gift_card_99aa6b2828.png"

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
    </div>
  );
}

export default App;
