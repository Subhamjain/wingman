import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { PiChatTeardropFill } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import Logo from "../../assets/logo.svg";

const navList = [
  {
    icon: <AiFillHome size={25} />,
    url: "#",
  },
  {
    icon: <PiChatTeardropFill size={25} />,
    url: "#",
  },
  {
    icon: <HiMiniUserGroup size={25} />,
    url: "#",
  },
];

export const Sidebar = ({ selectedItemIndex, setSelectedItemIndex }) => {
  return (
    <aside className="bg-sidebar-bg-color shadow-md fixed top-0 left-0 h-full overflow-hidden">
      <div className="m-6 pb-6 border-b border-b-[--sidebar-border-color]">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="mt-6">
        <ul className="flex flex-col items-center">
          {navList.map((item, index) => (
            <li className="mb-6" key={index}>
              <div
                onClick={() => setSelectedItemIndex(index)}
                className={`p-2 rounded ${
                  selectedItemIndex === index
                    ? "bg-white text-[color:--sidebar-bg-color]"
                    : "text-[color:--sidebar-icon-color] hover:bg-white hover:text-[color:--sidebar-bg-color]"
                }`}
              >
                {item.icon}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
