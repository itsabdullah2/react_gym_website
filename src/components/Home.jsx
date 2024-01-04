import "../index.css";
import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from "react-icons/fa";
import { Navbar, CustomLink, ScrollBtnToTop, Footer } from ".";
import { whoWeAreData, proTrainersData, studentsData } from "../data/dummy";
import gallery1 from "../data/gallery-1.jpg";
import gallery2 from "../data/gallery-2.jpg";
import gallery3 from "../data/gallery-3.jpg";
import gallery4 from "../data/gallery-4.jpg";
import gallery5 from "../data/gallery-5.jpg";
import gallery6 from "../data/gallery-6.jpg";
import reception from "../data/reception.jpg";

const socialIconsStyling = "text-[25px] duration-300 hover:text-yellow-300";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div className="relative flex items-center w-full h-screen justify-between bg-home-section bg-cover bg-center">
        <div className="sm:px-[40px] px-[60px] flex items-center justify-between w-full">
          <div className="w-max">
            <h4 className="text-white text-[40px] capitalize font-semibold mb-[10px]">
              Exercising Is A Journey <br />
              <span className="text-yellow-300">Let's</span> Begin
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
      {/* WHO WE ARE SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Who We Are
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 mt-[30px] sm:mt-[80px]">
            {whoWeAreData.map((item, index) => (
              <div key={index} className="text-[#eee] relative mx-auto">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="absolute bottom-[20px] left-[20px]">
                  <h3 className="text-yellow-300 text-1.5 text-[20px] tracking-[1px]">
                    {item.firstName}
                    <br />
                    {item.secondName}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* GALLERY SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Gallery
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="images gap-[15px] sm:mt-[30px] mt-[80px] grid">
            <div className="image-1 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery1}
                alt="gallery-1"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
            <div className="image-2 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery2}
                alt="gallery-2"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
            <div className="image-3 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery3}
                alt="gallery-3"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
            <div className="image-4 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery4}
                alt="gallery-4"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
            <div className="image-5 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery5}
                alt="gallery-5"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
            <div className="image-6 p-[3px] rounded-[6px] bg-yellow-300">
              <img
                src={gallery6}
                alt="gallery-6"
                loading="lazy"
                className="object-cover w-full h-full max-w-full rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* TRAINERS SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Our Professional Trainers
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 sm:mt-[30px] mt-[80px]">
            {proTrainersData.map((item, index) => (
              <div key={index} className="bg-black p-[10px] rounded-[6px]">
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
                  <p className="leading-[1.6] mt-[6px] text-[#eee]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* STUDENTS SECTION */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Our Professional Trainers
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 sm:mt-[30px] mt-[80px]">
            {studentsData.map((item, index) => (
              <div key={index} className="bg-black p-[10px] rounded-[6px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-full rounded-[6px]"
                  loading="lazy"
                />
                <div className="my-[10px] p-[5px]">
                  <h3 className="text-yellow-300 tracking-wider text-[20px]">
                    {item.name}
                  </h3>
                  <p className="leading=[1.6] mt-[6px] text-[#eee] w-[327px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FIRST LESSON */}
      <div className="py-[60px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Take Your First Lesson
        </h2>
        <div className="sm:mt-[30px] mt-[80px] px-[60px] sm:px-[15px]">
          <div className="flex items-center sm:justify-center md:justify-center justify-between w-full">
            <div className="flex flex-col items-center justify-center sm:w-full md:w-full sm:w-auto w-[500px]">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name Here"
                  className="p-[20px] mb-[15px] w-full rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
                />
                <input
                  type="email"
                  placeholder="Your Email Here"
                  className="p-[20px] mb-[15px] w-full rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
                />
                <button
                  type="button"
                  className="w-full p-[20px] bg-yellow-300 text-white rounded-[6px] text-[18px] cursor-pointer border-none tracking-wider duration-300 hover:bg-yellow-400 shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="sm:hidden md:hidden block relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-[6px] before:bg-yellow-300 before:-right-[10px] before:-top-[10px] before:shadow-xl before:-z-[1]">
              <img
                src={reception}
                alt="reception"
                className="w-full max-w-full object-cover rounded-[6px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TO TOP BTN */}
      <ScrollBtnToTop />
    </>
  );
};

export default Home;
