import styled from "styled-components";
import { BsInfoLg } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa6";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 6em;
      width: 6em;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0.8em 1.3em;
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 22.3em;
    height: 37em;

    a {
      color: #1975c6;
      text-decoration: underline;

      &:hover {
        color: #c45500;
      }
    }

    .upper {
      .top-row {
        p {
          font-size: 1.7em;
        }
        margin-bottom: 0.5em;
      }

      .row {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.8em;

        label {
          font-size: 0.8em;
          font-weight: bold;
          padding: 0 0 0.1em 0.1em;
        }

        input {
          border: 1px solid rgb(0, 0, 0, 0.3);
          border-radius: 4px;
          font-size: 0.9em;
          padding: 0.45em 0.5em;
          line-height: normal;
        }

        .icon-holder {
          display: flex;
          align-items: center;
          gap: 0.4em;
          font-size: 0.75em;
        }
      }

      .bottom-row {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 1.5em;

        button {
          padding: 0.3em 41%;
          background-color: #ffd814;
          font-size: 0.9em;
          border-radius: 8px;

          &:hover {
            background-color: #ffd814;
          }
        }
      }
    }

    .lower {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      .lower-row {
        font-size: 0.75em;
        padding: 0 0.5em;
      }

      .middle-row {
        display: flex;
        flex-direction: column;
        padding: 1em 0.5em;
        border-top: 1px solid rgb(0, 0, 0, 0.1);
        border-bottom: 1px solid rgb(0, 0, 0, 0.1);
        margin-bottom: 1em;

        a {
          text-decoration: none;
          font-weight: bold;
        }

        span {
          font-size: 1.1em;
          font-weight: bold;
        }
      }

      .bottom-row {
        display: flex;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;

          .icon {
            margin-left: 0.5em;
          }
        }
      }
    }
  }
`;

export const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <div className="nav">
          <img src="Logo_dark.svg" />
        </div>
        <div className="container">
          <div className="upper">
            <div className="top-row">
              <p>Create account</p>
            </div>
            <div className="row">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" placeholder="First and last name" />
            </div>
            <div className="row">
              <label htmlFor="phoneOrEmail">Mobile number or email</label>
              <input type="text" id="phoneOrEmail" />
            </div>
            <div className="row">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                placeholder="At least six characters"
              />
              <div className="icon-holder">
                <BsInfoLg></BsInfoLg>
                <span>Passwords must be at least 6 characters.</span>
              </div>
            </div>
            <div className="row">
              <label htmlFor="password">Re-enter password</label>
              <input type="text" id="password" />
            </div>
            <div className="bottom-row">
              <button className="continue-button">Continue</button>
            </div>
          </div>
          <div className="lower">
            <div className="lower-row">
              By creating an account, you agree to Amazon&apos;s <br></br>
              <a href="/">Conditions of Use & Sale.</a>&nbsp;Please see
              our&nbsp;
              <a href="/">Privacy Notice</a>, our <a href="/">Cookies Notice</a>
              &nbsp;and our <a href="/">Interest-Based Ads Notice.</a>
            </div>
            <div className="lower-row middle-row">
              <span>Buying for work? </span>
              <a href="/">Create a free business account</a>
            </div>
            <div className="lower-row bottom-row">
              Already have an account?
              <a href="/">
                &nbsp;{"Sign in"}
                <FaCaretRight size={9} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </SignInContainer>
    </>
  );
};
