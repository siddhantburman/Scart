import { useState } from "react";
import headings from "../../data/Heading";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine, RiShoppingCartLine } from "@remixicon/react";

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
        <div className="w-[15%] h-[100%] flex flex-col items-center justify-center"
         onClick={() => {
            navigate("/Address");
          }}>
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
          Login
          </button>
          <button
            onClick={() => {
              navigate("/Signup");
            }}
            className="cursor-pointer text-[16px]"
          >
            SIGNUP
          </button>
          {props.items > 0 ? (
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-blue-200">
              <RiShoppingCartLine />
              <span className="hidden sm:inline">My Cart</span>
              <div className="flex flex-col items-center">
                <span className="bg-white text-blue-600 text-[12px] font-extrabold rounded-full w-6 h-6 flex items-center justify-center leading-none">
                  {props.items}
                </span>
                {props.price > 0 ? <span className='text-white text-[15px]'>{props.price}/-</span> : <><span>prices</span></>}
              </div>
            </button>
          ) : (
            <button className="inline-flex items-center gap-2 px-6 py-3.5 text-[17px] bg-gray-400 hover:bg-gray-400 active:bg-gray-600 text-white text-sm font-bold cursor-not-allowed rounded-xl transition-colors shadow-sm shadow-blue-200">
              My cards
            </button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
