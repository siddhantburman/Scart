import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div className='w-full h-screen'>
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
        <button
            onClick={() => {
              navigate("/Signup");
            }}
            className="cursor-pointer text-[16px]"
          >
            SIGNUP
          </button>
      </div>
      <div className="w-full min-h-screen bg-blue-400 flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col items-center">
        
        {/* Logo/Icon */}
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-blue-600">S!</span>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-black text-gray-800 mb-2">
          India's last minute app
        </h1>
        <p className="text-gray-500 font-medium mb-8">Log in or sign up</p>

        {/* Input Field */}
        <div className="w-full relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-gray-600 font-semibold">+91</span>
          </div>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-xl py-4 pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-lg tracking-widest"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Continue Button */}
        <button 
          className={`w-full py-4 rounded-xl font-bold text-lg transition-colors bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Continue
        </button>

        {/* Footer Text */}
        <p className="mt-6 text-xs text-center text-gray-400 leading-relaxed">
          By continuing, you agree to our <br />
          <span className="underline cursor-pointer">Terms of Service</span> & <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
