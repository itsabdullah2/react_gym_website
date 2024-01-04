import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare
} from "react-icons/fa";
import { Navbar, CustomLink, ScrollBtnToTop, Footer } from ".";
import { aboutData } from "../data/dummy";

const socialIconsStyling = "text-[25px] duration-300 hover:text-yellow-300";

const About = () => {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div className="relative flex items-center w-full h-screen justify-between bg-about-section bg-cover bg-center">
        <div className="sm:px-[40px] px-[60px] flex items-center justify-between w-full">
          <div className="w-max">
            <h4 className="text-white text-[40px] capitalize font-semibold mb-[10px]">
              <span className="text-yellow-300">"</span> Exercising Is A Journey{" "}
              <br />
              Goal With Us <span className="text-yellow-300">"</span>
            </h4>
            <p className="text-white text-[20px] mt-[10px] mb-[20px] leading-[1.5] tracking-wider">
              “Once you are exercising regularly, <br />
              the hardest thing is{" "}
              <span className="text-yellow-300">to stop it.</span>”
            </p>
            <div className="flex items-center gap-[30px]">
              <CustomLink
                to=""
                className="text-white relative z-[1] font-bold py-[10px] text-[18px] px-[20px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:z-[-1] before:w-0 before:bg-yellow-300 before:duration-300 before:-skew-x-[20deg] before:transform hover:before:w-full"
              >
                Join Now
              </CustomLink>
              <CustomLink
                to=""
                className="text-yellow-300 relative z-[1] font-bold py-[10px] text-[18px] px-[20px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:z-[-1] before:w-0 before:bg-white before:duration-300 before:-skew-x-[20deg] before:transform hover:before:w-full"
              >
                Learn More
              </CustomLink>
            </div>
          </div>
          <div className="text-white flex flex-col gap-[20px]">
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
      </div>
      {/* ABOUT SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          About Us
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="grid sm:grid-cols-none md:grid-cols-none grid-cols-3fr gap-[30px] mt-[80px]"
            >
              <div className="sm:hidden md:hidden block relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-[6px] before:bg-yellow-300 before:-left-[10px] before:-top-[10px] before:shadow-xl before:-z-[1]">
                <img
                  src={item.image}
                  alt={item.header}
                  className="w-full max-w-full object-cover rounded-[6px]"
                  loading="lazy"
                />
              </div>
              <div className="">
                {/* <h4 className="mb-[20px] text-yellow-300 tracking-wider text-[30px] font-bold">
                  {item.header}
                </h4> */}
                <p className="leading-[1.6] ms:w-full md:w-full">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* JOIN US SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Join Us
        </h2>
        <div className="px-[60px] sm:px-[15px] mt-[80px]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center flex-col"
          >
            <input
              type="text"
              className="sm:w-full w-6/12 mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
              placeholder="Your Name Here"
            />
            <input
              type="text"
              className="sm:w-full w-6/12 mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
              placeholder="Your Number Here"
            />
            <input
              type="text"
              className="sm:w-full w-6/12 mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
              placeholder="Your Email Here"
            />
            <button
              type="button"
              className="sm:w-full w-6/12 p-[20px] bg-yellow-300 text-white rounded-[6px] text-[18px] cursor-pointer border-none tracking-wider duration-300 hover:bg-yellow-400 shadow-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TO TOP BTN */}
      <ScrollBtnToTop />
    </>
  );
};

export default About;
