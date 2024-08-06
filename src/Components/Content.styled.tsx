import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  justify-content: center;
  .content-container {
    height: 10em;
    width: 78%;

    .slick-prev {
      left: 2% !important;
      top: 8rem;
      z-index: 1;
    }

    .slick-next {
      right: 2% !important;
      top: 8rem;
      z-index: 1;
    }
  }

  .lower {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 23em;
    left: 0;
    right: 0;
  }
`;
