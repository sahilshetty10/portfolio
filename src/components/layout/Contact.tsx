import React, { useRef } from "react";
import Title from "../ui/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  let containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      },
      delay: 0.5,
      opacity: 0,
      duration: 1,
      x: 100,
      ease: "power4.out",
    });
  });
  return (
    <section id="contact" className="grid gap-8 p-8 md:p-20">
      <Title title="GET IN TOUCH" dark={true} />
      <div ref={containerRef} className="grid gap-8 md:grid-cols-12">
        <div className="grid h-min gap-8 md:col-span-6">
          <p className="text-2xl font-bold text-[var(--color-bg-black)] md:text-4xl">
            Have an awesome idea? Let's bring it to life!
          </p>
          <p className="description">
            I'm always excited to hear about new projects and ideas. Whether you
            have a question or just want to say hi, I'd love to hear from you
          </p>
        </div>
        <span className="md:col-span-2"></span>
        <div className="grid gap-8 md:col-span-4">
          <h3 className="title2">Contact Details</h3>
          <a className="description" href="mailto:sahilshetty58@gmail.com">
            sahilshetty58@gmail.com
          </a>
          <a className="description" href="tel:+1 226-883-2753">
            +1 226-883-2753
          </a>
          <h3 className="title2">My Social Links</h3>
          <a className="description transition hover:-translate-y-1" href="">
            Facebook
          </a>
          <a className="description transition hover:-translate-y-1" href="">
            Github
          </a>
          <a className="description transition hover:-translate-y-1" href="">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
