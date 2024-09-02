import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  height: 100vh;

  .logo-container {
    display: flex;
    justify-content: center;

    img {
      height: 5em;
      width: 7em;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    width: 23em;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 1.5em;

    .top-page {
      display: flex;
      flex-direction: column;
      padding: 1.2em 1.8em;

      .upper-container {
        display: flex;
        flex-direction: column;

        .content-container {
          .upper {
            h1 {
              font-weight: normal;
              margin-bottom: 0.5em;
            }
          }
          .lower {
            .input-container {
              display: flex;
              flex-direction: column;

              label {
                font-size: 0.8em;
                font-weight: bold;
                margin-bottom: 0.3em;
              }

              input {
                height: 2em;
                margin-bottom: 0.8em;
              }
            }
          }
        }
      }
      .lower-container {
        .continue-btn {
          display: block;
          background-color: #ffd814;
          font-weight: bold;
          font-size: 0.8em;
          padding: 0.6em 0;
          width: 100%;
          border-radius: 8px;
          margin-bottom: 1.5em;
        }

        .text-container {
          display: flex;
          flex-direction: column;

          span {
            font-size: 0.8em;
          }

          .top-text {
            a {
              text-decoration: underline;
              color: #3888cd;
            }

            margin-bottom: 1.8em;
          }

          .middle-text {
            a {
              margin-left: 0.2em;
            }

            margin-bottom: 1.3em;
          }

          .bottom-text {
            border-top: 1px solid rgb(0, 0, 0, 0.1);
            padding: 1.2em 0 0 0;
            font-weight: bold;
            font-size: 0.8em;
            margin-bottom: 0.5em;
          }

          .bottom-a {
            font-size: 0.9em;
          }
        }
      }
    }
  }

  .bottom-part {
    .amazon-account-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: gray;
        font-size: 0.8em;
        margin-bottom: 0.7em;
      }

      span::before,
      span::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #ccc;
        margin: 0 10px;
      }

      .create-account-btn {
        text-align: center;
        border: 1px solid rgb(0, 0, 0, 0.2);
        padding: 0.5em 7.4em;
        border-radius: 8px;
      }
    }
  }

  .bottom-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5em;

    .top {
      display: flex;
      gap: 2em;
      margin-bottom: 1.2em;
    }

    .bottom {
      color: #696969;
    }

    .row {
      font-size: 0.7em;
    }
  }
`;
