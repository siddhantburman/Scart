import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiSearchLine } from "@remixicon/react";

const Search = () => {
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
       
        <div className="w-[60%] h-[100%] flex items-center justify-center">
         <div className="w-full h-[60%] flex items-center justify-center  rounded-md border-2 border-gray-300"> <RiSearchLine />
          <input type="text" placeholder=" Search product" className="w-[95%] h-[100%] pl-1 focus:outline-none" /></div>
        </div>
        <div className="w-[10%] h-[100%] flex items-center gap-10 justify-center">
          <button className="w-[160px] h-[50px] text-[17px] text-white cursor-pointer font-bold rounded-md bg-gray-300">My Card</button>
        </div>
      </div>
      <hr/>
    <div className='w-full h-screen mt-20 bg-blue-950'>
      
    </div>
    </>
  )
}

export default Search
