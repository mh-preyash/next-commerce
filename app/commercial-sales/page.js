'use client';
import React from 'react';
import Typography from '../../components/Typography';
import CustomImage from '../../components/CustomImage';
import CustomButton from '../../components/CustomButton';
import CustomLink from '../../components/CustomLink';
import { Card, CardBody } from '@nextui-org/react';
import CustomInput from '../../components/CustomInput';

const vitaFeatures = [
  {
    icon: <CustomImage src="/fitness-biceps.webp" width={40} height={40} />,
    title: 'DURABLE',
    detail: 'We only use high-quality woods and metals for a durable, long-lasting product.'
  },
  {
    icon: <CustomImage src="/award-ribbon-star.webp" width={32} height={46} />,
    title: '10-YEAR WARRANTY',
    detail:
      'We stand behind our products with a 10-year warranty. If you have any problem, we’ll make it right.'
  },
  {
    icon: <CustomImage src="/famous-character-star-badge.webp" width={40} height={40} />,
    title: 'MADE IN THE USA',
    detail:
      'Our products are handcrafted in South Carolina, USA using only high-quality woods and steel for better performance, year after year.'
  },
  {
    icon: <CustomImage src="/cursor-choose.webp" width={40} height={40} />,
    title: 'CUSTOMIZABLE',
    detail:
      'Customize your workout accessory with a variety of sizes, materials, and options for engraving.'
  },
  {
    icon: <CustomImage src="/tools-wench-hold.webp" width={40} height={40} />,
    title: 'EASY TO INSTALL',
    detail:
      'We make it easy to install our products. Everything you need is included in the box so that you can jump right into your first workout.'
  },
  {
    icon: <CustomImage src="/reception-bell-call.webp" width={40} height={40} />,
    title: 'HIGHER-LEVEL CUSTOMER SERVICE',
    detail:
      'We know our customers, support them with care and personalized attention, and put them first in every interaction.'
  }
];

const Block = ({ data }) => (
  <>
    {(data || []).map((i) => (
      <div class="flex flex-col items-center" key={i?.title}>
        {i?.icon}
        <h2 class="my-2 text-xl font-bold text-primary">{i?.title}</h2>
        <p class="text-sm">{i?.detail}</p>
      </div>
    ))}
  </>
);

export default function Page() {
  return (
    <main>
      <div className="banner-bg relative h-[800px] w-full bg-[url('/vita-0073.webp')] bg-cover bg-no-repeat first-letter:relative">
        <div className="mx-auto h-full w-full max-w-[1000px] px-6 py-20">
          <Typography variant="h4" className="uppercase text-[#5D89BA]">
            Commercial Sales
          </Typography>
          <Typography variant="h1" className="mb-8 uppercase text-primary">
            SUPPORTING SUCCESS
          </Typography>
          <div className="z-10 flex max-w-full flex-col gap-8 text-white md:max-w-xl">
            <Typography variant="h2">SUPPORTING SUCCESS</Typography>
            <Typography>
              As the largest U.S. manufacturer of ballet bars and fitness equipment, Vita’s barres
              have become the products of choice for dance professionals and for major brands who
              want only the best for their members.
            </Typography>
            <Typography>
              Our wide array of long-lasting barres is backed by a responsive in-house support team,
              making it easy to scale and giving your program an instant lift that differentiates
              you from competitors.
            </Typography>
            <div>
              <br />
              <CustomButton color="default" className="w-full sm:w-auto">
                <CustomLink href="#manufacturing-block">
                  Learn More About Custom Manufacturing
                </CustomLink>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section class="body-font text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-24">
            <div class="mb-20 flex w-full flex-wrap justify-center">
              <h2 class="max-w-2xl text-[40px] font-semibold text-[#5D89BA]">
                GET A PARTNER THAT’S TRUSTED BY MAJOR BRANDS
              </h2>
            </div>
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src="https://dummyimage.com/503x303"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative h-[2375px] w-full bg-[url('/group-202.webp')] bg-cover bg-center bg-no-repeat px-6">
        <div class="mx-auto flex w-full max-w-2xl flex-col gap-2 py-10 text-center md:py-20">
          <h2 class="text-xl font-semibold text-[#5D89BA] md:text-4xl">WHY CHOOSE VITA?</h2>
          <p class="mx-auto text-base leading-relaxed text-white lg:w-2/3">
            As the manufacturer of choice, Vita provides many advantages that make our products
            attractive to consumers and to our partners.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 text-white md:grid-cols-3 lg:grid-cols-6">
          <div class="space-y-10 text-center md:col-start-1 md:space-y-20 lg:col-start-2 lg:col-end-3">
            <Block data={vitaFeatures.slice(0, 3)} />
          </div>
          <div class="space-y-10 text-center md:col-start-3 md:space-y-20 lg:col-start-5 lg:col-end-6">
            <Block data={vitaFeatures.slice(3, 6)} />
          </div>
        </div>
      </div>

      <div className="relative h-full w-full bg-[url('/graph-paper.webp')] bg-cover bg-center bg-no-repeat px-6">
        <Typography variant="h1" className="text-[#002857]">
          CUSTOM MANUFACTURING FROM CONCEPT TO COMPLETION
        </Typography>
        <Typography>
          Do you have an idea you want to create for your dance program or fitness studio? Whether
          it’s sketched on a napkin or concepted out digitally, Vita can bring your idea to life and
          scale our manufacturing to meet the demand of your studio or franchise.
        </Typography>

        {/* <div class="mx-auto flex w-full max-w-2xl flex-col gap-2 py-10 text-center md:py-20">
          <h2 class="text-xl font-semibold text-[#5D89BA] md:text-4xl">WHY CHOOSE VITA?</h2>
          <p class="mx-auto text-base leading-relaxed text-white lg:w-2/3">
            As the manufacturer of choice, Vita provides many advantages that make our products
            attractive to consumers and to our partners.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 text-white md:grid-cols-3 lg:grid-cols-6">
          <div class="space-y-10 text-center md:col-start-1 md:space-y-20 lg:col-start-2 lg:col-end-3">
            <Block data={vitaFeatures.slice(0, 3)} />
          </div>
          <div class="space-y-10 text-center md:col-start-3 md:space-y-20 lg:col-start-5 lg:col-end-6">
            <Block data={vitaFeatures.slice(3, 6)} />
          </div>
        </div> */}
      </div>

      {/* <div className="relative">
        <CustomImage src="/group-202.webp" width={1900} height={2258} />
        <div className="text-white">aweowjawijehopj</div>
      </div> */}

      <div className="relative flex flex-col items-center bg-[#F1F5F9]">
        <Typography variant="h2" className="pt-10 text-[#9E1850]">
          HOW CAN WE HELP?
        </Typography>
        <CustomImage
          src="/vita-0098.webp"
          width={1200}
          height={530}
          className="absolute bottom-0 left-0 z-[1]"
        />
        <div className="z-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-4 px-6 py-10 lg:flex-row  lg:items-start">
          <div className="flex w-full flex-col items-start gap-6 sm:flex-row lg:w-4/12">
            <CustomImage src="/book_cover.webp" width={170} height={244} />
            <div className="flex flex-col">
              <Typography>
                Download our Digital Brochure to find out all that VITA has to offer.
              </Typography>
              <div>
                <CustomButton>Download Brochure</CustomButton>
              </div>
            </div>
          </div>
          <Card className={`w-full max-w-full md:w-[550px]`}>
            <CardBody className="overflow-hidden p-8">
              <Typography>
                Tell us what you need and we’ll see how we can help. Give our sales team a call at{' '}
                <CustomLink href="tel:(864) 535-3086">(864) 535-3086</CustomLink> or fill out the
                form below:
              </Typography>
              <br />
              <form method="POST" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CustomInput variant="flat" label="First Name" type="text" name="firstName" />
                  <CustomInput variant="flat" label="Last Name" type="text" name="lastName" />
                </div>
                <CustomInput variant="flat" label="Company Name" type="text" name="companyName" />
                <CustomInput variant="flat" label="Email Address" type="email" name="email" />
                <CustomInput variant="flat" label="Phone Number" type="number" name="phoneNumber" />
                <CustomInput variant="flat" label="Message" type="number" name="message" />
                <br />
                <CustomButton radius="sm" fullWidth color="primary" type="submit">
                  Create Account
                </CustomButton>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* <CustomImage src="/graph-paper.webp" width={40} height={40} /> */}
      <CustomImage src="/mask-group-13.webp" width={800} height={600} />
      <CustomImage src="/mask-group-14.webp" width={800} height={600} />

      <CustomImage src="/vitavibe-cinnabar-new.webp" width={220} height={35} />
      <CustomImage src="/book_cover.webp" width={170} height={245} />
      <CustomImage src="/potterybarn.webp" width={630} height={330} />
      <CustomImage src="/powerlife.webp" width={630} height={330} />
      <CustomImage src="/pure_barre.webp" width={630} height={330} />
      <CustomImage src="/beachbody.webp" width={630} height={330} />

      <CustomImage src="/160054855.webp" width={630} height={330} />
      <CustomImage src="/mask-group-15.webp" width={630} height={330} />
      <CustomImage src="/beachbody-logo.webp" width={350} height={36} />

      <CustomImage src="/usa-about-us.webp" width={130} height={50} />
    </main>
  );
}
