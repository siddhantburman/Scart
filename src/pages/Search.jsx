import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiSearchLine } from "@remixicon/react";

const Search = (props) => {
  let navigate = useNavigate()
  return (
    <>
     <div className="w-full h-[12vh] bg-blue-50 flex justify-around item-center fixed">
        <div  onClick={() => { navigate("/") }}  className="w-[12%] h-full overflow-hidden">
          <img
            className="w-full h-[100%] cursor-pointer
             object-cover "
            src="/Scart.png"
            alt=""
          />
        </div>
        <div className="w-[10%] h-[100%] flex items-center gap-10 justify-center">
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
      <hr/>
    <div className='w-full h-screen mt-20 bg-blue-950'>
     <div className="w-full min-h-screen bg-white">
      {/* Sticky Header with Search Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          
          {/* Back Button (Mobile only) */}
          <button className="md:hidden">
            <i className="ri-arrow-left-line text-2xl text-gray-700"></i>
          </button>

          {/* Search Input Container */}
          <div className="flex-1 relative group">
            {/* Search Icon */}
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-blue-600 transition-colors"></i>
            
            <input
              autoFocus
              type="text"
              placeholder='Search "chips"'
              className="w-full bg-gray-100 py-3 pl-12 pr-12 rounded-xl border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all text-lg font-medium"
    
            />

            {/* Clear Button (only when typing) */}
      
              <i 
                className="ri-close-circle-fill absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 cursor-pointer hover:text-gray-600"
              ></i>
          </div>
        </div>
      </div>

      {/* Search Content Area */}
      <div className="max-w-4xl mx-auto p-5">
        
        {/* Recent Searches Section */}
       
          <div className="mb-8 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
              <i className="ri-history-line text-gray-400"></i>
              <h2>Recent Searches</h2>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
             
                <button 
                 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-blue-600 hover:text-blue-700 active:scale-95 transition-all"
                >
                  {props.item}
                </button>
             
            </div>
          </div>
       

        {/* Trending Suggestions */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
            <i className="ri-fire-line text-orange-500"></i>
            <h2>Trending Searches</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
           
              <div 
                
                className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-full mb-3 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <i className="ri-shopping-basket-2-line text-2xl text-green-600"></i>
                </div>
                <span className="text-sm font-bold text-gray-700">{props.item}</span>
              </div>
            
          </div>
        </div>

        {/* Categories Section (Extra Blinkit Style) */}
        <div className="mt-4 p-5 bg-blue-50 rounded-3xl flex items-center justify-between overflow-hidden relative">
            <div>
                <h3 className="text-blue-900 font-black text-xl">Quick Grocery</h3>
                <p className="text-blue-700 text-sm">Delivery in 10 minutes</p>
            </div>
            <i className="ri-flashlight-fill text-5xl text-blue-200 absolute -right-2 opacity-50"></i>
        </div>

      </div>
    </div>
      
    </div>
    </>
  )
}

export default Search
