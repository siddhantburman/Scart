import React from "react";
import Cards from "../cardContents/Cards";
import user from "../../data/users";
import headings from "../../data/Heading";
import Content from "../cardContents/Content";
import { useOutletContext } from "react-router-dom";


const Homepage = () => {
  const {items, setItems, price, setPrice} = useOutletContext()


  return (
    <section className="w-full  min-h-screen flex flex-col bg-blue-50 items-center mt-20 pt-10 px-10">
      {/* Top Banner */}
      <div className="w-full h-[40vh] cursor-pointer bg-transparent rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover" src="/img-1.png" alt="" />
      </div>
      {/* Category Images */}
      <div className="w-[97%] h-[30vh] flex gap-10 bg-transparent items-center mt-4 rounded-2xl">
        <div className="w-[27%] h-full rounded-2xl cursor-pointer overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/pharmacy.png"
            alt=""
          />
        </div>

        <div className="w-[27%] h-full rounded-2xl cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover" src="/pet.png" alt="" />
        </div>

        <div className="w-[27%] h-full rounded-2xl cursor-pointer overflow-hidden">
          <img className="w-full h-full object-cover" src="/baby.avif" alt="" />
        </div>
      </div>
      {/* Cards Section */}
      <div className="w-full h-[55vh] flex flex-wrap items-center justify-center p-2 gap-2 mt-8">
        {user.map((user, index) => {
          return <Cards key={index} user={user} />;
        })}
      </div>
      {/* order Cards */}
      <div className="w-full min-h-[100vh] flex flex-col items-center gap-5 mt-8">
         {headings.map((headings, index) => {
          return <Content key={index} headings={headings}  items={items} setItems={setItems}  price={price} setPrice={setPrice} />
        })};
      </div>
    </section>
  );
};

export default Homepage;