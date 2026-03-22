import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { useNavigate, useOutletContext } from 'react-router-dom'

const App = () => {    
  let navigate = useNavigate()

  return (
    <>
     <div className="w-full min-h-full">
      {/* <Navbar/> */}
     <Homepage/>
     {/* <Footer/> */}
     </div>
    </>
  );
};

export default App;
