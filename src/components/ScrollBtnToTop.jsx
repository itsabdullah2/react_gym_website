import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollBtnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-[35px] h-[35px] fixed right-[25px] bottom-[25px] z-[999]"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <button
        onClick={handleScrollToTop}
        type="button"
        className="bg-yellow-300 hover:bg-yellow-300 duration-300 text-white w-full h-full flex items-center justify-center"
      >
        <FaAngleUp className="text-[25px]" />
      </button>
    </div>
  );
};

export default ScrollBtnToTop;
