import { CountryDropDownContainer } from "./CountryDropDown.styled";
import Flag from "react-flagkit";

function CountryDropDown() {
  return (
    <>
      <CountryDropDownContainer>
        <div className="upper">
          <div className="top-triangle"></div>
          <div className="upper-content">
            <span>
              Change Currency{" "}
              <a className="learn-more" href="#">
                Learn more
              </a>
            </span>
            <span className="middle-layer">
              <span>&pound;</span>&nbsp;&#8208;&nbsp;<span>GBP</span>
              &nbsp;&#8208;&nbsp;British Pound
              <a className="change-anchor" href="#">
                Change
              </a>
            </span>
          </div>
        </div>
        <div className="lower">
          <div className="lower-content">
            <div className="flag">
              <Flag className="country-flag" country="GB" size={18} />
            </div>
            <span>You are shopping on Amazon.co.uk</span>
          </div>

          <div className="country-region">
            <a href="#">Change country/region</a>
          </div>
        </div>
      </CountryDropDownContainer>
    </>
  );
}

export default CountryDropDown;
