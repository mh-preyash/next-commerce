import Typography from "./Typography";
import CustomButton from "./nextui/CustomButton";
import CustomImage from "./CustomImage";
import CustomInput from "./nextui/CustomInput";

export default function JoinCleanEnergyCommunityForm() {
  return (
    <div className="bg-[#C4DAF1] w-full">
      <div className="mx-6">
        <div className="max-w-[80rem] gap-12 lg:py-20 py-10 flex flex-col lg:flex-row mx-auto space-y-8 lg:space-y-0">
          <div className="w-full lg:w-4/6 space-y-6">
            <Typography variant="h3" className="montserrat font-bold">
              JOIN OUR CLEAN ENERGY COMMUNITY FOR:
            </Typography>
            <div className="p-5 md:text-2xl text-lg text-center text-white bg-primary">
              ENERGY CLEANSE GUIDE
            </div>
            <div className="p-5 md:text-2xl text-lg text-center text-white bg-primary">
              EXCLUSIVE DISCOUNTS
            </div>
            <div className="p-5 md:text-2xl text-lg text-center text-white bg-primary">
              PERSONALIZED TIPS
            </div>
            <Typography>
              Are you ready to join us on a transformation journey to revitalize
              your energy levels and embrace a healthier lifestyle?
            </Typography>
            <CustomInput variant="flat" label="Fullname" type="text" />
            <CustomInput variant="flat" label="Email" type="email" />
            <CustomButton>JOIN NOW</CustomButton>
          </div>
          <div className="mx-auto">
            <CustomImage
              src="/Energy-Cleanse-Book-Cover.webp"
              alt="Energy-Cleanse-Book-Cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
