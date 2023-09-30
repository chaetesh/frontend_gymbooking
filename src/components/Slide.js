import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

let slidesToShow = 5;
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <i
            class="fa-solid fa-caret-left"
            style={{ color: "black", fontSize: "30px" }}
          ></i>
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <i
            class="fa-solid fa-caret-right"
            style={{ color: "black", fontSize: "30px" }}
          ></i>
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  dots: true,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  autoplay:'true',
};

export const Slide = () => {
  return (
    <div style={{ margin: "" }} className="carousel px-5 py-4">
      <Slider {...carouselProperties}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div>
      <img
        className="multi__image"
        src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
        alt=""
        style={{
          width: "100%",
          height: "72vh",
          marginBottom: "10px",
          objectFit: "cover",
          borderRadius:'0px'
        }}
      />
    </div>
  );
};
