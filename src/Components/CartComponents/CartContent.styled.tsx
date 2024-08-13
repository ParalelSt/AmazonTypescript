import styled from "styled-components";

export const CartContentContainer = styled.div`
  display: block;

  .container {
    display: flex;
    flex-direction: column;
    margin: 1em 0 1em 13em;
    .note-container {
      display: flex;
      align-items: flex-end;
      padding: 1.5em 1.5em 1em 1.5em;
      background-color: white;
      height: 17em;

      .left {
        height: 13.2em;
        margin-right: 1em;
      }

      .right {
        display: flex;
        flex-direction: column;
        height: 13.2em;

        .upper {
          display: flex;
          flex-direction: column;

          span {
            font-size: 1.4em;
            font-weight: bold;
          }

          a {
            color: #007185;
            width: 9.6em;
            font-size: 0.8em;
            font-weight: bold;

            &:hover {
              color: #c7511f;
              text-decoration: underline;
            }
          }
        }

        .lower {
          display: flex;
          margin-top: 1em;
          gap: 0.5em;

          .sign-in-button,
          .sign-up-button {
            padding: 0.4em 0.7em;
            border: 1px solid rgb(0, 0, 0, 0.5);
            border-radius: 20px;
            font-size: 1em;
            text-align: center;

            &:visited,
            & {
              color: black;
            }
          }

          .sign-in-button {
            border: none;
            background-color: #ffd814;
          }
        }
      }
    }

    .empty {
      margin: 1em 0;
      background-color: white;
      height: 4.7em;
    }

    p {
      font-size: 0.75em;
    }
  }

  .empty-bottom-bar {
    margin: 1em 0 0.5em 0;
    background-color: white;
    height: 1.2em;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`;
