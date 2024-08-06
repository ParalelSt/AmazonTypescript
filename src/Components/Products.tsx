import { ProductContainer } from "./Product.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow } from "./ArrowPrev";
import { NextArrow } from "./ArrowNext";

export const Products = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <PrevArrow></PrevArrow>,
    nextArrow: <NextArrow></NextArrow>,
  };
  const data = [
    {
      img: "Charger.jpg",
      alt: "",
      id: 1,
    },

    {
      img: "Phone.jpg",
      alt: "",
      id: 2,
    },

    {
      img: "Monitor.jpg",
      alt: "",
      id: 3,
    },

    {
      img: "Tablet.jpg",
      alt: "",
      id: 4,
    },

    {
      img: "Airtag.jpg",
      alt: "",
      id: 5,
    },

    {
      img: "Headset.jpg",
      alt: "",
      id: 6,
    },

    {
      img: "HDMI.jpg",
      alt: "",
      id: 7,
    },

    {
      img: "Charger.jpg",
      alt: "",
      id: 8,
    },

    {
      img: "Phone.jpg",
      alt: "",
      id: 9,
    },

    {
      img: "Monitor.jpg",
      alt: "",
      id: 10,
    },

    {
      img: "Tablet.jpg",
      alt: "",
      id: 11,
    },

    {
      img: "Airtag.jpg",
      alt: "",
      id: 5,
    },

    {
      img: "Headset.jpg",
      alt: "",
      id: 6,
    },

    {
      img: "HDMI.jpg",
      alt: "",
      id: 7,
    },
  ];

  return (
    <ProductContainer>
      <p>Popular products in wireless internationally</p>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="product-image-container" key={item.id}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </ProductContainer>
  );
};
