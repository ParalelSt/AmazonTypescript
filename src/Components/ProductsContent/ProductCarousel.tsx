import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rating } from "./Rating";
import styled from "styled-components";
import { PrevArrow } from "../ArrowPrev";
import { NextArrow } from "../ArrowNext";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23em;
  background-color: white;

  .text {
    width: 100%;
    padding: 0.5em;
    padding-left: 3em;
  }

  .row-container {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 0 2em;
    margin-top: 1em;

    .image-container {
      height: 8em;
      width: 8em;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .slick-arrow::before {
      display: none;
    }
  }
`;

export const ProductCarousel = () => {
  const products = [
    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 0,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 2,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 5,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 13214,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 0,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 2,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 5,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 13214,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 0,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 2,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 5,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 13214,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 0,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 2,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 5,
      id: Math.random() * 100,
    },

    {
      image: "Airtag.jpg",
      name: "Leather AirTag Keyring Case For Apple Airtag Holder Protective Leather Airtags Case Tracker ",
      starRating: "Current",
      rating: 13214,
      id: Math.random() * 100,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: <PrevArrow className="prev-arrow" />,
    nextArrow: <NextArrow className="next-arrow" />,
  };

  return (
    <>
      <ProductsContainer>
        <div className="text">
          <p>Inspired by your browsing history</p>
        </div>
        <div className="row-container">
          <Slider {...settings}>
            {products.map((product) => (
              <div className="container" key={product.id}>
                <div className="image-container">
                  <img src={product.image} />
                </div>
                <div className="item-info">
                  <a href="/">{product.name}</a>
                  <Rating rating={product.rating}></Rating>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ProductsContainer>
    </>
  );
};
