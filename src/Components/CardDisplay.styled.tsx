import styled from "styled-components";

export const CardDisplayContainer = styled.div`
  display: flex;
  gap: 1.1em;
  width: 90em;

  .card-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1em 1.2em 0.5em 1.2em;
    margin-bottom: 1em;
    width: 22em;
    height: 26.2em;

    .card-title {
      span {
        font-size: 1.4em;
        font-weight: bold;
      }
      margin-bottom: 0.1em;
    }

    .card-image {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 19.2em;
      }
      cursor: pointer;
    }

    .card-button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #007185;
      font-size: 14px;
      height: 100%;
      cursor: pointer;
    }

    .card-button:hover {
      span {
        color: #c7511f;
        transition: color, 10ms ease;
      }
    }
  }

  .sign-in-container {
    height: 10em;

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2em;
      margin-top: 0.5em;
      background-color: #ffd814;
      border-radius: 8px;
      padding: 0.2em;

      &:hover {
        background-color: #f0cb11;
      }

      button {
        height: 100%;
        width: 100%;
        font-size: 14px;
      }
    }
  }
`;
