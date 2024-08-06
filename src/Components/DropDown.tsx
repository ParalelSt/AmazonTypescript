import styled from "styled-components";

export const DropDown = styled.div`
  z-index: 99;
  display: flex;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 3.9em;
  right: 6em;
  background-color: white;
  transition: opacity, 200ms ease;
  border-radius: 4px;

  .container {
    width: 500px;
    position: relative;
    .triangle {
      background-color: #ffffff;
      position: absolute;
      top: -0.45em;
      left: 23.75em;
      transform: rotate(45deg);

      height: 15px;
      width: 15px;
    }
  }

  .upper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    border-bottom: 1px solid gainsboro;

    button {
      background-color: #ffd814;
      border-color: #fcd200;
      padding: 0.4em 6em;
      margin: 1em 0 0.5em 0;
      font-size: 0.9em;
      border-radius: 10px;
    }

    span {
      font-size: 0.78em;
      margin-bottom: 0.5em;
      a {
        color: #05a;
      }
    }
  }

  .lower {
    display: flex;

    .left,
    .right {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 1em;

      .nav-title {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 0.5em;
      }

      .item-container {
        display: flex;
        flex-direction: column;

        span {
          font-size: 0.9em;
          margin: 0.2em;

          &:hover {
            color: orange;
            text-decoration: underline;
          }
        }
      }
    }

    .left {
      border-right: 1px solid gainsboro;
    }
  }
`;
