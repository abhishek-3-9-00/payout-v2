import React from "react";
import MainNavbar from "./MainNavbar";
import Overview from "./Overview";
import Listview from "../common/Listview";

const MainContent: React.FC = () => {
  return (
    <div className="ml-224 w-1216 p-[30px]">
      <MainNavbar />
      <Overview />
      <div className="mt-[32px]">
        <header>
          <h3 className="text-[#1A181E] text-[22px] font-[500]">
            Transactions | This Month
          </h3>
        </header>
        <Listview />
      </div>
    </div>
  );
};

export default MainContent;
