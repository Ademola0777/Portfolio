import SkillCard from "./SkillCard";

const Skill = () => {
  const skillItem = [
    {
      imgSrc: "/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/expressjs.svg",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: "/mongodb.svg",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: "/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/nextjs.svg",
      label: "NextJs",
      desc: "React Framework",
    },
    {
      imgSrc: "/typescriptt.svg",
      label: "TypeScript",
      desc: "Programming Language",
    },
    {
      imgSrc: "/postgresql.svg",
      label: "PostgreSQL",
      desc: "Database",
    },
    {
      imgSrc: "/github.svg",
      label: "GitHub",
      desc: "Version Control",
    },
    {
      imgSrc: "/postman.svg",
      label: "Postman",
      desc: "API Testing",
    },
    {
      imgSrc: "/bootstrap-fill.svg",
      label: "Bootstrap",
      desc: "CSS Framework",
    }
  ];

  return (
    <section className="pt-20 lg:pt-32">
      <div className="container lg:px-8 xl:max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl lg:text-4xl lg:leading-tight font-semibold bg-linear-[0deg,#fafafa,#a1a1aa] bg-clip-text text-transparent reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, Key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={Key} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
