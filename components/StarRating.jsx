import {useState} from 'react';
import Typography from './Typography';

const StarRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star_rating">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={
              index <= (hover || rating) ? 'text-[#fcd53f]' : 'text-[#ccc]'
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Typography variant="h3">&#9733;</Typography>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
