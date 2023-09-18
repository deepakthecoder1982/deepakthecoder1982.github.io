import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "A Learner", "A MERN Stack Developer","A Problem Solver","A Prompt Enginner"],
          autoStart: true,
          loop: true,
          deleteSpeed: 70
        }}
      />
    </>
  );
};
