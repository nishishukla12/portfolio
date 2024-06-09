import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  links: string;
}

function ProjectCard({ image, links }: Props) {
  return (
      <div id="proj-section" className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all flex-col duration-200 justify-around bg-yellow-600 shadow-md flex gap-2	 items-center justify-items-center	">
      <Image
          src={`${image}`}
          alt=""
          width={100}
          height={100}
          className="object-contain rounded-xl shadow-md"
        />
      <a className="text-white  text-base">{links}</a>
      </div>
  
  );
}

export default ProjectCard;
