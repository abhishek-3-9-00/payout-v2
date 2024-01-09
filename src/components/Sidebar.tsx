import React from "react";
import { GoHome } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { IoGridOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiNavigationLine } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { LuWallet2 } from "react-icons/lu";
import Image from "../assets/Image.png";

const Sidebar: React.FC = () => {
  return (
    <div className="spaxce-y-4 py-4 flex flex-col h-full bg-[#1E2640] text-white justify-between">
      <div className="px-3 py-2 flex-1">
        <div className="flex justify-between items-center mb-3 p-4">
          <div className="flex gap-5">
            <div className="flex items-center">
              <div className="rounded-lg h-full">
                <img
                  alt="exp"
                  src={Image}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-1 text-2xl font-medium">Nishyan</div>
              <div>
                <a
                  href="/"
                  className="text-gray-300 border-b border-transparent border-gray-300 hover:text-gray-500"
                >
                  Visit store
                </a>
              </div>
            </div>
          </div>
          <div>
            <FaAngleDown size={30} />
          </div>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <GoHome size={25} />
            Home
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <BiNotepad size={25} />
            Orders
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <IoGridOutline size={25} />
            Products
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <CiDeliveryTruck size={25} />
            Delivery
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <HiOutlineSpeakerWave size={25} />
            Marketing
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <TbBrandGoogleAnalytics size={25} />
            Analystics
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white bg-gray-700 rounded-lg transition gap-4">
            <MdPayments size={25} />
            Payments
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <RiNavigationLine size={25} />
            Tools
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <CiDiscount1 size={25} />
            Discounts
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <MdOutlinePeople size={25} />
            Audience
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-lg group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <MdOutlineDraw size={25} />
            Appearance
          </button>
        </div>
        <div className="space-y-2">
          <button className="text-xl group p-3 flex items-center w-full font-medium cursor-pointer hover:text-white hover:bg-gray-700 rounded-lg transition gap-4">
            <HiOutlineLightningBolt size={30} />
            Plugins
          </button>
        </div>
      </div>

      <div className="text-xl group p-5 flex items-center w-[95%] font-medium cursor-pointer hover:text-white bg-[#353C53] rounded-lg transition gap-4 h-[65px]">
        <div className="bg-[#353C50] p-2">
          <LuWallet2 size={35} />
        </div>
        <div>
          <div>Available Credits</div>
          <div>222.10</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
