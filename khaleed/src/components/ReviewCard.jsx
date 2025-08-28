import { Star } from "lucide-react";
import PropTypes from "prop-types";

const ReviewCard = ({ imgSrc, content, name, company}) => {
  const ratings = new Array(5);
  ratings.fill({
    icon: <Star fill="yellow" color="yellow" size={18}/>,
    style: {
      fontVariationSettings: '"FILL" 1',
    },
  });

  return (
    <section 
      className='rounded-xl min-w-[320px] p-5 flex flex-col lg:min-w-[420px] bg-zinc-800'
    >
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span key={key} style={style}>
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className=" bg-zinc-700 overflow-hidden rounded-lg aspect-square">
          <img
            src={imgSrc}
            alt={name}
            height={44}
            width={44}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        <div>
          <p>{name}</p>  

          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>

        
      

      
    </section>
  );
};

ReviewCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
