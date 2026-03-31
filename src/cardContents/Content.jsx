import React from "react";
import Multicards from "./Multicards";
import heading from "/data/Heading";

const Content = (props) => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-between pl-10 pr-10 mt-10">
      <div className="w-full h-[10%] flex items-center justify-between p-3">
        <h1 className="text-3xl text-black font-bold">{props.headings.naam}</h1>
        <p className="text-[1.2rem] font-bold text-blue-600 cursor-pointer">
          see all
        </p>
      </div>
      <div className="w-full overflow-x-auto hide-scroll">
        <div className="w-[200%]  h-[95%] flex p-2 gap-5">
          {props.headings.multicards.map((item, index) => {
            return <Multicards key={index} details={item}  items={props.items} setItems={props.setItems}  price={props.price} setPrice={props.setPrice}  />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
