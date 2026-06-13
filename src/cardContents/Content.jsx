import React, { useState } from "react";
import Multicards from "./Multicards";
import Mycard from "../pages/Mycard"; 

const Content = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const handleCartUpdate = (product, newCount) => {
    setCartList((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === product.title);

      if (newCount <= 0) {
        return prevCart.filter((item) => item.title !== product.title);
      }

      if (existingItem) {
        return prevCart.map((item) =>
          item.title === product.title ? { ...item, count: newCount } : item
        );
      } else {
        return [...prevCart, { ...product, count: newCount }];
      }
    });
  };

  return (
    <div className="w-full min-h-[45vh] md:h-[60vh] flex flex-col justify-between px-4 md:px-10 mt-6 md:mt-10">
      
      <div className="w-full flex items-center justify-between p-2 md:p-3">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-extrabold tracking-tight">
          {props.headings.naam}
        </h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-xs md:text-sm font-bold bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-transform"
          >
            Cart ({props.items})
          </button>
          <p className="text-sm md:text-[1.2rem] font-bold text-blue-600 cursor-pointer hover:underline whitespace-nowrap">
            see all
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto hide-scroll pb-2">
        <div className="flex items-center gap-3 md:gap-5 flex-nowrap py-2">
          {props.headings.multicards.map((item, index) => {
            return (
              <div 
                key={index} 
                className="w-[140px] sm:w-[180px] md:w-[220px] shrink-0" 
                onClickCapture={(e) => {}}
              >
                <Multicards 
                  details={item}  
                  items={props.items} 
                  setItems={props.setItems}  
                  price={props.price} 
                  setPrice={props.setPrice}
                  onCountChange={(count) => handleCartUpdate(item, count)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Mycard 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={props.items}        
        price={props.price}        
        cartItems={cartList}
      />

    </div>
  );
};

export default Content;