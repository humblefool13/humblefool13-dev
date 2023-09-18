import { useEffect } from "react";

const BottomButton = () => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    const buttonElement = document.querySelector("#iphone-bottom-button");
    const buttonWidth = buttonElement.clientWidth;
    document.querySelectorAll(".iphone-bottom-button").forEach((el) => {
      el.style.height = buttonWidth + "px";
    });
    document.querySelector("#iphone-bottom-button-square").style.height =
      buttonWidth * 0.3 + "px";
  }

  return (
    <div className="iphone-bottom-button" id="iphone-bottom-button">
      <div
        className="iphone-bottom-button-square"
        id="iphone-bottom-button-square"
      ></div>
    </div>
  );
};

export default BottomButton;
