import styled from "styled-components";

export const NavBottomDropDownContainer = styled.div`
  display: flex;
  visibility: hidden;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 350px;
  height: 100vh;
  gap: 0.5em;

  &.active {
    visibility: visible;
  }

  .sign-in {
    display: flex;
    background-color: #232f3e;
    align-items: center;
    color: white;
    padding: 0.6em 0;
    p {
      font-size: 1.2em;
      font-weight: bold;
    }
    img {
      margin: 0 0.7em 0 2em;
      height: 2em;
      width: 2em;
    }
  }

  .drop-down-item-container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 1em;

    .container {
      border-top: 1px solid #d5dbdb;
      padding: 0.6em 0 0.6em 0;

      .title {
        font-size: 1.1em;
        font-weight: bold;
        padding: 0.5em 1rem 0.5em 2rem;
      }

      .content {
        display: flex;
        flex-direction: column;

        .accordion {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;

          &.active .arrow-down {
            transform: rotate(270deg);
          }

          &:hover {
            background-color: white;
          }

          span {
            display: flex;
            padding: 0.8em 1rem 0.75em 2rem;
            &:hover {
              background-color: #eaeded;
            }
          }

          li,
          span {
            width: 100%;
          }

          .accordion-menu {
            height: 0;
            opacity: 0;
            visibility: hidden;
            flex-direction: column;

            &.active {
              height: 100%;
              opacity: 1;
              visibility: visible;
              padding: 0;
              transition: opacity 1s ease, visibility 1s ease;
            }
          }
        }

        a,
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 0.8em 1rem 0.75em 2rem;
          img {
            margin-left: auto;
            width: 17px;
            height: 17px;
          }

          .arrow-down {
            transform: rotate(90deg);
            margin-left: 0.8em;
            margin-top: 0.2em;
          }

          &:hover {
            background-color: #eaeded;
          }
        }
      }
    }
  }
`;
