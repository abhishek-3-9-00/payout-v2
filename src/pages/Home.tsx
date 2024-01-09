import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/Maincontent";

const Home: React.FC = () => {
  return (
    <div className="h-full flex">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 h-full w-full">
        <MainContent />
      </main>
    </div>
  );
};

export default Home;
