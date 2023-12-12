import React, { useState } from "react";
import Button from "./button";
import ModalEditCustom from "./modalEdit";
import ModalDeleteCustom from "./modalDelete";

export default function CardTodo({ keys, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="font-bold flex flex-col group/item  gap-2 w-[14rem] h-[14rem] rounded-xl bg-white  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 cursor-pointer ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-black hover:bg-opacity-10"
      key={keys}
    >
      <div className="text-center flex flex-col gap-2 h-[70%]">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm font-thin">{description}</div>
      </div>

      <div className="group/edit w-[100%] h-[100%] invisible flex items-center justify-center gap-2 rounded-full transition-all duration-300 group-hover/item:visible" >
        <ModalEditCustom
          buttonText={"Edit"}
          id={keys}
          title={title}
          desc={description}
        />
        <ModalDeleteCustom buttonText={"Delete"} id={keys} />
      </div>
    </div>
  );
}
