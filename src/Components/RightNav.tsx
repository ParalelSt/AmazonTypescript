import { FaCaretDown } from "react-icons/fa6";
import Flag from "react-flagkit";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Fa0 } from "react-icons/fa6";
import { DropDown } from "./DropDown";
import CountryDropDown from "./CountryDropDown";
import { useNavigate } from "react-router-dom";

function RightNav() {
  const navigate = useNavigate();

  const toItemCart = () => {
    navigate("/item-cart");
  };

  return (
    <div className="right-nav">
      <div className="region nav-item">
        <div className="country-flag">
          <Flag country="GB" size={23} />
        </div>
        <div className="icon">
          <FaCaretDown className="caret-down"></FaCaretDown>
        </div>
        <CountryDropDown className="country-dropdown"></CountryDropDown>
      </div>
      <div className={`account nav-item `}>
        <div className="message">
          <span>Hello, sign in</span>
        </div>
        <div className="account-and-lists">
          <span className="message-bottom">Account & Lists</span>
          <div className="icon">
            <FaCaretDown className="caret-down"></FaCaretDown>
          </div>
        </div>
        <DropDown>
          <div className={`container`}>
            <div className="triangle"></div>
            <div className="upper">
              <button>Sign in</button>
              <span>
                New customer? <a href="#">Start here.</a>
              </span>
            </div>
            <div className="lower">
              <div className="left">
                <div className="nav-title">Your lists</div>
                <ul className="item-container">
                  <span>Find a Gift</span>
                  <span>Create a List</span>
                  <span>Wedding List</span>
                  <span>Baby Wishlist</span>
                  <span>Discover Your Style</span>
                  <span>Explore Showroom</span>
                </ul>
              </div>
              <div className="right">
                <div className="nav-title">Your account</div>
                <div className="item-container">
                  <span>Your account</span>
                  <span>Your Order</span>
                  <span>Your Lists</span>
                  <span>Your Recommendations</span>
                  <span>Your Subscribe & Save Items</span>
                  <span>Your Pets</span>
                  <span>Membership & Subscriptions</span>
                  <span>Register for a free business account</span>
                  <span>Manage Your Content and Devices</span>
                  <span>You Kindle Unlimited</span>
                  <span>Your Music Subscriptions</span>
                  <span>Your Music</span>
                  <span>Your Amazon Drive</span>
                  <span>Your Prime Video</span>
                  <span>Your Watchlist</span>
                  <span>Your Video Purchases & Rentals</span>
                  <span>Your Games and Software Library</span>
                  <span>Your Apps & Devices</span>
                </div>
              </div>
            </div>
          </div>
        </DropDown>
      </div>
      <div className="returns-and-orders nav-item">
        <span className="message">Returns</span>
        <span className="message-bottom">& Orders</span>
      </div>
      <div className="basket nav-item" onClick={toItemCart}>
        <div className="cart-container">
          <span className="cart-icon">
            <PiShoppingCartSimpleLight className="fa-icon shopping-cart" />
          </span>
          <span className="item-count" id="cartItemCount">
            <Fa0 className="fa-count-icon"></Fa0>
          </span>
        </div>
        <div className="basket-title">
          <span>Basket</span>
        </div>
      </div>
    </div>
  );
}

export default RightNav;
