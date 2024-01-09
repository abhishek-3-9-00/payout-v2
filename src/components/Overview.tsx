import React from "react";

const Overview = () => {
  return (
    <div className="pt-[30px]">
      <div className="flex items-center justify-between">
        <div className="text-[#1A181E] text-[25px] font-semibold">
          <h3>Overview</h3>
        </div>
        <div>
          <select className="p-2 border-gray-400 outline-gray-500 rounded-md text-lg">
            <option value="month">Month</option>
            <option value="lastMonth">Last Month</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex rounded-lg flex-col p-4 w-[48%] bg-white shadow-md gap-6">
          <div className="text-black/100 text-[18px]">
            <span>Online orders</span>
          </div>
          <div>
            <span className="text-[#1A181E] text-[34px] font-semibold">
              231
            </span>
          </div>
        </div>
        <div className="flex rounded-lg flex-col p-4 w-[48%] bg-white shadow-md gap-6">
          <div className="text-black/100 text-[18px]">
            <span>Amount Received</span>
          </div>
          <div>
            <span className="text-[#1A181E] text-[34px] font-semibold">
              ₹23,92,312.19
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
