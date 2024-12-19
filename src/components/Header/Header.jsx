import React from "react";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FaTag } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";

export default function Header({ selectedHeader, setSelectedHeader }) {
  const handleClick = (i) => {
    setSelectedHeader(i);
  };

  const buttonClass = (index) =>
    index === selectedHeader
      ? "bg-[color:--sidebar-icon-color] text-[--header-text-color]"
      : "text-gray-600 hover:bg-[color:--sidebar-icon-color] hover:text-[--header-text-color]";

  return (
    <div className="flex space-x-4 p-6 mb-12 border-b border-b-[--header-border-color] fixed bg-white w-full z-10">
      <button
        onClick={() => handleClick(0)}
        className={`rounded-3xl px-4 py-2 flex items-center text-lg ${buttonClass(
          0
        )}`}
      >
        <span className="mr-3">
          <PiChartPieSliceFill size={20} />
        </span>
        Summary
      </button>
      <button
        onClick={() => handleClick(1)}
        className={`rounded-3xl px-4 py-2 flex items-center text-lg ${buttonClass(
          1
        )}`}
      >
        <span className="mr-3">
          <FaTag size={20} />
        </span>
        Sales
      </button>
      <button
        onClick={() => handleClick(2)}
        className={`rounded-3xl px-4 py-2 flex items-center text-lg ${buttonClass(
          2
        )}`}
      >
        <span className="mr-3">
          <BsChatTextFill size={20} />
        </span>
        Chats
      </button>
    </div>
  );
}
