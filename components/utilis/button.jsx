import React from "react";

export default function Button({ icon: Icon, text, outerStyle, innerStyle ,middleStyle , onPress ,type}) {





  return (
    <button
      className={`rounded-[40px] border-2 px-12 py-2 text-base font-medium  transition duration-200  ${outerStyle}`}
      onClick={onPress}
      type={type}
    >
      <div className={`flex justify-items-center text-center items-center  ${middleStyle} `}>
        {Icon && (
          <span>
            <Icon size={24} />
          </span>
        )}
        <span className={`text-center w-[100%] ${innerStyle}`}>{text}</span>
      </div>
    </button>
  );
}
