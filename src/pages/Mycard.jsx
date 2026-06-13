import React from "react";
import MainOutlet from "../components/MainOutlet";
import Content from "../cardContents/Content";
import { RiCloseLine, RiTimerLine } from "@remixicon/react";

const Mycard = ({ isOpen, onClose, items, price, cartItems = [], setItems, setPrice, setCartList }) => {
  const deliveryCharge = price > 0 ? 15 : 0;
  const handlingCharge = price > 0 ? 2 : 0;
  const grandTotal = Number(price) + deliveryCharge + handlingCharge;

  if (!isOpen) return null;

  const updateQuantityInCart = (item, change) => {
    const newCount = item.count + change;

    setItems((prev) => Math.max(0, prev + change));
    setPrice((prev) => Math.max(0, prev + (change * Number(item.price))));

    setCartList((prevCart) => {
      if (newCount <= 0) {
        return prevCart.filter((p) => p.title !== item.title);
      }
      return prevCart.map((p) =>
        p.title === item.title ? { ...p, count: newCount } : p
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen sm:w-[420px] bg-[#111019] border-l border-zinc-800 flex flex-col shadow-2xl text-white">
          
          <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-black/20">
            <div>
              <h3 className="font-bold text-lg">My Cart</h3>
              <p className="text-xs text-zinc-400">{items} items selected</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
              <RiCloseLine className="text-xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {price > 0 && (
              <div className="bg-blue-950/30 border border-blue-900/40 rounded-xl p-3 flex items-center space-x-3">
                <span className="text-xl text-blue-400">⚡</span>
                <div>
                  <h4 className="text-xs font-bold text-blue-400">Delivery in 8 minutes</h4>
                  <p className="text-[11px] text-zinc-400">Direct delivery from nearest distribution store</p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 p-3 rounded-xl">
                    
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-12 h-12 object-cover rounded-lg bg-zinc-800 border border-zinc-700/50" 
                      />
                      <div>
                        <h4 className="text-xs font-medium text-zinc-200 line-clamp-1 max-w-[150px]">{item.title}</h4>
                        <p className="text-[11px] text-zinc-500">{item.quantity || '1 unit'}</p>
                        <p className="text-xs font-bold text-blue-400 mt-0.5">₹{Number(item.price) * item.count}/-</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center bg-blue-600 rounded-lg overflow-hidden h-7 text-white text-xs font-bold shadow">
                        <button 
                          onClick={() => updateQuantityInCart(item, -1)} 
                          className="px-2.5 hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        
                        <span className="px-1 min-w-[14px] text-center">{item.count}</span>
                        
                        <button 
                          onClick={() => updateQuantityInCart(item, 1)} 
                          className="px-2.5 hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-[10px] text-zinc-400 flex items-center gap-0.5 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                        <RiTimerLine className="w-3 h-3 text-blue-400" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <div className="py-20 text-center text-zinc-500 text-sm">
                  🛒 Your cart is empty. Add items to see them here!
                </div>
              )}
            </div>

            {price > 0 && (
              <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-4 space-y-2.5 text-xs text-zinc-400">
                <h4 className="font-bold text-zinc-300 text-sm mb-1">Bill Details</h4>
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span className="text-zinc-200">₹{price}/-</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="text-zinc-200">₹{deliveryCharge}</span>
                </div>
                <div className="flex justify-between">
                  <span>Handling Charge</span>
                  <span className="text-zinc-200">₹{handlingCharge}</span>
                </div>
                <hr className="border-zinc-800 my-1" />
                <div className="flex justify-between font-bold text-zinc-100 text-sm">
                  <span>Grand Total</span>
                  <span className="text-blue-400">₹{grandTotal}/-</span>
                </div>
              </div>
            )}

          </div>

          {price > 0 && (
            <div className="p-4 border-t border-zinc-800 bg-black/40">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-between px-5 transition-all shadow-lg shadow-blue-900/20">
                <div className="text-left">
                  <p className="text-[10px] uppercase text-blue-200 tracking-wider">Grand Total</p>
                  <p className="text-sm font-extrabold">₹{grandTotal}/-</p>
                </div>
                <span>Proceed to Pay ➔</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Mycard;