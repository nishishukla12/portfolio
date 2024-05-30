import React, { useState } from "react";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Price from "@/components/Price";

function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNavHandler={closeNavHandler} />
      <Nav showNavHandler={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
    </div>
  );
}

export default HomePage;
