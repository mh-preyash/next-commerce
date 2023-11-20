'use client';
import { Link } from '@nextui-org/react';
import CustomLink from '../../../components/CustomLink';
import Typography from '../../../components/Typography';
import CustomAccordion from '../../../components/CustomAccordion';
import { Routes } from '../../../utils';

const accordionData = [
  {
    title: 'How is traffic from my site to yours tracked?',
    details:
      'Our website tracks the traffic based on where the traffic comes from. When installing the links provided from our “Create Links" section, our website knows all traffic coming from your domain name (i.e. www.yourdomainname.com) and assigns it to your affiliate id and follows this all the way to the completed sale.'
  },
  {
    title: 'How do I get “links" to place on my website?',
    details: (
      <div>
        There are two ways to place links on your website. Log-in to your Affiliate account and
        select "Create Links". You can place links using one of the two following procedures:
      </div>
    )
  },
  {
    title: 'How do I update personal information for my Affiliate account?',
    details:
      'Log-in to your Affiliate account and click on the “Account info" tab. Here you can update all your personal information. Make sure to click the “Update" button at the bottom of the page once you have completed your changes.'
  },
  {
    title: 'How do I know what "Clicks" have occurred on my site?',
    details:
      'Log-in to your Affiliate account and select the “Clicks Report" tab. Enter the timeframe you are wanting to see clicks and select if you want them reported by day or month.'
  },
  {
    title: 'How do I know what orders were placed from my site?',
    details:
      'Log-in to your Affiliate account and select the “Orders report". Enter the timeframe for your Orders. You can also select to run this report by specific months.'
  },
  {
    title: 'How can I contact you if my question is not listed above?',
    details: (
      <div>
        Click on the "<CustomLink href={Routes.contactUs}>Contact Us</CustomLink>" section found on
        the <CustomLink href={Routes.home}>VitaBarre</CustomLink> site.
      </div>
    )
  }
];

const ExistingAffiliate = () => (
  <div className="my-4">
    <Link
      isBlock
      isExternal
      color="primary"
      showAnchorIcon
      href="https://bc178.ositracker.com/myrefer"
    >
      Existing Affiliate Login
    </Link>
  </div>
);

export default function Page() {
  return (
    <div className="mx-auto max-w-[940px] px-6">
      <ExistingAffiliate />
      <Typography variant="h2">Join Our Affiliate Program</Typography>
      <div className="mt-6 space-y-4">
        <Typography>
          Does your business have a website? If so, we have a great opportunity for you to earn
          income by allowing your website visitors to visit Vitabarre.com and shop for products.
        </Typography>
        <Typography>
          By placing one of our custom, link banners on your website, all traffic from your site to
          Vitabarre.com is tracked, and if they purchase any products from our site, you can earn a
          10% commission on all products purchased.
        </Typography>
        <Typography>
          Commissions for all sales (less any returned products) will be paid on a quarterly basis.
        </Typography>
        <Typography>
          To get started, simply{' '}
          <CustomLink href="https://bc178.ositracker.com/myrefer" isExternal>
            click here
          </CustomLink>{' '}
          to fill out our sign up form.
        </Typography>
      </div>
      <br />
      <br />
      <Typography variant="h2" className="mb-6">
        Frequently Asked Questions
      </Typography>
      <CustomAccordion variant="splitted" selectionMode="multiple" accordionData={accordionData} />
      <ExistingAffiliate />
    </div>
  );
}
