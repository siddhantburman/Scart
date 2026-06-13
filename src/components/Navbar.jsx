import { useState } from "react";
import headings from "../../data/Heading";
import React from "react";
import Mycard from "../pages/Mycard";
import { useNavigate } from "react-router-dom";
import { RiSearchLine, RiShoppingCartLine } from "@remixicon/react";

function Navbar(props) {
  let navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="w-full min-h-[12vh] md:h-[12vh] bg-blue-50 flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-0 fixed top-0 left-0 z-50 border-b border-gray-200 gap-3 md:gap-0">
        
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4">
          {/* Logo Section */}
          <div
            onClick={() => navigate("/")}
            className="w-20 h-10 md:w-28 md:h-full overflow-hidden flex items-center cursor-pointer shrink-0"
          >
            <img
              className="w-full h-full object-contain"
              src="/Scart.png"
              alt="Logo"
            />
          </div>

          {/* Address Section */}
          <div 
            className="flex-1 md:flex-none max-w-[180px] sm:max-w-[240px] md:max-w-xs flex flex-col justify-center cursor-pointer"
            onClick={() => navigate("/Address")}
          >
            <h1 className="font-extrabold text-xs sm:text-sm md:text-base text-gray-900 truncate">
              Delivery in 12 minutes
            </h1>
            <h2 className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">
              9/43 malik compound...
            </h2>
          </div>
        </div>

        <div className="w-full h-full md:w-[45%] flex items-center justify-center order-3 md:order-2">
          <div className="w-full h-11 md:h-[60%] flex items-center bg-white rounded-xl border border-gray-300 px-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent transition-all">
            <RiSearchLine className="text-gray-400 w-5 h-5 shrink-0" />
            <input
              onClick={() => navigate("/S")}
              type="text"
              placeholder="Search product"
              className="w-full h-full pl-2 text-sm md:text-base focus:outline-none bg-transparent cursor-pointer"
            />
          </div>
        </div>

        <div className="w-auto flex items-center gap-3 sm:gap-4 md:gap-6 justify-end order-2 md:order-3 shrink-0">
          <button
            onClick={() => navigate("/Login")}
            className="cursor-pointer text-xs sm:text-sm md:text-base font-bold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Signup")}
            className="cursor-pointer text-xs sm:text-sm md:text-base font-bold text-gray-700 hover:text-blue-600 transition-colors"
          >
            SIGNUP
          </button>

          {props.items > 0 ? (
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs md:text-sm font-black rounded-xl transition-all shadow-md shadow-blue-200"
            >
              <RiShoppingCartLine className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">My Cart</span>
              <div className="flex flex-col md:flex-row items-center md:gap-1.5">
                <span className="bg-white text-blue-600 text-[10px] md:text-xs font-black rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {props.items}
                </span>
                {props.price > 0 && (
                  <span className='text-white text-[11px] md:text-sm font-bold md:ml-0.5'>
                    {props.price}/-
                  </span>
                )}
              </div>
            </button>
          ) : (
            <button className="inline-flex items-center gap-1.5 px-3 py-2 md:px-5 md:py-3 bg-gray-300 text-gray-500 text-xs md:text-sm font-bold cursor-not-allowed rounded-xl transition-colors">
              <RiShoppingCartLine className="w-4 h-4 md:w-5 md:h-5 opacity-60" />
              <span>Empty</span>
            </button>
          )}
        </div>

        <Mycard 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={props.items}        
          price={props.price}        
          cartItems={props.cartList || []}
          setItems={props.setItems}
          setPrice={props.setPrice}
          setCartList={props.setCartList}
        />

      </div>

      <div className="h-[15vh] sm:h-[16vh] md:h-[12vh]"></div>
    </>
  );
}

export default Navbar;
