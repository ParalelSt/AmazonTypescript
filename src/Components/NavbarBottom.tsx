import { FaBars } from "react-icons/fa6";
import NavBarBottomDropDown from "./NavBarBottomDropDown";
import { useEffect, useRef, useState } from "react";

function NavbarBottom() {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const openDropDown = () => {
    setIsOpen(true);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        closeDropDown();
      }
    });
  });

  return (
    <div className="navbar-bottom">
      <div className="nav-item-container">
        <ul>
          <li className="nav-bottom-item hamburger-menu" onClick={openDropDown}>
            <FaBars size={18}></FaBars>
            <span>All</span>
          </li>
          <div ref={dropDownRef} className="drop-down-menu">
            <NavBarBottomDropDown isOpen={isOpen}></NavBarBottomDropDown>
          </div>
          <li className="nav-bottom-item">
            <span>Best Sellers</span>
          </li>
          <li className="nav-bottom-item">
            <span>New Releases</span>
          </li>
          <li className="nav-bottom-item">
            <span>Today&apos;s Deals</span>
          </li>
          <li className="nav-bottom-item">
            <span>Books</span>
          </li>
          <li className="nav-bottom-item">
            <span>Gift Card & Top Up</span>
          </li>
          <li className="nav-bottom-item">
            <span>Home & Garden</span>
          </li>
          <li className="nav-bottom-item">
            <span>Electronics</span>
          </li>
          <li className="nav-bottom-item">
            <span>Fashion</span>
          </li>
          <li className="nav-bottom-item">
            <span>Toys & Games</span>
          </li>
          <li className="nav-bottom-item">
            <span>Beauty</span>
          </li>
          <li className="nav-bottom-item">
            <span>Pet Supplies</span>
          </li>
          <li className="nav-bottom-item">
            <span>PC & Video Games</span>
          </li>
          <li className="nav-bottom-item">
            <span>PC</span>
          </li>
          <li className="nav-bottom-item">
            <span>Health & Personal Care</span>
          </li>
          <li className="nav-bottom-item">
            <span>Baby</span>
          </li>
          <li className="nav-bottom-item">
            <span>Car & Motorbike</span>
          </li>
          <li className="nav-bottom-item">
            <span>Shopper Toolkit</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarBottom;
