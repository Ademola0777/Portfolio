import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = `${event.target.offsetTop}px`;
    activeBox.current.style.left = `${event.target.offsetLeft}px`;
    activeBox.current.style.width = `${event.target.offsetWidth}px`;
    activeBox.current.style.height = `${event.target.offsetHeight}px`;
  };
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Work",
      link: "#work",
    },
    {
      label: "Reviews",
      link: "#reviews",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "sm:hidden",
    },
  ];

  return (
    <nav
      className={`absolute top-full mt-2 right-0 min-w-[10rem] p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 isolate sm:sticky sm:flex sm:items-center sm:mt-0 sm:opacity-100 sm:blur-0 sm:visible sm:scale-100 ${
        navOpen
          ? "blur-none opacity-100 visible scale-100"
          : "backdrop-blur-2xl opacity-0 invisible"
      } transition-[opacity,transform,filter]`}
    >
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={`${className} grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors`}
          onClick={activeLink}
          ref={ref}
          key={key}
        >
          {label}
        </a>
      ))}

      <div
        className="absolute bg-zinc-50 rounded-lg -z-10 transition-[top,left] duration-500"
        ref={activeBox}
      ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
