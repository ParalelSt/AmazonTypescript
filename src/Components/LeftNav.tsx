import { FaLocationDot } from "react-icons/fa6";
import LeftNavDropDown from "./LeftNavDropDown";
import { useNavigate } from "react-router-dom";

function LeftNav() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="left-nav">
        <div className="logo nav-item" onClick={toHome}>
          <img src="Logo.svg" alt="" />
        </div>
        <div className="delivery-country nav-item">
          <div className="left">
            <div className="icon">
              <FaLocationDot className="fa-icon"></FaLocationDot>
            </div>
          </div>
          <div className="right">
            <span className="message">Deliver to</span>
            <span className="message-bottom">Croatia</span>
          </div>
        </div>
        <LeftNavDropDown></LeftNavDropDown>
      </div>
    </>
  );
}

export default LeftNav;
