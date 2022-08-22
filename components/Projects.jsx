import Image from "next/image";
import Link from "next/link";
import React from "react";

import expenseApp from "../public/assets/projects/expenseapp.png";
import foodApp from "../public/assets/projects/foodApp.png";
import weatherApp from "../public/assets/projects/weather.png";
import capture from "../public/assets/projects/capture.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Expense App"
            backgroundImg={expenseApp}
            projectUrl="/expense"
            tech="React JS"
          />
          <ProjectItem
            title="Food App"
            backgroundImg={foodApp}
            projectUrl="/food"
            tech="React JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherApp}
            projectUrl="/weather"
            tech="React JS"
          />
          <ProjectItem
            title="Photography"
            backgroundImg={capture}
            projectUrl="/photograph"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
