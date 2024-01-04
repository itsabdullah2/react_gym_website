import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { CustomLink } from ".";

const lisStyling =
  "flex items-center tracking-wider px-[20px] py-[10px] text-[#eee]";

const DataOfPlanes = () => {
  return (
    <div className="gap-[30px] grid grid-cols-auto-fill-450 sm:grid-cols-auto-fill-350 sm:mt-[30px] mt-[80px]">
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Gym
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={`border-b border-[#eeeeee80] ${lisStyling}`}>
              <FaDumbbell className="mr-[10px]" />
              Unlimited visit from 7:00 To 22:00
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Gym
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            $100
          </p>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Premium
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Unlimited visit from 7:00 To 22:00
            </li>
            <li className={`${lisStyling} border-b border-[#eeeeee80]`}>
              <FaDumbbell className="mr-[10px]" />
              Freezing for 15 days of the season ticket for 3 months
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Gym
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Group training
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            $150
          </p>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Gym-Day
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={`${lisStyling} border-b border-[#eeeeee80]`}>
              <FaDumbbell className="mr-[10px]" />
              Unlimited visit from 7:00 To 17:30
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Gym
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            $80
          </p>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Premium-Day
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Unlimited visit from 7:00 To 17:00
            </li>
            <li className={`${lisStyling} border-b border-[#eeeeee80]`}>
              <FaDumbbell className="mr-[10px]" />
              Freezing for 15 days of the season ticket for 3 months
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Gym
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Group training
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            $100
          </p>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Fitness
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={`${lisStyling} border-b border-[#eeeeee80]`}>
              <FaDumbbell className="mr-[10px]" />
              Group training
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            <span className="block pb-[10px]">$60 / $75 / $85</span>
            <span className="block text-[14px] font-normal">
              4 Classes / 8 Classes / 12 Classes
            </span>
          </div>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative border border-yellow-300 flex justify-between flex-col">
        <div>
          <ul>
            <li className="flex items-center pt-[20px] px-[20px] text-[#eee]">
              <h3 className="text-yellow-300 tracking-wider mb-[20px] font-bold">
                Student
              </h3>
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Validly period 30 days
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Unlimited visit from 7:00 To 22:00
            </li>
            <li className={`${lisStyling} border-b border-[#eeeeee80]`}>
              <FaDumbbell className="mr-[10px]" />
              Freezing for 15 days of the season ticket for 3 months
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Gym
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Group training
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Sauna and shower room
            </li>
            <li className={lisStyling}>
              <FaDumbbell className="mr-[10px]" />
              Free towel
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[25px] font-bold my-[20px] ml-[20px] text-[#eee]">
            $80
          </p>
          <div className="ml-[20px] mb-[30px]">
            <CustomLink
              to=""
              children="Sign Up"
              className="relative py-[5px] px-[10px] tracking-wider z-[1] text-[#eee] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-full before:w-[10px] before:bg-yellow-300 before:-z-[1] before:duration-300 before:ease-out before:-skew-x-[20deg] before:transform hover:before:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOfPlanes;
