import Services from "./components/layout/Services.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Projects from "./components/layout/Projects.tsx";
import About from "./components/layout/About.tsx";
import Contact from "./components/layout/Contact.tsx";

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

  // on mouse move change the cursor position
  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      gsap.to(cursor, {
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 1,
      });
    }
  });

  return (
    <>
      <div className="cursor pointer-events-none fixed -left-20 -top-20 z-[1000] aspect-square h-40 origin-center rounded-full bg-[var(--color-light-cream)] mix-blend-difference blur-sm duration-150"></div>
      <div
        className="origin-bottom rounded-3xl bg-[var(--color-bg-black)] py-8"
        ref={containerRef}
      >
        <Services />
        <Projects />
        <About />
      </div>
      <Contact />
    </>
  );
};

export default App;
