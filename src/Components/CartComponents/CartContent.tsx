import { CartContentContainer } from "./CartContent.styled";
import { ProductCarousel } from "../ProductsContent/ProductCarousel";
import { Link } from "react-router-dom";

function CartContent() {
  return (
    <>
      <CartContentContainer>
        <div className="container">
          <div className="note-container">
            <div className="left">
              <img src="AmazonCartEmpty.png" />
            </div>
            <div className="right">
              <div className="upper">
                <span>Your Amazon Cart is empty</span>
                <a>Shop today&apos;s deals</a>
              </div>
              <div className="lower">
                <Link to="/sign-in" className="sign-in-button">
                  Sign in to your account
                </Link>
                <Link to="/sign-up" className="sign-up-button">
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
          <div className="empty"></div>
          <p>
            The price and availability of items at Amazon.co.uk are subject to
            change. The shopping basket is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
          <p>
            Do you have a gift card or promotional code? We'll ask you to enter
            your claim code when it's time to pay.
          </p>
        </div>
        <div className="empty-bottom-bar"></div>
        <ProductCarousel></ProductCarousel>
      </CartContentContainer>
    </>
  );
}

export default CartContent;
