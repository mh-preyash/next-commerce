import { Routes } from '../utils';
import ContainerHOC from './ContainerHOC';
import CustomImage from './CustomImage';
import CustomVideo from './CustomVideo';
import Typography from './Typography';

const paths = [Routes.home, Routes.ingredients];

export default function HeroSection({
  image = null,
  url = null,
  title = '',
  subtitle = '',
  titleCenter,
  iframe = true,
  iframeSrc = ''
}) {
  return (
    <div className={`relative mb-20 h-full w-full overflow-hidden border lg:h-[50vh]`}>
      <div className="absolute left-0 top-0 h-full w-full">
        {url ? (
          <CustomVideo htmlVideo url={url} videoClasses="w-full" />
        ) : image ? (
          <CustomImage
            src={image}
            width={1920}
            height={300}
            className="h-full object-cover"
            alt={image}
            loading={'eager'}
          />
        ) : null}
        <div className="absolute inset-0 z-10 h-full w-full bg-primary opacity-50"></div>
      </div>
      <div className="relative z-10 flex h-full w-full items-center">
        <ContainerHOC className="z-10 mx-auto flex flex-col items-center border-white p-4 text-2xl text-white lg:mt-0 lg:w-[80vw] lg:max-w-full lg:flex-row">
          <div className="mx-auto flex w-full flex-col space-y-12 lg:w-4/6">
            {titleCenter ? (
              <Typography variant="h1" className="my-2 w-full text-center text-white">
                {title}
              </Typography>
            ) : (
              <Typography
                variant="h1"
                className="my-2 w-full max-w-6xl text-center text-white lg:text-left"
              >
                {title}
              </Typography>
            )}
            {titleCenter ? (
              <Typography
                variant="h4"
                className="font-Montserrat !mt-0 text-center text-sm !leading-relaxed text-white lg:text-2xl"
              >
                {subtitle}
              </Typography>
            ) : (
              <Typography
                variant="h4"
                className="!mb-6 !mt-0 text-center text-xs text-white lg:text-left lg:text-2xl"
              >
                {subtitle}
              </Typography>
            )}
          </div>
          {iframe ? (
            <div className="hidden md:flex lg:w-2/6 lg:justify-end">
              <iframe
                src={iframeSrc}
                allow="camera; microphone; autoplay; encrypted-media; fullscreen; display-capture;"
                className="h-[60vh] rounded-3xl border-none lg:w-[90%] xl:w-[65%]"
              />
            </div>
          ) : null}
        </ContainerHOC>
      </div>
    </div>
  );
}
