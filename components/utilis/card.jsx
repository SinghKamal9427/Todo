import React from "react";
import Button from "./button";
import ModalCustom from "./modal";

export default function Card({
  heading,
  description,
  buttonShow,
  buttonText,
  onPress,
  modalShow,
}) {
  return (
    <div className="font-bold flex flex-col gap-2 w-[100%] rounded-xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div>{heading}</div>
      <div className="font-normal">{description}</div>
      <div>
        {buttonShow && (
          <Button
            outerStyle={"w-[140px] bg-white px-2"}
            text={buttonText}
            middleStyle={"gap-0"}
            innerStyle={"text-black text-sm"}
            onPress={onPress}
          />
        )}
        {modalShow && <ModalCustom buttonText= {buttonText}/>}
      </div>
    </div>
  );
}
