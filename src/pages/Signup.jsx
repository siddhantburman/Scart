import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  return (
    <div className="w-full h-screen">
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
            navigate("/Login");
          }}
          className="cursor-pointer text-[16px]"
        >
          Login
        </button>
      </div>
      <div className="w-full min-h-screen bg-blue-400 flex items-center justify-center p-4">
        {/* Signup Card */}
        <div className="w-[90%] h-[85vh] bg-blue-50 mt-20 rounded-[2rem] shadow-2xl p-8 md:p-10 flex flex-col">
          {/* Back Button & Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Create Account
            </h1>
            <p className="text-gray-500 font-medium mt-1">
              Join India's fastest delivery app
            </p>
          </div>

          <div className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center font-bold text-gray-400">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  placeholder="0000000000"
                  className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-4 pl-14 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all tracking-[2px]"
                />
              </div>
            </div>
          </div>

          {/* Signup Button */}
          <button
            className={`w-full mt-8 py-4 rounded-2xl font-extrabold text-lg shadow-lg transform active:scale-95 transition-all bg-gray-200 text-gray-400`}
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm font-medium text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-700 font-bold cursor-pointer hover:underline"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Log in
            </span>
          </p>

          {/* Tiny Footer */}
          <p className="mt-8 text-[10px] text-center text-gray-400 uppercase tracking-widest">
            100% Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
