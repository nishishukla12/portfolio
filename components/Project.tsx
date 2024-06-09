import React from "react";
import ProjectCard from "./Helper/ProjectCard";

function Project() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading_mini">Recent Works</p>
        <h1 className="heading_primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3	gap-4 pt-4 w-[80%] m-auto pt-5">
      <ProjectCard
        image="/images/beardo_logo.avif"
        links="https://beardo.in/"
      />
       <ProjectCard
        image="/images/hauselogo.webp"
        links="https://hausandkinder.com/"
      />
       <ProjectCard
        image="/images/flygrups-logo.svg"
        links="https://flygrubs.com/"
      />
       <ProjectCard
        image="/images/born_logo.svg"
        links="https://bornbabies.com/"
      />
       <ProjectCard
        image="/images/unbottle-logo.avif"
        links="https://www.unbottle.com/"
      />
      <ProjectCard
        image="/images/Totem_Final_Logo.avif"
        links="https://www.totemgoods.com/"
      />
      <ProjectCard
        image="/images/evolu-logo.png"
        links="https://www.evoluderm.com/"
      />
      <ProjectCard
        image="/images/spice-logo.avif"
        links="https://uk.thespicetailor.com/"
      />
      <ProjectCard
        image="/images/just_herb-logo.avif"
        links="https://www.justherbs.in/"
      />
    </div>
    </div>
  );
}

export default Project;
