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
      <ProjectCard
        title="Ecommerce Websites"
        tech1="React"
        tech2="React Native"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/shopify.svg"
      />
      <ProjectCard
        title="Ecommerce Websites"
        tech1="React"
        tech2="React Native"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/wordpress-logo.png"
      />
      <ProjectCard
        title="Ecommerce Websites"
        tech1="React"
        tech2="React Native"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/react.svg"
      />
    </div>
  );
}

export default Project;
