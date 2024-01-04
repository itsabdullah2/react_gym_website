import React from "react";
import { Navbar, Footer, ScrollBtnToTop, DataOfPlanes } from ".";

const MembersShips = () => {
  return (
    <div className="bg-black">
      {/* NAVBAR */}
      <Navbar />
      {/* MEMBERSHIPS SECTION */}
      <div className="pb-[60px] pt-[120px]">
        <h2 className="text-yellow-300 sm:text-[35px] text-[60px] text-center font-bold">
          Our Classes
        </h2>
        <div className="px-[60px] sm:px-[15px]">
          <DataOfPlanes />
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TO TOP BTN */}
      <ScrollBtnToTop />
    </div>
  );
};

export default MembersShips;
