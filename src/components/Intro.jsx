import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb -1 md:mb-3 font-bold">
        Mauro Chapero
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Fullstack Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Soy una persona proactiva, responsable, dedicada y empática. Siempre
        empeño mucha dedicación para la realización de mis labores, comparto mis
        conocimientos y me comunico de manera efectiva.
      </p>
    </div>
  );
}

export default Intro;
