import React from "react";
import { TypeAnimation } from "react-type-animation";

function TypeWriteEffect() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "a Website Designer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a Html Developer",
        1000,
        "a React Developer",
        1000,
        "a Website Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[40px] lg:text-[30px] sm:text-[30px] text-[20px] text-white font-bold"
      repeat={Infinity}
    />
  );
}

export default TypeWriteEffect;
