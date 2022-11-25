import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Projects</Title>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {portfolio.map((project) => (
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
