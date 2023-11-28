'use client';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Card, CardBody } from '@nextui-org/react';
import { useState } from 'react';
import { Play } from 'react-feather';
import CustomButton from '../../components/CustomButton';
import CustomImage from '../../components/CustomImage';
import CustomInput from '../../components/CustomInput';
import CustomLink from '../../components/CustomLink';
import CustomModal from '../../components/CustomModal';
import CustomVideo from '../../components/CustomVideo';
import Typography from '../../components/Typography';

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
      <div className="flex flex-col items-center" key={i?.title}>
        {i?.icon}
        <h2 className="my-2 text-xl font-bold text-primary">{i?.title}</h2>
        <p className="text-sm">{i?.detail}</p>
      </div>
    ))}
  </>
);

const BrandBlock = ({ src, children, right }) => {
  const direction = right ? 'right-0 items-end text-right' : '';
  return (
    <div className="brandBlock relative">
      <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>
      <CustomImage src={src} width={640} height={335} />
      <div className={`absolute bottom-0 m-8 flex w-2/3 flex-col space-y-4 ${direction}`}>
        {children}
      </div>
    </div>
  );
};

const manufacturingSteps = [
  {
    title: 'DISCOVERY CONVERSATION',
    subtitle:
      'We start by listening to what you need and then brainstorming for potential solutions.'
  },
  {
    title: 'CREATE A MOCKUP',
    subtitle:
      'Whether your provide us with a back-of-the-napkin sketch or just an idea, we create a CAD drawing so that you can visualize how your product will look.'
  },
  {
    title: 'QUOTE DELIVERED',
    subtitle:
      'Once the mockups are approved, we create an estimate for you on the costs to manufacture your product(s).'
  },
  {
    title: 'MANUFACTURE & DELIVER PRODUCT',
    subtitle:
      'Upon approval, we manufacture your product and ship it directly to you for a turnkey solution.'
  }
];

export default function Page() {
  const size = useWindowSize();
  const [modal, setModal] = useState({ open: false, src: '' });

  const modalHandle = (data) => setModal({ open: data?.open, src: data?.src });

  const QuoteSection = ({ quote, person, yt }) => (
    <div className="flex items-center justify-between gap-8 rounded-md bg-[#F8F8FA] p-4 md:p-8">
      <div className="h-fit space-y-4">
        <i className="text-xl">“{quote}”</i>
        <br />
        <p className="text-[9px]">{person}</p>
      </div>
      <div
        className="video-icon h-[40px] w-[40px] flex-shrink-0 md:h-[70px] md:w-[70px]"
        onClick={() => modalHandle({ src: yt, open: true })}
      >
        <Play />
      </div>
    </div>
  );

  return (
    <main>
      {modal ? (
        <CustomModal modal={modal} setModal={setModal}>
          <CustomVideo url={modal?.src}></CustomVideo>
        </CustomModal>
      ) : null}
      <div className="banner-bg relative h-[800px] w-full bg-[url('/vita-0073.webp')] bg-cover bg-no-repeat first-letter:relative">
        <div className="mx-auto h-full w-full max-w-[1000px] px-6 py-20">
          <Typography variant="h4" className="uppercase text-[#5D89BA]">
            Commercial Sales
          </Typography>
          <Typography className="mb-8 uppercase text-primary">SUPPORTING SUCCESS</Typography>
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
      <div className="bg-white py-16">
        <Typography className="mx-auto max-w-2xl text-center text-2xl leading-tight text-[#9E1850] md:text-[20px] lg:text-[25px] xl:text-[40px]">
          <b>LONG-LASTING BARRE SOLUTIONS FOR SCHOOL DANCE PROGRAMS & FITNESS STUDIOS</b>
        </Typography>
        <br />
        <br />
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 lg:flex-row ">
          <div className="w-full lg:w-[60%]">
            <CustomImage className="w-full" src="/mask-group-15.webp" width={630} height={330} />
          </div>
          <div className="mx-auto w-full space-y-2 md:max-w-xl lg:w-[40%]">
            <Typography className="text-lg font-bold text-[#5D89BA]">
              FOR SCHOOLS & UNIVERSITIES
            </Typography>
            <Typography variant="h4" className="text-[26px] font-bold text-[#002855]">
              YOUR DANCER’S TRUSTED PARTNER, FOR LIFE
            </Typography>
            <Typography>
              Right from the beginning, Vita takes a consultative approach, considering your budget
              and layout and working with you to identify the right products for your program.
            </Typography>
            <br />
            <QuoteSection
              quote="VITA barres are esthetically beautiful. With their ideal thickness and weight, they make a
        young person feel very secure."
              person="THOMAS SHOEMAKER — DANCE INSTRUCTOR"
              yt="https://www.youtube.com/watch?v=cSC-DfIGkug&ab_channel=VitaInc"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 lg:flex-row ">
          <div className="order-1 w-full lg:order-2 lg:w-[60%]">
            <CustomImage src="/160054855.webp" className="w-full" width={630} height={330} />
          </div>
          <div className="order-2 mx-auto w-full space-y-2 md:max-w-xl lg:order-1 lg:w-[40%]">
            <Typography className="text-lg font-bold text-[#5D89BA]">
              FOR DANCE AND BARRE FITNESS STUDIOS
            </Typography>
            <Typography variant="h4" className="text-[26px] font-bold text-[#002855]">
              RETAIN MEMBERS AND EXPAND YOUR CLASSES
            </Typography>
            <Typography>
              Vita goes beyond to become your trusted partner for member retention and scale. We
              come alongside you, providing new ideas for expanding your offerings so that you
              satisfy and retain members and scale locations to grow your business.
            </Typography>
            <br />
            <QuoteSection
              quote="VITA helped us customize 9Round’s equipment for saftey and quality. Everything is
                  solid. And we’re very proud of it."
              person="SHANNON HUDSON — FOUNDER & CEO"
              yt="https://www.youtube.com/embed/s0KIFTmIu88?autoplay=1&rel=0"
            />
          </div>
        </div>
      </div>

      <div className="relative h-full w-full bg-[url('/group-202.webp')] bg-cover bg-center bg-no-repeat px-6">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 py-10 text-center md:py-20">
          <h2 className="text-xl font-semibold text-[#5D89BA] md:text-4xl">
            GET A PARTNER THAT’S TRUSTED BY MAJOR BRANDS
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-8 text-white">
            <Typography className="px-16 text-center md:text-left">
              Major brands continue to partner with Vita because of our ability to customize
              products and quickly scale manufacturing to meet market demand. Whether you want to
              create a custom color or logo combination like Beachbody, co-develop a unique product
              that expands your class offerings like Pure Barre, or establish a wholesale
              relationship like Pottery Barn, Vita is a partner you can count on.
            </Typography>
            <BrandBlock src="/purebarre_bg.webp" right>
              <CustomImage src="/pure_barre.webp" width={290} height={50} />
              <Typography>
                We provided all of the wall-mounted barres used in specific barre fitness routines
              </Typography>
            </BrandBlock>
            <BrandBlock src="/powerlife_bg.webp" right>
              <CustomImage src="/powerlife.webp" width={290} height={50} />
              <Typography>
                We created a unique, moveable floor-mounted barre system for their franchise
                locations.
              </Typography>
            </BrandBlock>
          </div>
          <div className="space-y-8 text-white">
            <BrandBlock src="/beachbody_bg.webp">
              <CustomImage src="/beachbody.webp" width={290} height={50} />
              <Typography>We created customized color options and branded equipment.</Typography>
            </BrandBlock>
            <BrandBlock src="/potterybarn_bg.webp">
              <CustomImage src="/potterybarn.webp" width={290} height={50} />
              <Typography>
                We provided a line of consumer-facing products that PB, PB Kids, and PB Teen could
                launch on their website.
              </Typography>
            </BrandBlock>
            <div className="px-16">
              <Typography className="text-center md:text-left">
                Have an idea? Need something out-of-the-box?
              </Typography>
              <br />
              <CustomLink href="#wehelp-block">
                <CustomButton>Let’s Create Together</CustomButton>
              </CustomLink>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 pb-10 pt-20 text-center md:pb-16 md:pt-40">
          <h2 className="text-xl font-semibold text-[#5D89BA] md:text-4xl">WHY CHOOSE VITA?</h2>
          <p className="mx-auto text-base leading-relaxed text-white lg:w-2/3">
            As the manufacturer of choice, Vita provides many advantages that make our products
            attractive to consumers and to our partners.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pb-16 text-white md:grid-cols-3 lg:grid-cols-6">
          <div className="space-y-10 text-center md:col-start-1 md:space-y-20 lg:col-start-2 lg:col-end-3">
            <Block data={vitaFeatures.slice(0, 3)} />
          </div>
          <div className="space-y-10 text-center md:col-start-3 md:space-y-20 lg:col-start-5 lg:col-end-6">
            <Block data={vitaFeatures.slice(3, 6)} />
          </div>
        </div>
      </div>

      <div className="relative h-full w-full bg-[url('/graph-paper.webp')] bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 px-6 py-16 md:grid-cols-2">
          <div className="z-10">
            <div className="max-w-xl">
              <Typography variant="h1" className="!leading-tight text-[#002857]">
                CUSTOM MANUFACTURING FROM CONCEPT TO COMPLETION
              </Typography>
              <Typography className="py-6">
                Do you have an idea you want to create for your dance program or fitness studio?
                Whether it’s sketched on a napkin or concepted out digitally, Vita can bring your
                idea to life and scale our manufacturing to meet the demand of your studio or
                franchise.
              </Typography>
            </div>
            <div className="ml-2 space-y-8 sm:ml-8">
              {(manufacturingSteps || []).map((i, j) => (
                <Card
                  key={i?.title}
                  style={{ marginLeft: size > 1024 ? 140 * j + 1 : 0 }}
                  className={`relative w-full overflow-visible border border-[#5D89BA] pb-[50px] pl-[55px] pr-[30px] pt-[45px] lg:w-[500px]`}
                >
                  <span className="absolute left-[-30px] flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#5D89BA] bg-white text-xl">
                    {j + 1}
                  </span>
                  <Typography variant="h4" className="my-3 w-full text-left font-bold text-primary">
                    {i?.title}
                  </Typography>
                  <Typography className="!text-base !leading-relaxed">{i?.subtitle}</Typography>
                </Card>
              ))}
            </div>
          </div>
          <br />
          <div className="z-0">
            <div className="space-y-8 ">
              <CustomImage
                className="static right-0 top-[250px] lg:absolute"
                src="/mask-group-13.webp"
                width={700}
                height={525}
              />
              <CustomImage
                className="static bottom-[30px] left-0 lg:absolute"
                src="/mask-group-14.webp"
                width={700}
                height={525}
              />
              {/* <div className="relative top-[250px] h-[525px] w-[700px]">
                <div className="absolute bottom-0 left-[25%] h-fit w-[305px] space-y-4 bg-[#DB277299] p-8 text-white">
                  <i>
                    “VITA helped us customize 9Round’s equipment for saftey and quality. Everything
                    is solid. And we’re very proud of it.”
                  </i>
                  <br />
                  <p className="text-[9px]">SHANNON HUDSON — FOUNDER & CEO</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
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
          <Card className={`w-full max-w-full border border-[#5D89BA] md:w-[550px]`}>
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
    </main>
  );
}
