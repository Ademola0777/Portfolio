import { ChevronRight, Blocks } from "lucide-react";

const Footer = () => {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Ademola0777",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/salaudeen-khaleed912571356",
    },
    {
      label: "Twitter X",
      href: "https://x.com/salaudeenkhale2",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/ademola0777",
    },
      {
        label: "Tiktok",
        href: "https://www.tiktok.com/@khaleed.dev",
      },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 lg:pt-32">
      <div className="container lg:px-8 xl:max-w-6xl px-4 mx-auto">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className=" reveal-up text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]  bg-linear-[0deg,#fafafa,#a1a1aa] bg-clip-text text-transparent max-w-[15ch] mb-8 lg:max-w-[12ch]">
              Let's build something great together!
            </h2>

            <button
              className="reveal-up flex items-center mb-6 gap-2 px-4 py-2 text-sm font-medium secondarybg cursor-pointer rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 text-zinc-800"
              href="mailto:salaudeenkhaleed882@gmail.com"
              label="Start Project"
            >
              Start Project
              {<ChevronRight size={20} />}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 reveal-up">
            <div>
              <div className="mb-2">
                <p>Sitemap</p>

                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div>
                <p className="mb-2 reveal-up">Socials</p>

                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <Blocks size={30} />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; {currentYear}{" "}
            <span className="text-zinc-200 "> Khaleed.dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
