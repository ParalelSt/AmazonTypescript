import styled from "styled-components";

export const CountryDropDownContainer = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: column;
  background-color: white;
  position: absolute;
  border-radius: 4px;
  top: 3.9em;
  left: 95.4em;
  z-index: 99;
  width: 250px;
  height: 150px;
  padding: 0 1em;
  transition: opacity, 200ms ease;

  a {
    color: #05a;

    &:hover {
      color: orange;
      text-decoration: underline;
    }
  }

  span {
    font-size: 0.85em;
    display: flex;
    align-items: center;
  }

  .upper {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-bottom: 1px solid gainsboro;

    .top-triangle {
      position: absolute;
      top: -0.4em;
      left: 2.2em;
      background-color: white;
      height: 15px;
      width: 15px;
      transform: rotate(45deg);
    }

    .upper-content {
      margin-top: 1em;
      display: flex;
      flex-direction: column;

      .learn-more {
        margin-left: 1em;
        font-size: 0.9em;
      }

      .middle-layer {
        .change-anchor {
          margin-left: auto;
        }
      }
    }
  }

  .lower {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 0.4em;

    .lower-content {
      display: flex;

      .flag {
        padding: 0.2em 0 0 0;
        margin-right: 0.3em;
      }
    }

    .country-region {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9em;
    }
  }
`;
