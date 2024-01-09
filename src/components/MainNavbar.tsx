import React from "react";
import { BiSolidMessage } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import { IoCaretDown } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const MainNavbar = () => {
  return (
    <div className="flex w-[100%] justify-between items-center h-[64px]">
      <div className="flex gap-8 items-center justify-center">
        <div className="text-[15px]">Payments</div>
        <div className="text-[12px] text-[#4D4D4D] flex align-center justify-center gap-2">
          <span>
            <CiCircleQuestion size={20} />
          </span>
          <span>How it works</span>
        </div>
      </div>
      <div className="w-[400px] flex rounded-lg bg-[#F2F2F2] h-[40px] items-center">
        <div className=" inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#808080]">
          <AiOutlineSearch size={20} />
        </div>
        <input
          placeholder="Search features, tutorials, etc."
          className="pl-10 pr-4 py-2 w-full bg-[#F2F2F2] rounded-lg  focus:outline-none "
        />
      </div>
      <div>
        <div className="flex gap-3">
          <div className="text-[#4D4D4D] bg-[#F2F2F2] rounded-full flex items-center p-3">
            <BiSolidMessage size={30} />
          </div>
          <div className="text-[#4D4D4D] bg-[#F2F2F2] rounded-full flex items-center p-3">
            <IoCaretDown size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
