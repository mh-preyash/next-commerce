import CustomImage from "../components/CustomImage";
import { CustomLink } from "../components/CustomLink";
import { Search } from "react-feather";
import Typography from "../components/Typography";
import CustomInput from "../components/nextui/CustomInput";

export default function Blog() {
  return (
    <div className="max-w-[940px] mx-auto px-6">
      <header className="my-16 flex flex-wrap items-center justify-center space-x-8 border-t-2 border-b-2 py-4">
        <CustomLink href="#">Announcements</CustomLink>
        <CustomLink href="#">Features</CustomLink>
        <CustomLink href="#">Tips</CustomLink>
        <CustomInput
          type="text"
          variant="flat"
          className="w-[250px] mt-4 sm:mt-0"
          placeholder="Search"
          labelPlacement="outside"
          startContent={<Search />}
        />
      </header>
      <div class="flex space-x-4">
        <div class="w-full md:w-[calc(100%-300px)]">
          <CustomLink
            class="text-2xl lg:text-3xl tracking-tight font-extrabold text-black hover:underline"
            href="/blog/downfall-of-adani-empire-hindenberg"
          >
            <Typography variant="h2" className="font-Barlow">
              Downfall of Adani Empire: Hindenberg report cause a loss of 3600
              Crores
            </Typography>
          </CustomLink>
          <div class="my-4 text-lg text-gray-700 text-truncate">
            Due to the publication of a report by Hindenburg Research, a
            financial research company well-known for its short-selling efforts,
            the Indian conglomerate Adani Group has recently made the news.
            According to the audit, the Adani Group misrepresented its
            financials to investors and engaged in questionable accounting
            procedures.
          </div>
        </div>
        <div class="relative w-[300px] h-[200px] hidden md:block">
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
