import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleContinue = () => {
    if (mobileNumber.length === 10) {
      setShowOtpScreen(true); 
      alert(`OTP sent to +91 ${mobileNumber} 💬 (Use mock OTP: 123456)`);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      alert("Login Successful! 🎉");
      navigate("/");
    } else {
      alert("Oops! Invalid OTP. Please enter 123456");
    }
  };

  return (
    <div className='w-full h-screen font-sans'>
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
          onClick={() => navigate("/Signup")}
          className="cursor-pointer text-[16px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          SIGNUP
        </button>
      </div>

      <div className="w-full min-h-screen bg-blue-400 flex items-center justify-center p-4 pt-[15vh]">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col items-center">
          
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-inner animate-pulse">
            <span className="text-3xl font-black text-blue-600">S!</span>
          </div>

          <h1 className="text-2xl font-black text-gray-800 mb-2 text-center">
            India's last minute app
          </h1>
          <p className="text-gray-500 font-medium mb-8">
            {showOtpScreen ? "Enter verification code" : "Log in or sign up"}
          </p>

          {!showOtpScreen ? (
            <div className="w-full space-y-4">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-600 font-semibold">+91</span>
                </div>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  className="w-full border border-gray-300 rounded-xl py-4 pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-lg tracking-widest font-medium"
                  placeholder="Enter mobile number"
                />
              </div>

              <button 
                onClick={handleContinue}
                disabled={mobileNumber.length !== 10}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  mobileNumber.length === 10 
                    ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700 shadow-md active:scale-[0.99]" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="w-full">
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  className="w-full border border-gray-300 rounded-xl py-4 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-xl tracking-[1em] font-bold"
                  placeholder="------"
                />
                <p className="text-center text-xs text-zinc-400 mt-2">
                  OTP sent to +91 {mobileNumber} |{" "}
                  <span 
                    onClick={() => setShowOtpScreen(false)} 
                    className="text-blue-600 font-bold cursor-pointer underline"
                  >
                    Change Number
                  </span>
                </p>
              </div>

              <button 
                onClick={handleVerifyOtp}
                disabled={otp.length < 6}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  otp.length === 6 
                    ? "bg-green-600 text-white cursor-pointer hover:bg-green-700 shadow-md active:scale-[0.99]" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Verify & Proceed
              </button>
            </div>
          )}

          <p className="mt-6 text-xs text-center text-gray-400 leading-relaxed">
            By continuing, you agree to our <br />
            <span className="underline cursor-pointer hover:text-gray-600">Terms of Service</span> &{" "}
            <span className="underline cursor-pointer hover:text-gray-600">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;