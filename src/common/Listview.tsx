import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { orders } from "../data";

const Listview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handleClearInput = () => {
    setSearchTerm("");
  };

  return (
    <div className="mt-[25px] rounded-lg shadow-md h-full w-full">
      <div className="flex justify-between">
        <div>
          <div className="w-[248px] flex rounded-lg h-[45px] items-center border border-gray-300">
            <div className=" inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-600">
              <AiOutlineSearch size={20} />
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:outline-none rounded-lg px-3 py-2 pr-10 w-full"
                placeholder="Search by order ID..."
              />
              {searchTerm && (
                <button
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={handleClearInput}
                >
                  <AiOutlineCloseCircle size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="border border-gray-300 rounded-lg flex justify-between items-center text-black/80 p-3 text-[18px]">
            <span>Sort</span>
            <span>
              <BiSortAlt2 />
            </span>
          </button>
          <button className="border border-gray-300 rounded-lg flex justify-between items-center text-black/80 p-3 text-[18px]">
            <span>
              <FiDownload />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-[10px] overflow-y-auto max-h-[470px]">
        <table className="min-w-full text-[18px]">
          <thead className="bg-black/5 text-black/65 font-light">
            <tr className="border-b">
              <th className="text-left py-2 font-normal px-2">Order ID</th>
              <th className="text-left py-2 font-normal">Order date</th>
              <th className="text-right py-2 font-normal">Order amount</th>
              <th className="text-right py-2 font-normal px-2">
                Transaction fee
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr className="border-b" key={order.id}>
                <td className="py-2 text-[#146EB4] px-2">{order.id}</td>
                <td className="py-2">{order.date}</td>
                <td className="text-right py-2">{order.amount}</td>
                <td className="text-right py-2 px-2">{order.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 rounded-lg border "
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 rounded-lg border ${
              currentPage === index + 1 ? "bg-[#146EB4]" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 rounded-lg border "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Listview;
