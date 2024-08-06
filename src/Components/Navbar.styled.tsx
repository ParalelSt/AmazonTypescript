import styled from "styled-components";
import { DropDown } from "./DropDown";
import { CountryDropDownContainer } from "./CountryDropDown.styled";

export const Nav = styled.nav`
  background-color: #050522;
  padding: 0 0.5em;

  .fa-icon {
    color: white;
  }

  .fa-count-icon {
    color: orange;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    cursor: pointer;

    transition: box-shadow 0.3s ease;
    height: 70%;

    &:hover {
      box-shadow: 0 0 0 1px white;
    }
  }

  .message {
    font-size: 0.8em;
  }

  .message-bottom {
    color: white;
  }

  .caret-down {
    height: 0.7em;
  }

  .message,
  .caret-down {
    color: #ffffffbc;
  }

  display: flex;

  .left-nav,
  .right-nav,
  .middle-nav {
    display: flex;
    align-items: center;
  }

  .left-nav {
    .drop-down-container {
      display: flex;
      visibility: visible;
      flex-direction: column;
      color: #0a0a0a;
      background-color: white;
      z-index: 99;
      position: absolute;
      top: 5.3em;
      left: 5.5em;
      width: 450px;
      height: 130px;
      padding: 0.4em 1em 0.1em 1em;
      border-radius: 3px;
      transition: visibility 100ms;

      .arrow {
        position: absolute;
        top: -0.45em;
        transform: rotate(45deg);
        background-color: #ffffff;
        width: 15px;
        height: 15px;
      }

      .upper {
        display: flex;
        font-size: 15px;
      }

      .lower {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        gap: 0.5em;

        .dismiss-button {
          background-color: white;
          border: 1px solid hsl(240, 100%, 0.19607843137254902%, 0.2);
          text-align: center;
          border-radius: 8px;
          padding: 0.5em;
          font-size: 13px;
        }

        .change-address-button {
          background-color: #ffd814;
          border: 1px solid hsl(240, 100%, 0.19607843137254902%, 0.1);
          text-align: center;
          border-radius: 8px;
          padding: 0.5em;
          font-size: 13px;
        }
      }
    }

    .drop-down-container.isClosed {
      visibility: hidden;
    }

    .logo {
      img {
        width: 5.5em;
        height: 4.5em;
      }
      display: flex;
      align-items: center;
      padding: 0 0.5em;
      margin: 1px;
    }

    .delivery-country {
      display: flex;

      .left {
        display: flex;
        align-items: center;
        height: 100%;

        .icon {
          margin-top: auto;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .middle-nav {
    margin: 0 1em;
    flex: 1;
    .search-box {
      border-radius: 4px;
      display: flex;
      align-items: center;
      width: 100%;
      background-color: white;

      .filters {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.1em;
        background-color: hsla(0, 0%, 70.19607843137254%, 0.6);
        width: 3.5em;
        height: 2.5em;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: 1px solid #0000002b;
        cursor: pointer;
        &:hover {
          background-color: hsla(0, 0%, 70.19607843137254%, 0.75);
          .caret-down,
          span {
            color: #000001;
          }
        }

        .caret-down,
        span {
          color: #00000099;
        }

        span {
          font-size: 0.8em;
        }
      }

      .input-container {
        width: 100%;
        height: auto;
        input {
          padding: 0 0.5em;
          border: none;
          width: 100%;
          &:focus {
            outline: none;
          }
        }
      }

      .search-submit-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cfa14b;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        width: 3.2em;
        height: 2.5em;
        cursor: pointer;
        button {
          display: flex;
          img {
            width: 1.8em;
            height: auto;
          }
        }
      }
    }
  }

  .right-nav {
    .returns-and-orders,
    .account {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &:hover ${DropDown} {
        background-color: white;
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        z-index: 99;
      }
    }

    .region {
      &:hover ${CountryDropDownContainer} {
        background-color: white;
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        z-index: 99;
      }
    }

    .nav-item {
      .account-and-lists {
        display: flex;
        position: relative;
      }
    }

    .basket {
      color: white;

      .basket-title {
        position: relative;
        top: 0.5em;
      }
    }

    .cart-container {
      position: relative;

      .shopping-cart {
        height: auto;
        width: 2.5em;
      }

      .fa-count-icon {
        position: absolute;
        right: 0.6em;
        bottom: 1.1em;
        height: 0.8em;
      }
    }
  }
`;
