import {Card, CardFooter} from '@nextui-org/react';
import StarIcon from './StarIcon';
import Typography from './Typography';

export default function ReviewCard({
  data,
  className,
  dark = false,
  shadow = 'sm',
  cols = 3,
}) {
  return (
    <div
      className={`gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-${cols}`}
    >
      {(data || []).map((item, index) => (
        <Card
          shadow={shadow}
          key={`${item?.title}-${index}`}
          className={className}
        >
          <CardFooter
            className={`${
              dark
                ? 'text-white bg-primary montserrat border-2 border-white'
                : 'text-black'
            } text-small flex flex-col items-start p-[50px] h-full`}
          >
            {item?.star ? (
              <div className="flex space-x-2">
                {[...Array(item?.star).keys()].map((star, innerIndex) => (
                  <StarIcon key={`${item?.title}-${index}-${innerIndex}`} />
                ))}
              </div>
            ) : null}
            <Typography
              variant="h4"
              className="text-left w-full font-bold mt-3 mb-6"
            >
              {item?.title}
            </Typography>
            <Typography className="!text-base !leading-relaxed">
              {item?.subtitle}
            </Typography>
            {item?.author ? (
              <Typography className="!text-base !leading-relaxed my-6">
                - {item?.author}
              </Typography>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
