import { useLocation } from "@remix-run/react";
import ContainerHOC from "./ContainerHOC";
import CustomVideo from "./CustomVideo";
import Typography from "./Typography";
import CustomImage from "./CustomImage";
import { Routes } from "../utilities/constants";

const paths = [Routes.home, Routes.ingredients];

export default function HeroSection({
  image = null,
  url = null,
  title = "",
  subtitle = "",
  titleCenter,
  iframe = true,
  iframeSrc = "",
}) {
  const location = useLocation();
  const isContactPage = location.pathname == Routes.contact;
  return (
    <div
      className={`relative w-full ${
        paths.includes(location.pathname)
          ? "lg:h-[85vh]"
          : `lg:h-[70vh] ${isContactPage ? "h-[25vh]" : "h-[35vh]"}`
      } border overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {url ? (
          <CustomVideo htmlVideo url={url} videoClasses="w-full" />
        ) : image ? (
          <CustomImage
            src={image}
            width="100%"
            className="h-full object-cover"
            alt={image}
            loading={"eager"}
          />
        ) : null}
        <div className="absolute inset-0 w-full h-full bg-primary opacity-50 z-10"></div>
      </div>
      <div className="relative w-full h-full bg-lightblue z-10 flex items-center">
        <ContainerHOC className="lg:max-w-full lg:w-[80vw] mx-auto mt-[70px] lg:mt-0 p-4 flex flex-col lg:flex-row items-center border-white z-10 text-white text-2xl">
          <div className="w-full lg:w-4/6 space-y-12 flex flex-col mx-auto">
            {titleCenter ? (
              <Typography
                variant="h1"
                className="text-white text-center w-full my-2"
              >
                {title}
              </Typography>
            ) : (
              <Typography
                variant="h1"
                className="text-white max-w-6xl lg:text-left text-center w-full my-2"
              >
                {title}
              </Typography>
            )}
            {titleCenter ? (
              <Typography
                variant="h4"
                className="text-white !leading-relaxed text-sm lg:text-2xl text-center !mt-0 font-Montserrat"
              >
                {subtitle}
              </Typography>
            ) : (
              <Typography
                variant="h4"
                className="text-white font-bold text-xs lg:text-2xl text-center lg:text-left !mt-0 !mb-6"
              >
                {subtitle}
              </Typography>
            )}
          </div>
          {iframe ? (
            <div className="w-full flex justify-center lg:justify-end lg:w-2/6">
              <iframe
                src={iframeSrc}
                allow="camera; microphone; autoplay; encrypted-media; fullscreen; display-capture;"
                className="border-none rounded-3xl lg:w-[90%] xl:w-[65%]  h-[60vh]"
              />
            </div>
          ) : null}
        </ContainerHOC>
      </div>
    </div>
  );
}
