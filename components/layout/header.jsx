import React from "react";
import Button from "../utilis/button";
import { useRouter } from "next/router";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";


export default function Header() {

    const router  = useRouter();

const handleRemoveKey = () => {
    localStorage.removeItem("token");
}

  return (
    <div className="w-[100%]">
      <div className=" flex justify-between items-center">
        <div className="flex gap-2 cursor-not-allowed">
        <IoIosArrowDropleftCircle size={24}/>
        <IoIosArrowDroprightCircle  size={24}/>
        </div>
        <div>
          <Button
            outerStyle={"w-[140px] hover:bg-white hover:text-black px-2"}
            text={"Logout"}
            middleStyle={"gap-0"}
            innerStyle={"text-White  text-sm"}
            onPress={handleRemoveKey}
          />
        </div>
      </div>
    </div>
  );
}
