'use client';
import { Search } from 'react-feather';
import CustomImage from '../../components/CustomImage';
import CustomInput from '../../components/CustomInput';
import CustomLink from '../../components/CustomLink';
import Typography from '../../components/Typography';

export default function Blog() {
  return (
    <div className="mx-auto max-w-[940px] px-6">
      <header className="my-16 flex flex-wrap items-center justify-center space-x-8 border-b-2 border-t-2 py-4">
        <CustomLink href="#">Announcements</CustomLink>
        <CustomLink href="#">Features</CustomLink>
        <CustomLink href="#">Tips</CustomLink>
        <CustomInput
          type="text"
          variant="flat"
          className="mt-4 w-[250px] sm:mt-0"
          placeholder="Search"
          labelPlacement="outside"
          startContent={<Search />}
        />
      </header>
      <div className="flex space-x-4">
        <div className="w-full md:w-[calc(100%-300px)]">
          <CustomLink
            className="text-2xl font-extrabold tracking-tight text-primary hover:underline lg:text-3xl"
            href="/blog/downfall-of-adani-empire-hindenberg"
          >
            <Typography variant="h2" className="font-Barlow">
              Downfall of Adani Empire: Hindenberg report cause a loss of 3600 Crores
            </Typography>
          </CustomLink>
          <div className="text-truncate my-4 text-lg text-gray-700">
            Due to the publication of a report by Hindenburg Research, a financial research company
            well-known for its short-selling efforts, the Indian conglomerate Adani Group has
            recently made the news. According to the audit, the Adani Group misrepresented its
            financials to investors and engaged in questionable accounting procedures.
          </div>
        </div>
        <div className="relative hidden h-[200px] w-[300px] md:block">
          <CustomImage
            className="absolute inset-0 object-cover "
            src="/ing2.webp"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}
