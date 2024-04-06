import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 w-full z-[99] bg-[#0f0e13]">
      <hr className="footer-rule m-auto bg-gray-700 w-[95%]"></hr>
      <div className="footer-text text-center text-[15px] font-Oswald py-[10px]">
        Copyright © 2021-2024 humblefool13<br></br>All Rights Reserved
      </div>
    </div>
  );
};

export default BottomBar;
