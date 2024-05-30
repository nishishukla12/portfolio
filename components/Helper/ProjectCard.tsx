import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}

function ProjectCard({ image, tech1, tech2, tech3, tech4, title }: Props) {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={250}
          height={250}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <a href="https://beardo.in/" className="text-yellow-500  text-base">Beardo</a>
        <br></br>
        <a href="https://hausandkinder.com/" className="text-yellow-500  text-base">Haus & Kinder</a>
       <br></br>
        <a href="https://unbottle.com/" className="text-yellow-500  text-base">Unbottle</a>
        <br></br>
        <a href="https://homified.in/" className="text-yellow-500  text-base">Homified</a>
      <br></br>
       <a href="https://www.happypo.de/" className="text-yellow-500  text-base">Happypo</a>
     <br></br>
       <a href="https://www.evoluderm.com/" className="text-yellow-500  text-base">Evoluderm</a>
       
       <a href="https://rawbeautylab.com/" className="text-yellow-500  text-base">RawBeautyLab</a>
       <a href="https://babisabi.com/" className="text-yellow-500  text-base">BabiSabi</a>
      </div>
    </div>
  );
}

export default ProjectCard;
