import { SignInContainer } from "./SignIn.styled";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const startYear = 1996;
  const currentYear = new Date().getFullYear();
  const displayYear = `${startYear + "-" + currentYear}`;

  return (
    <>
      <SignInContainer>
        <div className="logo-container">
          <Link to={"/"}>
            <img src="Logo_dark.svg" />
          </Link>
        </div>
        <div className="container">
          <div className="top-page">
            <div className="upper-container">
              <div className="content-container">
                <div className="upper">
                  <h1>Sign in</h1>
                </div>
                <div className="lower">
                  <div className="input-container">
                    <label htmlFor="emailOrPhoneNum">
                      Email or mobile phone number
                    </label>
                    <input type="text" id="emailOrPhoneNum" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-container">
              <button className="continue-btn">Continue</button>
              <div className="text-container">
                <span className="top-text">
                  By continuing, you agree to Amazon's{" "}
                  <a href="#">Conditions of Use & Sale</a>. Please see our{" "}
                  <a href="#">Privacy Notice</a>, our{" "}
                  <a href="#">Cookies Notice</a> and our{" "}
                  <a href="#">Interest-Based Ads Notice</a>.
                </span>
                <span className="middle-text">
                  <FaCaretRight
                    size={11}
                    viewBox="0 0 512 512"
                    color="gray"
                  ></FaCaretRight>
                  <a href="#">Need help?</a>
                </span>
                <span className="bottom-text">Buying for Work?</span>
                <a className="bottom-a" href="#">
                  Shop on Amazon Business
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-part">
          <div className="amazon-account-container">
            <span>New to Amazon?</span>
            <button className="create-account-btn">
              Create your Amazon account
            </button>
          </div>
        </div>
        <div className="bottom-page">
          <div className="row top">
            <a href="#">Conditions of use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Help</a>
            <a href="#">Cookies Notice</a>
            <a href="#">Interest-Based Ads Notice</a>
          </div>
          <div className="row bottom">
            <span>
              &copy; {displayYear}, Amazon.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </SignInContainer>
    </>
  );
};

