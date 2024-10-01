import Carousel from "../Carousel/Carousel";
import "./Portada.css";

function Portada() {
  return (
    <div className="front-container">
      <div className="box">
        <img src="/assets/image1.png" alt="salto angel " />
      </div>
      <div className="box">
        <img src="/assets/image2.png" alt="big " />
      </div>
      <div className="box">
        <img src="/assets/image3.png" alt="taj " />
      </div>
      <Carousel />
    </div>

    
  );
}

export default Portada;
