import React from "react";
import PriceCard from "./Helper/PriceCard";

function Price() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading_mini">Popular Services</p>
        <h1 className="heading_primary">
          Best <span className="text-yellow-300">Priceing</span> For Your
          Project
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <PriceCard plan="Basic" price="10$" save="25%" bg="bg-red-900" />
      </div>
    </div>
  );
}

export default Price;
