import Services from "./components/layout/Services.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Projects from "./components/layout/Projects.tsx";
import About from "./components/layout/About.tsx";

const App = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%%",
        end: "bottom 70%",
        toggleActions: "play reverse play reverse",
      },
      duration: 1,
      scale: 0.95,
      ease: "power4.out",
    });
  });

  return (
    <>
      <div className="h-screen"></div>
      <div
        className="rounded-3xl bg-[var(--color-bg-black)] py-8"
        ref={containerRef}
      >
        <Services />
        <Projects />
        <About />
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default App;
