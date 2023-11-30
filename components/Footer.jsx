'use client';
import { footerData } from '../utils';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import CustomInput from './CustomInput';
import CustomLink from './CustomLink';
import SocialIcons from './SocialIcons';
import Typography from './Typography';

export default function Footer() {
  return (
    <footer className="mx-auto w-full bg-gray-200 text-gray-500">
      <div className="flex flex-col lg:flex-row">
        <div className="order-last flex w-full flex-col lg:order-first lg:w-3/5">
          <div className="grid gap-6 bg-[#A8A7A8] px-6 py-[40px] sm:px-[60px] sm:py-[80px] md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-8 ">
              <CustomImage src="/vb_color.webp" width="100" height="100" />
              <CustomImage src="/st-judes-white.svg" width="100" height="100" />
            </div>
            {(footerData || []).map((i) => (
              <div key={i?.section}>
                <Typography className="font-semibold uppercase text-white">{i?.section}</Typography>
                <div className="mt-3 grid space-y-4 text-sm">
                  {(i?.links || []).map((m) => (
                    <Typography key={m?.title} variant="span" className="text-[16px]">
                      <CustomLink href={m?.link} className="text-white">
                        {m?.title}
                      </CustomLink>
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="h-full bg-[#8F8E8F] px-6 py-5 sm:px-[60px]">
            <div className="mb-3 flex flex-wrap items-center space-x-6">
              <div className="flex items-center justify-center space-x-2">
                <CustomImage src="/vita_vibe.svg" width="30" height="30" />
                <CustomLink isExternal href="https://www.vitavibe.com/" className="text-primary">
                  Formerly VitaVibe
                </CustomLink>
              </div>
              <CustomLink isExternal href="https://www.authorize.net/">
                <CustomImage src="/authorizenet-new.webp" width="50" height="50" />
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
              <CustomLink isExternal href="https://www.mastercard.us/en-us.html">
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
        <div className="w-full space-y-6 bg-[#002855] px-6 py-[40px] sm:px-[60px] sm:py-[80px] lg:w-2/5">
          <div>
            <Typography className="!text-base text-[#5ca3b3]">STAY CONNECTED</Typography>
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
