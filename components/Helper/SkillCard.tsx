import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  percent: string;
}

function SkillCard({ title, image, percent }: Props) {
  return (
    <div className="p-6 hover:bg-yellow-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-800">
      <Image
        src={`${image}`}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-[1rem] text-white font-[600]">{title}</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
}

export default SkillCard;
