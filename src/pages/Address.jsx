import React, { useState } from 'react';

const Address = () => {
  const savedAddresses = [
    {
      id: 1,
      type: "Home",
      icon: "ri-home-4-line",
      details: "H.No. 402, Sapphire Heights, Sector 5, Near Central Park",
      city: "Mumbai, Maharashtra - 400001"
    },
    {
      id: 2,
      type: "Work",
      icon: "ri-briefcase-line",
      details: "Plot No. 12, Tech Park, 3rd Floor, Corporate Block",
      city: "Bengaluru, Karnataka - 560001"
    },
    {
      id: 3,
      type: "Friend's Place",
      icon: "ri-map-pin-user-line",
      details: "A-15, Green Avenue, Behind Royal Plaza",
      city: "New Delhi, Delhi - 110001"
    }
  ];

  const [selectedAddressId, setSelectedAddressId] = useState(1); 

  const handleCurrentLocation = () => {
    alert("Fetching current location via GPS... 🛰️");
  };

  const handleConfirm = () => {
    const selected = savedAddresses.find(addr => addr.id === selectedAddressId);
    if (selected) {
      alert(`Address Confirmed! 🚚\nDelivering to: ${selected.type}\nDetails: ${selected.details}`);
    } else {
      alert("Please select an address first!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen shadow-lg flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex items-center gap-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <i className="ri-arrow-left-line text-2xl text-gray-800"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Select Address</h1>
        </div>

        <div className="p-5">
          <div 
            onClick={handleCurrentLocation}
            className="flex items-center justify-between bg-blue-50 p-4 rounded-2xl border border-blue-100 cursor-pointer group active:scale-95 transition-all"
          >
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
          <button 
            onClick={() => alert("Open Add Address Form/Modal! 📝")}
            className="w-full mt-4 flex items-center gap-3 p-4 text-blue-600 font-bold border-2 border-dashed border-blue-100 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer"
          >
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
            {savedAddresses.map((address) => {
              const isSelected = selectedAddressId === address.id;
              
              return (
                <div 
                  key={address.id}
                  onClick={() => setSelectedAddressId(address.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected 
                      ? "border-blue-600 bg-blue-50/20 shadow-sm ring-1 ring-blue-600" 
                      : "border-gray-100 hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  {/* Icon Box */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                  }`}>
                    <i className={`text-xl ${address.icon}`}></i>
                  </div>
                  
                  {/* Address Text Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-800">{address.type}</h4>
                      {/* Options icon */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          alert(`Options clicked for ${address.type} address`);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
                      >
                        <i className="ri-more-2-fill"></i>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {address.details}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 uppercase font-medium tracking-wider">
                      {address.city}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button Container */}
        <div className="p-5 border-t border-gray-100 bg-white sticky bottom-0">
          <button 
            onClick={handleConfirm}
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors active:scale-95 cursor-pointer"
          >
            Confirm & Proceed
          </button>
        </div>

      </div>
    </div>
  );
};

export default Address;