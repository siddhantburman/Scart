import React from "react";
import Cards from "../cardContents/Cards";
import user from "../../data/users";
import headings from "../../data/Heading";
import Content from "../cardContents/Content";
import { useOutletContext } from "react-router-dom";

const Homepage = () => {
  const { items, setItems, price, setPrice } = useOutletContext();

  return (
    <section className="w-full min-h-screen flex flex-col bg-blue-50 items-center py-4 px-4 sm:px-10 md:px-20 select-none">
      
      <div className="w-full h-[18vh] sm:h-[30vh] md:h-[40vh] cursor-pointer bg-transparent rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
        <img className="w-full h-full object-cover" src="/img-1.png" alt="Main Promo Banner" />
      </div>

      <div className="w-full md:w-[97%] min-h-[12vh] sm:h-[25vh] md:h-[30vh] flex flex-wrap md:flex-nowrap gap-3 sm:gap-6 md:gap-10 bg-transparent items-center mt-6 rounded-2xl justify-between">
        <div className="w-[30%] md:w-[27%] h-[12vh] sm:h-full rounded-xl md:rounded-2xl cursor-pointer overflow-hidden shadow-sm hover:scale-[1.02] transition-transform">
          <img
            className="w-full h-full object-cover"
            src="/pharmacy.png"
            alt="Pharmacy Category"
          />
        </div>

        <div className="w-[30%] md:w-[27%] h-[12vh] sm:h-full rounded-xl md:rounded-2xl cursor-pointer overflow-hidden shadow-sm hover:scale-[1.02] transition-transform">
          <img className="w-full h-full object-cover" src="/pet.png" alt="Pet Category" />
        </div>

        <div className="w-[30%] md:w-[27%] h-[12vh] sm:h-full rounded-xl md:rounded-2xl cursor-pointer overflow-hidden shadow-sm hover:scale-[1.02] transition-transform">
          <img className="w-full h-full object-cover" src="/baby.avif" alt="Baby Care Category" />
        </div>
      </div>

      <div className="w-full min-h-[30vh] md:h-[55vh] flex flex-wrap items-center justify-center p-1 gap-3 mt-8">
        {user.map((u, index) => {
          return <Cards key={index} user={u} />;
        })}
      </div>

      <div className="w-full min-h-[100vh] flex flex-col items-center gap-6 mt-8 pb-12">
        {headings.map((heading, index) => {
          return (
            <Content 
              key={index} 
              headings={heading}  
              items={items} 
              setItems={setItems}  
              price={price} 
              setPrice={setPrice} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;