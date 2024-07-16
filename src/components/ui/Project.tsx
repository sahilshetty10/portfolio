import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tag from "./Tag";

interface ProjectProps {
  counterValue: string;
  setCounter: Function;
  projectTitle: string;
  tags: {
    tag: string;
    outline: boolean;
  }[];
}

const Project = ({
  counterValue,
  setCounter,
  projectTitle,
  tags,
}: ProjectProps) => {
  let containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 70%",
        toggleActions: "play reverse play reverse",
      },
      duration: 1,
      scale: 0.95,
      ease: "power4.out",
    });
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20%",
      end: "bottom 20%",
      onEnter: () => setCounter(counterValue),
      onEnterBack: () => setCounter(counterValue),
    });
  });
  return (
    <div className="relative grid gap-4 py-8" ref={containerRef}>
      <img
        src=""
        alt=""
        className="aspect-square w-full rounded-2xl bg-[var(--color-light-cream)]"
      />
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="description light-cream uppercase">{projectTitle}</p>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag.tag} outline={tag.outline} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
