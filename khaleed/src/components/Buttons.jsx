import PropTypes from "prop-types";
import React from "react";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={
          "flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] h-11 secondarybg text-zinc-950 hover:bg-sky-300 active:bg-sky-400" +
          classes
        }
      >
        {label}
        {icon ? (
          <span className="w-[1em] h-[1em] overflow-hidden" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button
        className={
          "flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] h-11 secondarybg text-zinc-950 hover:bg-sky-300 active:bg-sky-400" +
          classes
        }
      >
        {label}
        {icon ? (
          <span className="w-[1em] h-[1em] overflow-hidden" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={
          "h-11 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc rounded-xl text-sm gap-2 flex items-center font-medium px-4 ring-inset ring-1" +
          classes
        }
      >
        {label}
        {icon ? (
          <span className="w-[1em] h-[1em] overflow-hidden" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button
        className={
          "h-11 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc rounded-xl text-sm gap-2 flex items-center font-medium px-4 ring-inset ring-1" +
          classes
        }
      >
        {label}
        {icon ? (
          <span className="w-[1em] h-[1em] overflow-hidden" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
