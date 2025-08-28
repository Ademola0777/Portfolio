import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="bg-zinc-700  img-box cursor-pointer mb-4 overflow-hidden rounded-lg aspect-square">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4 mt-4">
        <div>
          <h3 className="text-[22px] font-normal mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center secondarybg text-zinc-950 shrink-0">
          <span
            className="
"
            aria-hidden="true"
          >
            <ArrowUpRight />
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        className="absolute inset-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title}`}
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
