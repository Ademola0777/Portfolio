import { Blocks } from "lucide-react";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 20,
    },
    {
      label: "Years of experience",
      number: 1,
    },
  ];
  return (
    <section id="about" className="pt-20 lg:pt-32">
      <div className="container lg:px-8 xl:max-w-6xl px-4 mx-auto">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I’m Khaleed, a full-stack web developer who blends creative flair
            with technical precision. I specialize in building websites that are
            as stunning to look at as they are powerful to use, turning your
            ideas into digital experiences that shine in both design and
            performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="secondary font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <a href="#home" className="ml-auto md:w-[40px] md:h-[40px]">
              <Blocks size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
