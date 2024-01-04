import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin
} from "react-icons/fa";
import { footerData } from "../data/dummy";
import { CustomLink } from ".";

const socialIconsStyling = "text-[25px] duration-300 hover:text-yellow-300";

const Footer = () => {
  return (
    <div className="pt-[60px] bg-black">
      <div className="grid gap-[30px] grid-cols-auto-fill-400 my-[30px] sm:my-[15px] px-[60px] sm:px-[15px]">
        <div>
          <div className="text-yellow-300 text-[35px] font-semibold flex items-center justify-between sm:w-full mb-[30px]">
            <CustomLink to="/" children="G." />
          </div>
          <div className="text-white flex gap-[20px]">
            <CustomLink to="" className={socialIconsStyling}>
              <FaFacebookSquare />
            </CustomLink>
            <CustomLink to="" className={socialIconsStyling}>
              <FaInstagramSquare />
            </CustomLink>
            <CustomLink to="" className={socialIconsStyling}>
              <FaTwitterSquare />
            </CustomLink>
            <CustomLink to="" className={socialIconsStyling}>
              <FaLinkedin />
            </CustomLink>
          </div>
        </div>
        <div>
          <h2 className="text-white mb-[15px] tracking-wider text-yellow-300">
            Services
          </h2>
          <ul>
            {footerData.services.map((item, index) => (
              <li
                key={index}
                className={`py-[10px] hover:pl-[5px] duration-300 ${
                  index === footerData.services.length - 1
                    ? ""
                    : "border-b border-yellow-300"
                }`}
              >
                <CustomLink className="text-white flex items-center hover:text-yellow-300 duration-300">
                  {item.icon}
                  {item.link}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white mb-[15px] tracking-wider text-yellow-300">
            Support
          </h2>
          <ul>
            {footerData.support.map((item, index) => (
              <li
                key={index}
                className={`py-[10px] hover:pl-[5px] duration-300 ${
                  index === footerData.support.length - 1
                    ? ""
                    : "border-b border-yellow-300"
                }`}
              >
                <CustomLink className="text-white flex items-center hover:text-yellow-300 duration-300">
                  {item.icon}
                  {item.link}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>

        {footerData.address.map((item, index) => (
          <div key={index}>
            <div className="flex items-center mb-[30px]">
              {item.icon}
              <p className="text-white tracking-wider">{item.title}</p>
            </div>
            <div className="flex items-center mb-[30px]">
              {item.hourIcon}
              <p className="text-white tracking-wider">{item.workHrs}</p>
            </div>
            <div className="flex items-center mb-[30px]">
              {item.phoneIcon}
              <div className="text-white tracking-wider flex flex-col">
                <span>{item.num1}</span>
                <span>{item.num2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="py-[25px] text-center text-[#eee] border-t border-yellow-300 mt-[50px]">
        Made With <span className="text-yellow-300">♥</span> By Abdullah Osman
      </p>
    </div>
  );
};

export default Footer;
