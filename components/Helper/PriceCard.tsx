import React from "react";

interface Props {
  plan: string;
  save: string;
  price: string;
  bg: string;
}
function PriceCard({ bg, plan, price, save }: Props) {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plan}</h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try out {plan} Plan Save{" "}
          <span className="text-yellow-400">{save}</span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
          <p className="text-white">/Hour</p>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
