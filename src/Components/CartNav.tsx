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
          <Link to="/today-deals">Today&apos;s Deals</Link>
          <Link to="/warehouse-deals">Warehouse Deals</Link>
          <Link to="/outlet">Outlet</Link>
          <Link to="/subscribe-save">Subscribe & Save</Link>
          <Link to="/vouchers">Vouchers</Link>
          <Link to="/prime-video">Prime Video</Link>
          <Link to="/prime-student">Prime Student</Link>
          <Link to="/mobile-apps">Mobile Apps</Link>
          <Link to="/pickup-locations">Amazon Pickup Locations</Link>
        </div>
      </CartNavContainer>
    </>
  );
}

export default CartNav;
