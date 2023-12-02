import ContainerHOC from "./ContainerHOC";
import Typography from "./Typography";
import CustomInput from "./nextui/CustomInput";
import CustomButton from "./nextui/CustomButton";

export default function Subscribe() {
  return (
    <div className="w-full h-full border">
      <div className="py-10 flex items-center bg-primary text-white w-full h-[250px] rounded-none">
        <ContainerHOC className="space-y-4 md:space-y-0 xl:px-0 px-6 flex flex-wrap items-center justify-between">
          <div className="ld:gap-16 gap-6 grid grid-cols-1 lg:grid-cols-2">
            <div className="text-center">
              <Typography variant="h3" className="font-black">
                JOIN THE ENERGY CLEANSE COMMUNITY.
              </Typography>
              <Typography className=" mt-2">
                Get exclusive discounts and updates.
              </Typography>
            </div>
            <CustomInput
              size="lg"
              variant="bordered"
              className="w-full md:w-[400px] email mx-auto"
              placeholder="Your email address"
              endContent={
                <CustomButton
                  color="default"
                  variant="faded"
                  size="sm"
                  radius="sm"
                  className="!text-sm"
                >
                  Join & Save
                </CustomButton>
              }
            />
          </div>
        </ContainerHOC>
      </div>
    </div>
  );
}
