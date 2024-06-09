import React from "react";
import ServicesCard from "./Helper/ServicesCard";

function Services() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading_mini">Papular Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services </span>For You.
        </h1>
      </div>
      <div
        className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]
       items-center"
      >
        <div>
          <ServicesCard title="Shopify Website" num="01" content="A unique, branded theme designed to match the boutique’s aesthetic." />
        </div>
        <div>
          <ServicesCard title="React Website" num="02" content="My Awesome React App is a task management tool designed to help users organize their daily activities efficiently." />
        </div>
        <div>
          <ServicesCard title="Wordpress Website" num="03" content="A unique theme designed to reflect the brand's identity and appeal to tech enthusiasts." />
        </div>
        <div>
          <ServicesCard title="Bug Fixing" num="04" content="Fixing bugs improves the user experience and satisfaction." />
        </div>
        <div>
          <ServicesCard title="Figma Designs" num="06" content="The main workspace for creating and editing designs. Organizes all elements within your design." />
        </div>
      </div>
    </div>
  );
}

export default Services;
