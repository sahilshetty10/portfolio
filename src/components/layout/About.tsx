import Title from "../ui/Title";

const About = () => {
  return (
    <section
      id="about"
      className="grid gap-8 p-8 md:grid-cols-12 md:items-center md:p-20"
    >
      <span className="md:col-span-6"></span>
      <div className="flex flex-col md:col-span-6">
        <Title title="FULLSTACK" />
        <Title title="DEVELOPER," />
        <Title title="DESIGNER." />
      </div>
      <img
        src=""
        alt=""
        className="aspect-square w-full bg-slate-50 md:col-span-5"
      />
      <span className="md:col-span-1"></span>
      <div className="grid h-min gap-8 md:col-span-6 md:grid-cols-6">
        <p className="light-cream text-2xl md:col-span-5 md:text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae
          magni iusto nihil doloribus a reprehenderit? Optio eaque iusto
          similique.
        </p>
        <span className="col-span-1"></span>
        <p className="dark-orange description md:col-span-2">(ABOUT ME)</p>
        <p className="dark-cream description md:col-span-3">
          Creating great web experiences is my primary focus. I ensure each
          project leaves users with a feel-good sensation through meticulous
          attention to detail and user-centric design principles.
          <br />
          <br />
          When I'm not immersed in web development and design, you can find me
          sharing insights about my freelance journey on YouTube, bouldering,
          playing music, or tending to my cherished houseplants.
        </p>
      </div>
    </section>
  );
};

export default About;
