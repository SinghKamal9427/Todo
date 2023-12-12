import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function SidebarTop() {
  return (
    <div className="flex flex-col gap-4 items-start bg-custom-gray px-4 rounded-lg py-8">
      <div className="text-lg font-bold flex items-center gap-6 cursor-pointer">
        <span>
          <FaHome size={20} />
        </span>
        Home
      </div>
      <div className="text-lg font-bold flex items-center gap-6 text-neutral-400 cursor-pointer hover:text-neutral-200">
        <span>
          <FaSearch size={20} />
        </span>
        Search
      </div>
    </div>
  );
}
