import React from 'react'

const Address = () => {
  return (
   <div className="w-full min-h-screen bg-gray-50 flex justify-center">
      {/* Container - Mobile-first width */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-lg flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex items-center gap-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <i className="ri-arrow-left-line text-2xl text-gray-800"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Select Address</h1>
        </div>

        {/* Current Location Section */}
        <div className="p-5">
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-2xl border border-blue-100 cursor-pointer group active:scale-95 transition-all">
            <div className="flex items-center gap-4">
              <i className="ri-focus-3-line text-2xl text-blue-700"></i>
              <div>
                <h3 className="font-bold text-blue-800">Current Location</h3>
                <p className="text-xs text-blue-600 font-medium italic">Using GPS</p>
              </div>
            </div>
            <i className="ri-arrow-right-s-line text-xl text-blue-700 group-hover:translate-x-1 transition-transform"></i>
          </div>
          
          {/* Add New Address Button */}
          <button className="w-full mt-4 flex items-center gap-3 p-4 text-blue-600 font-bold border-2 border-dashed border-blue-100 rounded-2xl hover:bg-blue-50 transition-colors">
            <i className="ri-add-line text-xl"></i>
            <span>Add New Address</span>
          </button>
        </div>

        {/* Saved Addresses List */}
        <div className="px-5 pb-10 flex-1">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 ml-1">
            Saved Addresses
          </h2>
          
          <div className="space-y-4">
              <div 
               
                className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-gray-300 cursor-pointer transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <i className={`text-xl text-gray-600`}></i>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-800"></h4>
                    {/* Options icon */}
                    <i className="ri-more-2-fill text-gray-400"></i>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                   
                  </p>
                  <p className="text-xs text-gray-400 mt-1 uppercase font-medium">
                   
                  </p>
                </div>
              </div>
           
          </div>
        </div>

        {/* Action Button Container */}
        <div className="p-5 border-t border-gray-100 bg-white sticky bottom-0">
            <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors active:scale-95">
                Confirm & Proceed
            </button>
        </div>

      </div>
    </div>
  )
}

export default Address
