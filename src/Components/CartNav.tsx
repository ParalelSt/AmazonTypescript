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
          <Link to="/portfolio/today-deals">Today&apos;s Deals</Link>
          <Link to="/portfolio/warehouse-deals">Warehouse Deals</Link>
          <Link to="/portfolio/outlet">Outlet</Link>
          <Link to="/portfolio/subscribe-save">Subscribe & Save</Link>
          <Link to="/portfolio/vouchers">Vouchers</Link>
          <Link to="/portfolio/prime-video">Prime Video</Link>
          <Link to="/portfolio/prime-student">Prime Student</Link>
          <Link to="/portfolio/mobile-apps">Mobile Apps</Link>
          <Link to="/portfolio/pickup-locations">Amazon Pickup Locations</Link>
        </div>
      </CartNavContainer>
    </>
  );
}

export default CartNav;
