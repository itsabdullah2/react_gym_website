import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin
} from "react-icons/fa";
import { Navbar, CustomLink, Footer, ScrollBtnToTop } from ".";
import { whatWeDoData } from "../data/dummy";
import boxing from "../data/boxing.jpg";
import spa from "../data/spa.jpg";
import sauna from "../data/sauna.jpg";

const socialIconsStyling = "text-[25px] duration-300 hover:text-yellow-300";

const Services = () => {
  return (
    <div className="bg-black">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <div className="relative flex items-center w-full h-screen justify-between bg-services-section bg-cover bg-center">
        <div className="absolute top-0 right-0 bg-black opacity-50 w-full h-full" />
        <div className="sm:px-[15px] px-[60px] flex items-center justify-between w-full z-[1]">
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
      {/* WHAT WE DO SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          What We Do
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 sm:mt-[30px] mt-[80px]">
            {whatWeDoData.map((item, index) => (
              <div key={index} className="bg-[#eee] p-[10px] rounded-[6px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-full rounded-[6px] text-[20px]"
                  loading="lazy"
                />
                <div className="my-[10px] p-[5px]">
                  <h3 className="text-yellow-300 tracking-wider text-[20px] font-bold">
                    {item.name}
                  </h3>
                  <p className="leading-[1.6] mt-[6px] text-black">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* OUR CLASSES SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Our Classes
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 sm:mt-[30px] mt-[80px]">
            <div className="relative">
              <img
                src={boxing}
                alt="boxing"
                loading="lazy"
                className="w-full max-w-full object-fit block"
              />
              <div className="absolute left-[20px] bottom-[20px]">
                <p className="text-yellow-300 font-bold text-[18px] mb-[5px]">
                  For New Members
                </p>
                <p className="text-[#eee] mb-[10px] text-[14px]">1 Month</p>
                <p className="text-[#eee] font-bold mb-[10px]">$15</p>
                <CustomLink
                  to=""
                  children="Register Now"
                  className="relative text-center block p-[10px] text-[#eee] z-[1] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:z-[-1] before:w-0 before:bg-yellow-300 before:duration-300 before:-skew-x-[20deg] before:transform hover:before:w-full"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src={sauna}
                alt="sauna"
                loading="lazy"
                className="w-full max-w-full object-fit block"
              />
              <div className="absolute left-[20px] bottom-[20px]">
                <p className="text-yellow-300 font-bold text-[18px] mb-[5px]">
                  For New Members
                </p>
                <p className="text-[#eee] mb-[10px] text-[14px]">3 Months</p>
                <p className="text-[#eee] font-bold mb-[10px]">$55</p>
                <CustomLink
                  to=""
                  children="Register Now"
                  className="relative text-center block p-[10px] text-[#eee] z-[1] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:z-[-1] before:w-0 before:bg-yellow-300 before:duration-300 before:-skew-x-[20deg] before:transform hover:before:w-full"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src={spa}
                alt="spa"
                loading="lazy"
                className="w-full max-w-full object-fit block"
              />
              <div className="absolute left-[20px] bottom-[20px]">
                <p className="text-yellow-300 font-bold text-[18px] mb-[5px]">
                  For New Members
                </p>
                <p className="text-[#eee] mb-[10px] text-[14px]">3 Months</p>
                <p className="text-[#eee] font-bold mb-[10px]">$50</p>
                <CustomLink
                  to=""
                  children="Register Now"
                  className="relative text-center block p-[10px] text-[#eee] z-[1] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:z-[-1] before:w-0 before:bg-yellow-300 before:duration-300 before:-skew-x-[20deg] before:transform hover:before:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TO TOP BTN */}
      <ScrollBtnToTop />
    </div>
  );
};

export default Services;
