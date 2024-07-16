// This has 12 columns, the description with optional image

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

interface SectionDescriptionProps {
  imgUrl?: string;
  subtitle: string;
  description: string;
}

const SectionDescription = ({
  imgUrl,
  subtitle,
  description,
}: SectionDescriptionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="grid gap-8 lg:grid-cols-12" ref={containerRef}>
      {
        // if there is an image, display with 4 columns and 4 empty span.
        // if no image then 8 empty span
        imgUrl && (
          <img
            src={imgUrl}
            alt="description"
            className="w-full md:col-span-3"
          />
        )
      }
      <span className={imgUrl ? "md:col-span-3" : "md:col-span-6"}></span>
      <p className="description dark-orange md:col-span-1">{subtitle}</p>
      <p className="description dark-cream md:col-span-3">{description}</p>
    </div>
  );
};

export default SectionDescription;
