import { CartNavContainer } from "./CartNav.styled";
import { Link } from "react-router-dom";

function CartNav() {
  return (
    <>
      <CartNavContainer>
        <div className="nav-container">
          <Link className="home-page" to="/">
            Amazon.co.uk
          </Link>
          <Link to="">Today&apos;s Deals</Link>
          <Link to="">Warehouse Deals</Link>
          <Link to="">Outlet</Link>
          <Link to="">Subscribe & Save</Link>
          <Link to="">Vouchers</Link>
          <Link to="">Prime Video</Link>
          <Link to="">Prime Student</Link>
          <Link to="">Mobile Apps</Link>
          <Link to="">Amazon Pickup Locations</Link>
        </div>
      </CartNavContainer>
    </>
  );
}

export default CartNav;
