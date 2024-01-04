import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { CustomLink } from ".";

const activeLi =
  "cursor-pointer duration-300 text-center text-center text-yellow-300";
const nonActiveLi =
  "cursor-pointer duration-300 text-center text-center text-white hover:text-yellow-300";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav>
      <div
        className=" flex items-center justify-between sm:px-[15px] px-[60px] py-[10px] bg-half-transparent fixed top-0 right-0 w-full"
        style={{ zIndex: 1000 }}
      >
        <div className="text-yellow-300 text-[35px] font-semibold flex items-center justify-between sm:w-full ">
          <CustomLink to="/" children="G." />
          <div onClick={handleActiveMenu} className="sm:block hidden">
            {activeMenu ? (
              <MdOutlineClose className="cursor-pointer hover:text-yellow-300 text-white duration-300 text-xl" />
            ) : (
              <FaBars className="cursor-pointer hover:text-yellow-300 text-white duration-300 text-xl" />
            )}
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <ul className=" items-center gap-[15px] sm:hidden flex">
          <li
            className={isActive === "/" ? activeLi : nonActiveLi}
            onClick={() => setIsActive("/")}
          >
            <CustomLink to="/" children="Home" />
          </li>
          <li
            className={isActive === "/about" ? activeLi : nonActiveLi}
            onClick={() => setIsActive("/about")}
          >
            <CustomLink to="/about" children="About" />
          </li>
          <li
            className={isActive === "/services" ? activeLi : nonActiveLi}
            onClick={() => setIsActive("/services")}
          >
            <CustomLink to="/services" children="Services" />
          </li>
          <li
            className={isActive === "/memberships" ? activeLi : nonActiveLi}
            onClick={() => setIsActive("/memberships")}
          >
            <CustomLink to="/memberships" children="MembersShips" />
          </li>
          <li
            className={isActive === "/contact" ? activeLi : nonActiveLi}
            onClick={() => setIsActive("/contact")}
          >
            <CustomLink to="/contact" children="Contact Us" />
          </li>
        </ul>
        <ul className=" items-center gap-[15px] sm:hidden flex">
          <li className="bg-white rounded-[4px] py-[5px] px-[10px] text-yellow-300 hover:bg-yellow-300 hover:text-white duration-300">
            <CustomLink to="/login" children="Login" />
          </li>
          <li className="bg-yellow-300 rounded-[4px] py-[5px] px-[10px] text-white hover:bg-white hover:text-yellow-300 duration-300">
            <CustomLink to="/register" children="Register" />
          </li>
        </ul>
        {/* MENU OF MOBILE */}
        {activeMenu && (
          <ul className="md:hidden gap-8 text-xl font-500 flex flex-col items-center justify-center h-screen w-[430px] duration-300 fixed top-[73px] right-0 bg-half-transparent p-[40px] z-[1000]">
            <li
              className={isActive === "/" ? activeLi : nonActiveLi}
              onClick={() => setIsActive("/")}
            >
              <CustomLink to="/" children="Home" />
            </li>
            <li
              className={isActive === "/about" ? activeLi : nonActiveLi}
              onClick={() => setIsActive("/about")}
            >
              <CustomLink to="/about" children="About" />
            </li>
            <li
              className={isActive === "/services" ? activeLi : nonActiveLi}
              onClick={() => setIsActive("/services")}
            >
              <CustomLink to="/services" children="Services" />
            </li>
            <li
              className={isActive === "/memberships" ? activeLi : nonActiveLi}
              onClick={() => setIsActive("/memberships")}
            >
              <CustomLink to="/memberships" children="MembersShips" />
            </li>
            <li
              className={`${isActive === "/contact" ? activeLi : nonActiveLi}`}
              onClick={() => setIsActive("/contact")}
            >
              <CustomLink to="/contact" children="Contact Us" />
            </li>
            <li className="w-full text-center bg-white rounded-[4px] py-[5px] px-[10px] text-yellow-300 hover:bg-yellow-300 hover:text-white duration-300">
              <CustomLink to="/login" children="Login" />
            </li>
            <li className="w-full text-center bg-yellow-300 rounded-[4px] py-[5px] px-[10px] text-white hover:bg-white hover:text-yellow-300 duration-300">
              <CustomLink to="/register" children="Register" />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
