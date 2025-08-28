import { Blocks, Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 z-40">
        <div className="max-w-screen-2xl w-full mx-auto px-4 justify-between items-center flex md:px-6 md:grid md:[grid-template-columns:1fr_3fr_1fr]">
          <h1>
          <a href="#home">
            <Blocks size={30}/>
          </a>
          </h1>

          <div className="relative md:justify-self-center">
            <button
              className="sm:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl cursor-pointer hover:bg-zinc-50/20 transition-[transform,background-color] active:scale-95"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X /> : <Menu  />}
            </button>
            <Navbar navOpen={navOpen}/>
          </div>

          <a href="#contact" className="max-sm:hidden sm:justify-self-end bg-zinc-50 text-zinc-900  active:bg-zinc-50/80 rounded-xl text-sm font-medium  ring-zinc-50/5 ring-inset ring-1 max-w-max gap-2 p-2.5">
            Contact Me
          </a>
        </div>

        <h1></h1>
      </header>
    </div>
  );
};

export default Header;
