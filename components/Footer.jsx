import { footerData } from "../utils";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import SocialIcons from "./SocialIcons";
import Typography from "./Typography";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function Footer() {
  return (
    <footer className="w-full mx-auto bg-gray-200 text-gray-500">
      <div className="flex lg:flex-row flex-col">
        <div className="order-last lg:order-first lg:w-3/5 w-full flex flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:py-[80px] py-[40px] sm:px-[60px] px-6 bg-[#A8A7A8]">
            <div className="space-y-8 ">
              <CustomImage src="/vb_color.webp" width="100" height="100" />
              <CustomImage src="/st-judes-white.svg" width="100" height="100" />
            </div>
            {(footerData || []).map((i) => (
              <div key={i?.section} className="text-white">
                <Typography className="font-semibold uppercase">
                  {i?.section}
                </Typography>
                <div className="mt-3 grid space-y-3 text-sm">
                  {(i?.links || []).map((m) => (
                    <Typography key={m?.title} variant="span">
                      <CustomLink href={m?.link}>{m?.title}</CustomLink>
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#8F8E8F] h-full py-5 sm:px-[60px] px-6">
            <div className="flex flex-wrap items-center space-x-6 mb-3">
              <div className="flex items-center justify-center space-x-2">
                <CustomImage src="/vita_vibe.svg" width="30" height="30" />
                <CustomLink
                  isExternal
                  href="https://www.vitavibe.com/"
                  className="text-black"
                >
                  Formerly VitaVibe
                </CustomLink>
              </div>
              <CustomLink isExternal href="https://www.authorize.net/">
                <CustomImage
                  src="/authorizenet-new.webp"
                  width="50"
                  height="50"
                />
              </CustomLink>
              <CustomLink isExternal href="https://www.apple.com/apple-pay/">
                <CustomImage src="/apple-pay.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink isExternal href="https://pay.google.com/">
                <CustomImage src="/google-pay.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink isExternal href="https://www.discover.com/">
                <CustomImage src="/discover.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink isExternal href="https://www.paypal.com/us/home/">
                <CustomImage src="/paypal.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink
                isExternal
                href="https://www.mastercard.us/en-us.html"
              >
                <CustomImage src="/mastercard.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink isExternal href="https://usa.visa.com/home3.html/">
                <CustomImage src="/visa.webp" width="50" height="50" />
              </CustomLink>
              <CustomLink isExternal href="https://www.americanexpress.com/">
                <CustomImage src="/american.webp" width="50" height="50" />
              </CustomLink>
            </div>
            <Typography variant="span" className="text-white">
              © {new Date().getFullYear()} Vita, Inc. All rights reserved.
            </Typography>
          </div>
        </div>
        <div className="lg:w-2/5 w-full bg-[#002855] sm:py-[80px] py-[40px] sm:px-[60px] px-6 space-y-6">
          <div>
            <Typography className="!text-base text-[#5ca3b3]">
              STAY CONNECTED
            </Typography>
            <Typography className="!text-base text-white">
              for new product releases, sales, and promotions
            </Typography>
          </div>
          <div className="space-y-3">
            <CustomInput
              isRequired
              variant="underlined"
              label="Your email address"
              type="email"
              name="email"
            />
            <CustomButton>Sign Up</CustomButton>
          </div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
