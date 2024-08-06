import { FaCaretDown } from "react-icons/fa6";
import SearchDropdown from "./SearchDropdown";

function MiddleNav() {
  return (
    <div className="middle-nav">
      <div className="search-box">
        <div className="filters">
          <span id="navSearch">All</span>
          <div className="icon">
            <FaCaretDown className="caret-down"></FaCaretDown>
          </div>
          <SearchDropdown></SearchDropdown>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Search Amazon.co.uk" />
        </div>
        <div className="search-submit-button">
          <button>
            <img src="Magnifying-glass.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
