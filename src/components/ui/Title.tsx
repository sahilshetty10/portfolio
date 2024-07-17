import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Title = ({ title, dark }: { title: string; dark?: boolean }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  let characters = title.split("");
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(".title-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );
  return (
    <h2
      className={`title ${dark ? "text-[var(--color-bg-black)]" : "light-cream"}`}
      ref={containerRef}
    >
      {characters.map((character, index) => {
        return (
          <span key={index} className="title-text inline-block">
            {character === " " ? "\u00A0" : character}
          </span>
        );
      })}
    </h2>
  );
};

export default Title;
