import React from "react";
import introEn from "./data/intro-en";
import introEs from "./data/intro-es";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb -1 md:mb-3 font-bold">
        {`${introEs.firstName} ${introEs.lastName}`}
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        {introEs.carreer}
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        {introEs.about}
      </p>
    </div>
  );
}

export default Intro;
