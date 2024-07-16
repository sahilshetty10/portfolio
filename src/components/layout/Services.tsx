import Title from "../ui/Title";
import SectionDescription from "../ui/SectionDescription";
import Service from "../ui/Service";

const Services = () => {
  return (
    <section id="services" className="p-8 pb-[21rem] md:p-20">
      <Title title="WHAT I DO /" />
      <SectionDescription
        subtitle="(SERVICES)"
        description="My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results."
      />
      <div id="service-container" className="bg-inherit">
        <Service
          top="7rem"
          title="Web Development"
          description="My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results."
          points={[
            "Responsive Web Design",
            "Frontend Development",
            "Backend Development",
          ]}
        />
        <Service
          top="14rem"
          title="Web Development"
          description="My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results."
          points={[
            "Responsive Web Design",
            "Frontend Development",
            "Backend Development",
          ]}
        />
        <Service
          top="21rem"
          title="Web Development"
          description="My obsession is to craft memorable digital experiences that represent your brand, serve a meaningful purpose, and drive tangible business results."
          points={[
            "Responsive Web Design",
            "Frontend Development",
            "Backend Development",
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
