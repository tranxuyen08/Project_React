import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
function Banner() {
  return (
    <section className="section sect-banner">
      <div className="container">
        <Carousel className="sect-banner">
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="./image/980wx448h_34.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="./image/980x448_2__20.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/980x448-min_f10.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Banner;
