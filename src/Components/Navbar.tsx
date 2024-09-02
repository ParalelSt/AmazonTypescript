import { Nav } from "./Navbar.styled";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import MiddleNav from "./MiddleNav";
import NavbarBottom from "./NavbarBottom";
import { NavbarBottomStyled } from "./NavbarBottom.styled";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  if (pathname === "/sign-in" || pathname === "/sign-up") return null;

  return (
    <>
      <Nav>
        <LeftNav></LeftNav>
        <MiddleNav></MiddleNav>
        <RightNav></RightNav>
      </Nav>
      <NavbarBottomStyled>
        <NavbarBottom></NavbarBottom>
      </NavbarBottomStyled>
    </>
  );
}

export default Navbar;
