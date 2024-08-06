import { Nav } from "./Navbar.styled";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import MiddleNav from "./MiddleNav";
import NavbarBottom from "./NavbarBottom";
import { NavbarBottomStyled } from "./NavbarBottom.styled";

function Navbar() {
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
