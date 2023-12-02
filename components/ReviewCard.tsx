import { Card, CardFooter } from '@nextui-org/react';
import { CheckCircle } from 'react-feather';
import StarIcon from './StarIcon';
import Typography from './Typography';

interface IReviewCard {
  data?: Array<{
    title: string;
    subtitle: string;
    star: boolean;
  }>;
  cols?: number;
  shadow?: 'sm' | 'md' | 'lg' | 'none' | undefined;
  dark?: boolean;
  className?: string;
}

export default function ReviewCard({ data, className, shadow = 'sm', cols = 3 }: IReviewCard) {
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-${cols}`}>
      {(data || []).map((item, index) => (
        <Card key={`${item?.title}-${index}`} shadow={shadow} className={className}>
          <CardFooter
            className={`flex h-full flex-col items-start p-[50px] text-small text-primary`}
          >
            <Typography className="flex items-center space-x-2 font-semibold text-[#131313]">
              <span>John Doe</span>
              {true ? <CheckCircle className="h-4 w-4 " /> : null}
            </Typography>
            <Typography
              variant="small"
              className="mb-2 mt-1 flex items-center space-x-2 font-semibold text-slate-400"
            >
              12/18/23
            </Typography>
            {item?.star ? (
              <div className="flex space-x-1">
                {[...Array(item?.star).keys()].map((star, innerIndex) => (
                  <StarIcon key={`${item?.title}-${index}-${innerIndex}`} />
                ))}
              </div>
            ) : null}
            <Typography variant="h5" className="my-3 w-full text-left font-bold">
              {item?.title}
            </Typography>
            <Typography className="!text-base !leading-relaxed">{item?.subtitle}</Typography>
            {/* {item?.author ? (
              <Typography className="my-6 !text-base !leading-relaxed">- {item?.author}</Typography>
            ) : null} */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
