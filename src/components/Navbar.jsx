import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "@remixicon/react";

function Navbar(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[12vh] bg-blue-50 flex justify-around fixed item-center">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="w-[12%] h-full overflow-hidden"
        >
          <img
            className="w-full h-[100%] cursor-pointer
             object-cover "
            src="/Scart.png"
            alt=""
          />
        </div>
        <div className="w-[20%] h-[100%] flex flex-col items-center justify-center">
          <h1 className="font-bold text-[20px] cursor-pointer">
            Delivery in 12 minutes
          </h1>
          <h2 className="text-[20px] cursor-pointer">9/43 malik compound...</h2>
        </div>
        <div className="w-[45%] h-[100%] flex items-center justify-center">
          <div className="w-full h-[60%] flex items-center justify-center  rounded-md border-2 border-gray-300">
            {" "}
            <RiSearchLine />
            <input
              onClick={() => {
                navigate("/S");
              }}
              type="text"
              placeholder=" Search product"
              className="w-[95%] h-[100%] pl-1 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-[20%] h-[100%] flex items-center gap-10 justify-center">
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="cursor-pointer text-[16px]"
          >
            LOGIN
          </button>
          <button className="w-[160px] h-[50px] text-[17px] text-white cursor-pointer font-bold rounded-md bg-gray-300">My Card</button>
          
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
