import { useEffect, useState, useRef } from "react";

function LeftNavDropDown() {
  const dismissButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const dropDownMenu = document.querySelector(
      ".drop-down-container"
    ) as HTMLElement;
    if (dropDownMenu) {
      dropDownMenu.style.display = "flex";
    }

    const changeDisplay = () => {
      setIsOpen(!isOpen);
    };

    const button = dismissButtonRef.current;
    if (button) {
      button.addEventListener("click", changeDisplay);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", changeDisplay);
      }
    };
  }, [isOpen]);

  return (
    <>
      <div className={`drop-down-container ${isOpen ? "" : "isClosed"}`}>
        <div className="arrow"></div>
        <div className="upper">
          <span>
            We&apos;re showing you items that dispatch to{""}
            <span className="country"> Croatia</span>. To see items that
            dispatch to a different country, change your delivery address.
          </span>
        </div>
        <div className="lower">
          <button ref={dismissButtonRef} className="dismiss-button">
            Dismiss
          </button>
          <div className="change-address-button">Change Address</div>
        </div>
      </div>
    </>
  );
}

export default LeftNavDropDown;
