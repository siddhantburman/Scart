import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const filteredValue = value.replace(/\D/g, "");
      if (filteredValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: filteredValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = 
    formData.name.trim().length >= 3 && 
    isEmailValid(formData.email) && 
    formData.phone.length === 10;

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`Account Created Successfully! 🎉\nWelcome ${formData.name}!`);
      navigate("/Login"); 
    }
  };

  return (
    <div className="w-full h-screen font-sans">
      <div className="w-full h-[12vh] bg-blue-50 flex justify-around items-center fixed top-0 left-0 z-50 shadow-sm">
        <div
          onClick={() => navigate("/")}
          className="w-[12%] h-full flex items-center overflow-hidden cursor-pointer"
        >
          <img
            className="w-full h-[80%] object-contain"
            src="/Scart.png"
            alt="Logo"
          />
        </div>
        <button
          onClick={() => navigate("/Login")}
          className="cursor-pointer text-[16px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Login
        </button>
      </div>

      <div className="w-full min-h-screen bg-blue-400 flex items-center justify-center p-4 pt-[15vh]">
        <div className="w-[90%] max-w-md bg-blue-50 rounded-[2rem] shadow-2xl p-8 md:p-10 flex flex-col justify-center">
          
          <div className="mb-6">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Create Account
            </h1>
            <p className="text-gray-500 font-medium mt-1">
              Join India's fastest delivery app
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-zinc-800 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-zinc-800 font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-5 flex items-center font-bold text-gray-400 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0000000000"
                  className="w-full border border-gray-200 bg-gray-50 rounded-2xl py-3.5 pl-14 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all tracking-[2px] text-zinc-800 font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full mt-4 py-4 rounded-2xl font-extrabold text-lg shadow-lg transform transition-all select-none ${
                isFormValid 
                  ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700 active:scale-95 shadow-blue-500/20" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm font-medium text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-700 font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/Login")}
            >
              Log in
            </span>
          </p>

          <p className="mt-6 text-[10px] text-center text-gray-400 uppercase tracking-widest select-none">
            100% Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;