import React from "react";
import { Navbar, Footer, ScrollBtnToTop, CustomLink } from ".";

const Login = () => {
  return (
    <div className="bg-black">
      {/* NAVBAR */}
      <Navbar />
      {/* LOGIN FORM SECTION */}
      <div className="pb-[60px] pt-[120px]">
        <div className="px-[60px] sm:px-[15px]">
          <div className="sm:w-full w-6/12 bg-white rounded-[10px] p-[20px] mx-auto">
            <h2 className="text-center mb-[20px]">
              <CustomLink
                to="/"
                children="G."
                className="text-yellow-300 font-bold text-[50px]"
              />
            </h2>
            <div className="text-center mb-[50px]">
              <h3 className="text-center font-bold text-yellow-300 tracking-wider text-[25px] mb-[10px]">
                Hello Again!
              </h3>
              <p className="text-[#ccc] leading-[1.6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                voluptatibus? Sapiente facilis dolorem
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center flex-col"
            >
              <div className="w-full flex items-center justify-center flex-col">
                <label
                  htmlFor="email"
                  className="mb-[15px] self-start text-yellow-300 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full flex items-center justify-center flex-col">
                <label
                  htmlFor="password"
                  className="mb-[15px] self-start text-yellow-300 font-medium"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full mb-[15px] p-[20px] rounded-[6px] border border-[#eee] focus:outline-none placeholder:duration-300 focus:placeholder:opacity-0"
                  placeholder="Password"
                />
              </div>
              <span className="text-right w-full mb-[15px]">
                <CustomLink
                  to=""
                  children="Forgot Password"
                  className="underline"
                />
              </span>
              <button
                type="button"
                className="w-full p-[20px] bg-yellow-300 text-white rounded-[6px] text-[18px] cursor-pointer border-none tracking-wider duration-300 hover:bg-yellow-400 shadow-xl"
              >
                Submit
              </button>
            </form>
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

export default Login;
