import { NavBottomDropDownContainer } from "./NavBottomDropDown.styled";
import { useState } from "react";

function NavBarBottomDropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  let name = "";

  if (isOpen) {
    name = "See Less";
  } else if (!isOpen) {
    name = "See All";
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBottomDropDownContainer
        className={`${props.isOpen ? "active" : "inactive"}`}
      >
        <div className="sign-in">
          <img src="Profile.svg" />
          <p>Hello, sign in</p>
        </div>
        <div className="drop-down-item-container">
          <div className="container">
            <div className="title">
              <span>Digital Content & Devices</span>
            </div>
            <div className="content">
              <a>
                Prime Video <img src="ArrowRight.svg" />
              </a>
              <a>
                Amazon Music <img src="ArrowRight.svg" />
              </a>
              <a>
                Apps for Android <img src="ArrowRight.svg" />
              </a>
              <a>
                Echo, Alexa & Smart Home <img src="ArrowRight.svg" />
              </a>
              <a>
                Fire TV <img src="ArrowRight.svg" />
              </a>
              <a>
                Fire Tablets <img src="ArrowRight.svg" />
              </a>
              <a>
                Kindle E-readers & Books <img src="ArrowRight.svg" />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="title">
              <span>Shop By Department</span>
            </div>
            <div className="content">
              <a>
                Books <img src="ArrowRight.svg" />
              </a>
              <a>
                Films, TV, Music & Games <img src="ArrowRight.svg" />
              </a>
              <a>
                Electronics & Computers <img src="ArrowRight.svg" />
              </a>
              <a>
                Home, Garden, Pets & DIY <img src="ArrowRight.svg" />
              </a>
              <a className={`accordion ${isOpen ? "active" : "inactive"}`}>
                <span onClick={toggleAccordion}>
                  {name} <img className="arrow-down" src="ArrowRight.svg" />
                </span>
                <ul
                  className={`accordion-menu ${isOpen ? "active" : "inactive"}`}
                >
                  <li>Toys, Children & Baby</li>
                  <li>Clothes, Shoes, Jewellery and Accessories</li>
                  <li>Sports & Outdoors</li>
                  <li>Food & Grocery</li>
                  <li>Health & Beauty</li>
                  <li>Car & Motorbike</li>
                  <li>Business, Industry & Science</li>
                </ul>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="title">
              <span>Programs & Features</span>
            </div>
            <div className="content">
              <a>
                Gift Cards & Top Up <img src="ArrowRight.svg" />
              </a>
              <a>
                Find a Gift <img src="ArrowRight.svg" />
              </a>
              <a>
                Handmade <img src="ArrowRight.svg" />
              </a>
              <a>New Finds</a>
              <a className="accordion">
                <span>
                  See All <img className="arrow-down" src="ArrowRight.svg" />
                </span>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="title">
              <span>Help & Settings</span>
            </div>
            <div className="content">
              <a>Your Account</a>
              <a>Currency Settings</a>
              <a>Customer Service</a>
              <a>Sign In</a>
            </div>
          </div>
        </div>
      </NavBottomDropDownContainer>
    </>
  );
}

export default NavBarBottomDropDown;
