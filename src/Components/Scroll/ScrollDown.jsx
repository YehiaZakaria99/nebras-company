import { ArrowDown } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

export default function ScrollDown({to}) {
  return (
    <>
      {/* Scroll Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-40">
        <Link to={to} smooth={true} duration={0} offset={-50} href="#">
          <div className=" border-2 border-white cursor-pointer rounded-full p-1 mx-auto animate-bounce ">
            <ArrowDown  color="#fff" className="animate-bounce" size={25} />
            {/* <div className="w-1 h-2 bg-white rounded-full" /> */}
          </div>
        </Link>
      </div>
    </>
  );
}
