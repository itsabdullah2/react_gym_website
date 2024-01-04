import React from "react";
import { Navbar, Footer, ScrollBtnToTop } from ".";

const Contact = () => {
  return (
    <div className="bg-black">
      {/* NAVBAR */}
      <Navbar />
      {/* CONTACT FORM SECTION */}
      <div className="pb-[60px] pt-[120px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Contact Us
        </h2>
        <div className="px-[60px] sm:px-[15px] sm:mt-[30px] mt-[80px]">
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
              placeholder="Your Email Here"
            />
            <textarea
              className="sm:w-full w-6/12 resize-none h-[180px] mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
              placeholder="Your Message"
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
    </div>
  );
};

export default Contact;
