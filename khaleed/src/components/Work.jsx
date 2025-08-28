import ProjectCard from "../components/ProjectCard";
const works = [
  {
    imgSrc: "/Coming Soon!.jpg",
    title: "Full stack music app",
    tags: ["TypeScript", "PostgreSQL", "NextJs", "TailwindCSS"],
    projectLink: "",
  },

  {
    imgSrc: "/jobportal.jpg",
    title: "Job Portal website",
    tags: ["React", "TailwindCSS", "NodeJS", "MongoDB", "ExpressJS"],
    projectLink: "https://job-portal-frontend-livid.vercel.app",
  },
  {
    imgSrc: "/console-lyrics.jpg",
    title: "Console Lyrics",
    tags: ["JavaScript"],
    projectLink: "https://github.com/Ademola0777/console-lyrics",
  },
  {
    imgSrc: "/landing.jpg",
    title: "Landing Page",
    tags: ["Bootstrap", "Css", "HTML"],
    projectLink: "https://pluralcode-assignment.pages.dev",
  },
  {
    imgSrc: "/portfolio.png",
    title: "vCard Personal portfolio",
    tags: ["Bootstrap", "CSS", "HTML"],
    projectLink: "https://pluralcode-assignments.pages.dev",
  },
];
const Work = () => {
  return (
    <section id="work" className="pt-20 lg:pt-32">
      <div className="container lg:px-8 xl:max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl lg:text-4xl lg:leading-tight font-semibold bg-linear-[0deg,#fafafa,#a1a1aa] bg-clip-text text-transparent mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
