import { ArrowDown, Download, Layers } from "lucide-react";
import { ButtonPrimary, ButtonOutline } from "../components/Buttons";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36 mt-auto lg:mt-20 lg:mb-20" id="home">
      <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-4">
            <figure className="bg-zinc-700 overflow-hidden w-9 h-9 rounded-lg ">
              <img
                src="/avaterdev2.webp"
                alt="Khaleed"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 inset-0 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]  bg-linear-[0deg,#fafafa,#a1a1aa] bg-clip-text text-transparent max-w-[15ch] sm:max-w[20ch] mt-5 mb-8">
            Crafting next-gen web experiences that grow with tomorrow
          </h2>

          <div className="flex items-center gap-4">
            <ButtonPrimary label="View Projects" href="#work" icon={<Layers size={15} />} />

            <ButtonOutline
              label="Scroll down"
              href="#about"
              icon={<ArrowDown size={16} />}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full maxw-[480px] ml-auto bg-gradient-to-t from-teal-300 via-20% via-teal-300/40 to 65% rounded-[50px] overflow-hidden">
            <img
              src="/portfolio-img.png"
              width={656}
              height={800}
              className="w-full"
              alt="Khaleed"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
