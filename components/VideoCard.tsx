import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { PlayCircle } from 'react-feather';
import CustomVideo from '../CustomVideo';
import Typography from '../Typography';
import CustomImage from '../CustomImage';

interface IVideoCard {
  type?: string;
  modalHandle?: (videoId: string) => void;
  data?: Array<{
    image?: string;
    videoId?: string;
    title?: string;
    subtitle?: string;
  }>;
}

export default function VideoCard({ data, modalHandle, type = '' }: IVideoCard) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-16">
      {(data || []).map((item, index) => (
        <Card shadow="sm" key={`${item?.videoId}-${index}`}>
          <CardBody className="overflow-visible p-0">
            {type == 'image' ? (
              <CustomImage
                src={item?.image}
                className="h-full w-full object-cover"
                alt="video card image"
              />
            ) : (
              <CustomVideo id={item?.videoId}></CustomVideo>
            )}
          </CardBody>
          <CardFooter className="flex flex-col justify-between py-8 text-center text-small">
            <Typography variant="h5">
              <b>{item?.title}</b>
            </Typography>
            <Typography variant="h6" className="py-4 font-light leading-7">
              {item?.subtitle}
            </Typography>
            {type !== 'image' ? (
              <button
                className="group inline-flex items-center space-x-2"
                onClick={() => modalHandle(item?.videoId)}
              >
                <PlayCircle
                  width="30"
                  height="30"
                  className="transition-transform duration-100 ease-in-out group-hover:scale-125"
                />
                <Typography variant="span">Play Video</Typography>
              </button>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
