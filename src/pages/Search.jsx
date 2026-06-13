import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = (props) => {
  let navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState("");

  const recentSearches = ["chips", "milk", "cold drink", "bread"];
  const trendingSearches = [
    { title: "Snacks", icon: "ri-restaurant-line", color: "text-orange-500" },
    { title: "Dairy & Eggs", icon: "ri-drop-line", color: "text-blue-500" },
    { title: "Ice Creams", icon: "ri-goblet-line", color: "text-pink-500" },
    { title: "Soft Drinks", icon: "ri-cup-line", color: "text-purple-500" }
  ];

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleSuggestionClick = (term) => {
    setSearchQuery(term);
  };

  return (
    <>
      <div className="w-full h-[12vh] bg-blue-50 flex justify-between items-center px-10 fixed top-0 left-0 z-50 border-b border-blue-100 shadow-sm">
        <div onClick={() => navigate("/")} className="w-[12%] h-full flex items-center overflow-hidden cursor-pointer">
          <img
            className="w-full h-[80%] object-contain"
            src="/Scart.png"
            alt="Logo"
          />
        </div>
        
        <div className="flex items-center gap-4">
          {props.items > 0 ? (
            <button 
              onClick={() => props.setIsCartOpen && props.setIsCartOpen(true)}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-200 cursor-pointer"
            >
              <i className="ri-shopping-cart-2-line text-lg"></i>
              <span className="hidden sm:inline">My Cart</span>
              <div className="flex items-center gap-2">
                <span className="bg-white text-blue-600 text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center">
                  {props.items}
                </span>
                {props.price > 0 && <span className='text-white font-extrabold text-sm'>₹{props.price}/-</span>}
              </div>
            </button>
          ) : (
            <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-gray-300 text-gray-500 font-bold cursor-not-allowed rounded-xl transition-colors">
              My Cart (0)
            </button>
          )}
        </div>
      </div>

      <div className='w-full min-h-screen pt-[12vh] bg-white font-sans select-none'>
        
        <div className="sticky top-[12vh] z-40 bg-white border-b border-gray-100 p-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            
            <button 
              onClick={() => navigate("/")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-2xl text-gray-700"></i>
            </button>

            <div className="flex-1 relative group">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-blue-600 transition-colors"></i>
              
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search "chips", "milk" or "cold drinks"'
                className="w-full bg-gray-100 py-3 pl-12 pr-12 rounded-xl border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all text-lg font-medium text-gray-800"
              />

              {searchQuery.length > 0 && (
                <i 
                  onClick={handleClear}
                  className="ri-close-circle-fill absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                ></i>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-5">
          
          {searchQuery.length === 0 && (
            <div className="mb-8 transition-all">
              <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                <i className="ri-history-line text-gray-400"></i>
                <h2>Recent Searches</h2>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {recentSearches.map((term, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSuggestionClick(term)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-blue-600 hover:text-blue-700 active:scale-95 transition-all cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
              <i className="ri-fire-line text-orange-500"></i>
              <h2>Trending Searches</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {trendingSearches.map((trend, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSuggestionClick(trend.title)}
                  className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-full mb-3 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <i className={`${trend.icon} text-2xl ${trend.color}`}></i>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{trend.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-5 bg-blue-50 rounded-3xl flex items-center justify-between overflow-hidden relative">
            <div>
              <h3 className="text-blue-900 font-black text-xl">Quick Grocery</h3>
              <p className="text-blue-700 text-sm">Delivery in 10 minutes</p>
            </div>
            <i className="ri-flashlight-fill text-5xl text-blue-200 absolute -right-2 top-3 opacity-40"></i>
          </div>

        </div>
      </div>
    </>
  )
}

export default Search;