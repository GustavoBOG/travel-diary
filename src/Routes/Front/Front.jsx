import Carousel from "../Carousel/Carousel";
import "./Front.css";

function Front() {
  return (
    <div className="front-container">
      <div className="box">
        <img src="/assets/image1.png" alt="salto angel " />
      </div>
      <div className="box">
        <img src="/assets/image2.png" alt="salto angel " />
      </div>
      <div className="box">
        <img src="/assets/image3.png" alt="salto angel " />
      </div>
      <Carousel />
    </div>

    
  );
}

export default Front;
