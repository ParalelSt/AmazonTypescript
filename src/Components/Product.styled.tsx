import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90em;
  background-color: white;
  padding: 2em 1.5em;
  position: relative;

  p {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.7em;
  }

  .slick-prev,
  .slick-next {
    font-size: 15px !important;
    margin-top: -0.5em;
    height: 100px;
    width: 50px;
    background-color: white;
    position: absolute;

    img {
      max-width: 20px;
      height: 50px;
      margin: auto;
    }
  }

  .slick-slider .slick-prev {
    left: 0 !important;
  }

  .slick-slider .slick-next {
    right: 0 !important;
  }

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }

  .slider-container {
    background-color: white;
    .product-image-container {
      background-color: white;

      img {
        object-fit: contain;
        height: 13em;
        cursor: pointer;
      }
    }
  }
`;
