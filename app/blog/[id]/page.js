import React from "react";
import { CustomLink } from "../../components/CustomLink";
import Typography from "../../components/Typography";
import CustomImage from "../../components/CustomImage";

export default function page() {
  return (
    <div className="max-w-[940px] mx-auto px-6">
      <div class="relative w-full h-[200px]">
        <CustomImage
          className="absolute inset-0 object-cover "
          src="/ing2.webp"
          fill
        />
      </div>
      <div class="my-4 text-lg text-gray-700 text-truncate">
        <Typography variant="h1">The Beauty of Ballet Barres</Typography>
        <Typography variant="small" className="mt-4 mb-8">
          10/27/2023 12:00pm 2 minute read
        </Typography>
        <Typography>
          Due to the publication of a report by Hindenburg Research, a financial
          research company well-known for its short-selling efforts, the Indian
          conglomerate Adani Group has recently made the news. According to the
          audit, the Adani Group misrepresented its financials to investors and
          engaged in questionable accounting procedures.
        </Typography>
      </div>
    </div>
  );
}
