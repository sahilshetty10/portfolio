import React, { useState } from "react";
import Title from "../ui/Title";
import SectionDescription from "../ui/SectionDescription";
import Project from "../ui/Project";

const Projects = () => {
  const [counter, setCounter] = useState("01.");

  return (
    <section id="projects" className="flex flex-col gap-8 p-8 md:p-20">
      <Title title="SELECTED" />
      <Title title="WORKS /" />
      <SectionDescription
        subtitle="(PROJECTS)"
        description="Featured client projects that have been meticulously crafted with passion and purpose over the years."
      />
      <div className="grid gap-8 md:grid-cols-12">
        <div className="counter light-cream sticky top-60 col-span-5 hidden h-min justify-center text-[15rem] md:flex">
          {counter}
        </div>
        <span className="md:col-span-1"></span>
        <div className="container md:col-span-6">
          <Project
            counterValue="01."
            setCounter={setCounter}
            projectTitle="Project Title"
            tags={[
              { tag: "Design", outline: false },
              { tag: "Development", outline: false },
              { tag: "2024", outline: true },
            ]}
          />
          <Project
            counterValue="02."
            setCounter={setCounter}
            projectTitle="Project Title"
            tags={[
              { tag: "Design", outline: false },
              { tag: "Development", outline: false },
              { tag: "2024", outline: true },
            ]}
          />
          <Project
            counterValue="03."
            setCounter={setCounter}
            projectTitle="Project Title"
            tags={[
              { tag: "Design", outline: false },
              { tag: "Development", outline: false },
              { tag: "2024", outline: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
