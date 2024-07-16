import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface ServiceProps {
  title: string;
  description: string;
  points: string[];
  top: string;
}

const Service = ({ title, description, points, top }: ServiceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(".point", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-[70vh] border-t-2 border-[var(--color-dark-cream)] bg-[var(--color-bg-black)] py-8"
      style={{ transform: `translateY(${top})` }}
    >
      <h3 className="title2 light-cream h-20">{title}</h3>
      <div className="details grid gap-8 md:grid-cols-12">
        <p className="description dark-cream md:col-span-3">{description}</p>
        <span className="md:col-span-3"></span>
        <ul className="points md:col-span-6">
          {points.map((point, index) => (
            <li
              key={index}
              className="point light-cream p-4 text-2xl md:text-4xl"
            >
              <span className="description dark-orange">0{index + 1} </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
