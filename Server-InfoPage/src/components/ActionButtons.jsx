import React from "react";
import { Star } from "lucide-react";

function ActionButtons({ actions = ["Join","Spececate","Join as commandar"], favorites = 8065 }) {
  return (
    <div className="flex gap-2 z-50 my-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="hover:bg-white hover:text-gray-900 w-[14vw] py-2 border border-gray-500 bg-opacity-20 text-[1.6vh] text-white "
        >
          {action.toUpperCase()}
        </button>
      ))}
      <div className="px-6 py-2 border  hover:text-gray-900 hover:bg-white border-gray-500 bg-opacity-20 text-[1.6vh] flex items-center gap-2 text-white">
        <Star className="w-4 h-4" />
        <span className=" font-semibold">{favorites}</span>
      </div>
    </div>
  );
}

export default ActionButtons;
