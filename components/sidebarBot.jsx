import React, { useState } from "react";
import { BiLibrary } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Button from "../components/utilis/button";
import Card from "./utilis/card";
import { TbWorld } from "react-icons/tb";
import { useDisclosure } from "@chakra-ui/hooks";
import ModalCustom from "./utilis/modal";


export default function SidebarBot() {

  const [show , setShow]= useState(false);

  const renderData = [
      "legal",
      "Privacy Center",
     "Privacy Policy",
     "Cookies",
      "About Ads",
      "Accessibility",
      "Cookies"
  ];


  return (
   
    <div className="flex flex-col gap-4 items-start bg-custom-gray px-4 rounded-lg py-8 overflow-auto">
      <div className="flex  justify-between items-center w-[100%]">
        <div className="text-lg font-bold flex items-center gap-6 text-neutral-400 cursor-pointer hover:text-neutral-200">
          <span>
            <BiLibrary size={20} />
          </span>
          Your Library
        </div>
        <div className="text-neutral-400 cursor-pointer hover:text-neutral-200">
          <IoMdAdd size={20} />
        </div>
      </div>
      <Card
        heading={"Create your first playlist"}
        description={"It's easy, we'll help you"}
        modalShow = {true}
        buttonText={"Create Todo"}
      />
      <Card
        heading={"Let's find some podcasts to follow"}
        description={"We'll keep you updated on new episodes"}
        buttonText={"Browse Podcasts"}
        buttonShow={true}
      />
      <div className="flex gap-4 flex-wrap">
        {renderData.map((val, index)=>{
         return <div className=" text-neutral-400 text-[12px]  hover:text-neutral-200 cursor-pointer" key={index}>{val}</div>
        })}
      </div>
      <div>
        <Button outerStyle={"w-[100px] px-2"}
          text={"English"}
          icon={TbWorld}
          innerStyle={" text-sm"}/></div>
    </div>
  );
}
