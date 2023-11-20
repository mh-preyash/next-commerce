import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { PlayCircle } from "react-feather";
import CustomVideo from "../CustomVideo";
import Typography from "../Typography";
import CustomImage from "../CustomImage";

export default function VideoCard({ data, modalHandle, type = "" }) {
  return (
    <div className="xl:gap-16 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {(data || []).map((item, index) => (
        <Card shadow="sm" key={`${item?.videoId}-${index}`}>
          <CardBody className="overflow-visible p-0">
            {type == "image" ? (
              <CustomImage
                src={item?.image}
                className="w-full h-full object-cover"
                alt="video card image"
              />
            ) : (
              <CustomVideo id={item?.videoId}></CustomVideo>
            )}
          </CardBody>
          <CardFooter className="text-small flex flex-col justify-between text-center py-8">
            <Typography variant="h5">
              <b>{item?.title}</b>
            </Typography>
            <Typography variant="h6" className="leading-7 py-4 font-light">
              {item?.subtitle}
            </Typography>
            {type !== "image" ? (
              <button
                className="group items-center inline-flex space-x-2"
                onClick={() => modalHandle(item?.videoId)}
              >
                <PlayCircle
                  width="30"
                  height="30"
                  className="group-hover:scale-125 transition-transform duration-100 ease-in-out"
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
