import { Suspense, lazy } from 'react';
import { Routes } from '../utilities/constants';
import { CustomLink } from './CustomLink';
import { LazyLoadComponent } from './LazyLoadComponent';
import Typography from './Typography';
import CustomButton from './nextui/CustomButton';
const JoinCleanEnergyCommunityForm = lazy(() => import('./JoinCleanEnergyCommunityForm'));

const cleanseBenefits = [
  'Increase Energy',
  'Revamp Vitality',
  'Enhance Mental Clarity',
  'Improve Focus',
  'Balance Body',
  'Boost Immune System',
  'Fix Caffeine Efficacy'
];

export default function CommonCleanseData() {
  return (
    <>
      <LazyLoadComponent>
        <Suspense fallback="">
          <JoinCleanEnergyCommunityForm />
        </Suspense>
      </LazyLoadComponent>
      <div className="bg-white">
        <div className="mx-6">
          <div className="mx-auto flex max-w-[80rem] flex-col justify-between space-y-8 py-10 md:flex-row md:space-y-0 md:py-20">
            <div className="w-full space-y-6 md:w-3/5">
              <Typography variant="h4" className="montserrat font-bold">
                HOW DOES THE CLEAN ENERGY CLEANSE WORK?
              </Typography>
              <Typography variant="h6" className="font-light">
                With a focus on clean and natural energy source, our comprehensive guide provides a
                holistic approach to cleansing and revitalizing you system.
              </Typography>
              <Typography variant="h4" className="montserrat font-bold">
                ENERGY CLEANSE BENEFITS
              </Typography>
              <ul className="ml-8">
                {(cleanseBenefits || []).map((i) => (
                  <li key={i} className="list-disc">
                    <Typography variant="h6" className="font-light">
                      {i}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="h6" className="font-light">
                If you have more questions, feel fee to reach out to us or ask a question here
              </Typography>
              <br />
              <CustomLink isExternal to={Routes.cleanse}>
                <CustomButton className="bg-primary text-lg">LEARN MORE</CustomButton>
              </CustomLink>
            </div>
            <div className="mx-auto md:mx-0">
              <iframe
                src="https://www.videoask.com/f6hbevwx7"
                allow="camera ; microphone ; autoplay ; encrypted-media ; fullscreen ; display-capture ;"
                className="h-[600px] rounded-3xl border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
