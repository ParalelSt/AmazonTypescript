import styled from "styled-components";

export const NavbarBottomStyled = styled.nav`
  background-color: #232f3e;
  .navbar-bottom {
    .nav-item-container {
      width: 100%;
      ul {
        display: flex;
        flex-wrap: wrap;

        padding-left: 1em;
        height: 100%;

        .drop-down-menu.active {
          visibility: visible;
        }

        .nav-bottom-item {
          display: flex;
          align-items: center;
          color: white;
          padding: 0.7em 0.6em;
          font-size: 0.9em;
          font-weight: bold;
          z-index: 2;

          &:hover {
            box-shadow: 0 0 0 1px white;
          }
        }

        .hamburger-menu {
          gap: 0.3em;
        }
      }
    }
  }
`;
