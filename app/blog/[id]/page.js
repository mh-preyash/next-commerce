import React from 'react';
import CustomImage from '../../../components/CustomImage';
import Typography from '../../../components/Typography';

export default function page() {
  return (
    <div className="mx-auto max-w-[940px] px-6">
      <div className="relative h-[200px] w-full">
        <CustomImage className="absolute inset-0 object-cover " src="/ing2.webp" fill />
      </div>
      <div className="text-truncate my-4 text-lg text-gray-700">
        <Typography variant="h1">The Beauty of Ballet Barres</Typography>
        <Typography variant="small" className="mb-8 mt-4">
          10/27/2023 12:00pm 2 minute read
        </Typography>
        <Typography>
          Due to the publication of a report by Hindenburg Research, a financial research company
          well-known for its short-selling efforts, the Indian conglomerate Adani Group has recently
          made the news. According to the audit, the Adani Group misrepresented its financials to
          investors and engaged in questionable accounting procedures.
        </Typography>
      </div>
    </div>
  );
}
