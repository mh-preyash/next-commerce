export const Routes = {
  home: '/',
  contactUs: '/contact-us',
  blog: '/blog',
  blogDetails: '/blog/[id]',
  commercialSales: '/commercial-sales',
  affiliate: '/commercial-sales/affiliate',
  aboutUs: '/info/about-us',
  faq: '/info/faq',
  info: '/info',
  infoDetails: '/info/[id]',
  gallery: '/gallery',
  installationInfo: '/info/installation-info',
  returnPolicy: '/info/return-policy',
  shippingInfo: '/info/shipping-info',
  warranty: '/info/warranty',
  signIn: '/sign-in',
  register: '/register',
  recover: '/recover',
  shop: '/shop',
  portable: '/info/portable-ballet-barres/',
  wallMounted: '/info/wall-mounted-ballet-barres/',
  floorMounted: '/info/floor-mounted-ballet-barres/',
  fitnessProducts: '/fitness-products/',
  barreParts: '/shop/portable-barre-parts/',

  prodigySeries: '/shop/portable-ballet-barres/prodigy-series/',
  professionalSeries: '/shop/portable-ballet-barres/professional-series',
  extremeSeries: '/shop/portable-ballet-barres/extreme-series',
  fitSeries: '/shop/portable-ballet-barres/fit-series',

  wallWood: '/wall-mounted-barres/wood-systems',
  wallAluminum: '/shop/wall-mounted-ballet-barres/wall-aluminum-systems',
  wallBarre: '/barre-material-2/',
  brackets: '/shop/wall-mounted-ballet-barres/brackets',

  floorWood: '/shop/floor-mounted-ballet-barres/floor-wood-systems',
  floorAluminum: '/shop/floor-mounted-ballet-barres/floor-aluminum-systems',
  floorBarre: '/shop/floor-mounted-ballet-barres/floor-barre-material',
  stanchions: '/shop/floor-mounted-ballet-barres/stanchions',
  escutcheonPlates: '/shop/floor-mounted-ballet-barres/escutcheon-plates',

  ballRacks: '/fitness-products/ball-racks',
  parallettes: '/shop/fitness-products/parallettes',
  pirouette: '/shop/fitness-products/pirouette',
  sitUpBars: '/shop/fitness-products/sit-up-bars',
  stallBars: '/shop/fitness-products/stall-bars-and-accessories',
  stretchLadder: '/fitness-products/stretch-ladder',

  barreProdigySeries: '/shop/portable-barre-parts/prodigy-series-part',
  barreProfessionalSeries: '/shop/portable-ballet-barres/professional-series',
  barreExtremeSeries: '/shop/portable-ballet-barres/extreme-series',
  barreFitSeries: '/shop/portable-ballet-barres/fit-series',
  carryBag: '/shop/fitness-products/carry-bag'
};

export const links = [
  {
    name: 'Shop',
    url: Routes.shop,
    subLinks: [
      { name: 'Portable Ballet Barres', url: Routes.portable },
      { name: 'Wall Mounted Ballet Barres', url: Routes.wallMounted },
      { name: 'Floor Mounted Ballet Barres', url: Routes.floorMounted },
      { name: 'Fitness Products', url: Routes.fitnessProducts },
      { name: 'Portable Barre Parts', url: Routes.barreParts }
    ]
  },
  {
    name: 'Commercial Sales',
    url: Routes.commercialSales,
    subLinks: [{ name: 'Affiliate Program', url: Routes.affiliate }]
  },
  {
    name: 'Info',
    url: Routes.info,
    subLinks: [
      { name: 'About Us', url: Routes.aboutUs },
      { name: 'Warranty', url: Routes.warranty },
      { name: 'Installation information', url: Routes.installationInfo },
      { name: 'Shipping Info', url: Routes.shippingInfo },
      { name: 'FAQ', url: Routes.faq },
      { name: 'Return Policy', url: Routes.returnPolicy }
    ]
  },
  { name: 'Blog', url: Routes.blog },
  { name: 'Gallery', url: Routes.gallery },
  { name: 'Contact us', url: Routes.contactUs }
];

export const mobileLinks = [
  {
    name: 'Portable Ballet Barres',
    url: Routes.portable,
    subLinks: [
      { name: 'All Portable Ballet Barres', url: Routes.portable },
      { name: 'Prodigy Series', url: Routes.prodigySeries },
      { name: 'Professional Series', url: Routes.professionalSeries },
      { name: 'Extreme Series', url: Routes.extremeSeries },
      { name: 'Fit Series', url: Routes.fitSeries }
    ]
  },
  {
    name: 'Wall Mounted Ballet Barres',
    url: Routes.wallMounted,
    subLinks: [
      { name: 'All Wall Mounted Ballet Barres', url: Routes.wallMounted },
      { name: 'Wall Wood Systems', url: Routes.wallWood },
      { name: 'Wall Aluminum Systems', url: Routes.wallAluminum },
      { name: 'Wall Barre Material', url: Routes.wallAluminum },
      { name: 'Brackets', url: Routes.brackets }
    ]
  },
  {
    name: 'Floor Mounted Ballet Barres',
    url: Routes.floorMounted,
    subLinks: [
      { name: 'All Floor Mounted Ballet Barres', url: Routes.floorMounted },
      { name: 'Floor Wood Systems', url: Routes.floorWood },
      { name: 'Floor Aluminum Systems', url: Routes.floorAluminum },
      { name: 'Floor Barre Material', url: Routes.floorBarre },
      { name: 'Stanchions', url: Routes.stanchions },
      { name: 'Escutcheon Plates', url: Routes.escutcheonPlates }
    ]
  },
  {
    name: 'Fitness Products',
    url: Routes.fitnessProducts,
    subLinks: [
      { name: 'All Fitness Products', url: Routes.fitnessProducts },
      { name: 'Ball Racks', url: Routes.ballRacks },
      { name: 'Parallettes', url: Routes.parallettes },
      { name: 'Pirouette', url: Routes.pirouette },
      { name: 'Sit Up Bars', url: Routes.sitUpBars },
      { name: 'Stall Bars and Accessories', url: Routes.stallBars },
      { name: 'Stretch Ladder', url: Routes.stretchLadder }
    ]
  },
  {
    name: 'Portable Barre Parts',
    url: Routes.barreParts,
    subLinks: [
      { name: 'All Portable Barre Parts', url: Routes.barreParts },
      { name: 'Prodigy Series', url: Routes.barreProdigySeries },
      { name: 'Professional Series Parts', url: Routes.barreProfessionalSeries },
      { name: 'Extreme Series Parts', url: Routes.barreExtremeSeries },
      { name: 'Fit Series Parts', url: Routes.barreFitSeries },
      { name: 'Carry Bag', url: Routes.carryBag }
    ]
  },
  {
    name: 'Commercial Sales',
    url: Routes.commercialSales,
    subLinks: [{ name: 'Affiliate Program', url: Routes.affiliate }]
  },
  {
    name: 'Info',
    url: Routes.info,
    subLinks: [
      { name: 'About Us', url: Routes.aboutUs },
      { name: 'Warranty', url: Routes.warranty },
      { name: 'Installation information', url: Routes.installationInfo },
      { name: 'Shipping Info', url: Routes.shippingInfo },
      { name: 'FAQ', url: Routes.faq },
      { name: 'Return Policy', url: Routes.returnPolicy }
    ]
  },
  { name: 'Blog', url: Routes.blog },
  { name: 'Gallery', url: Routes.gallery },
  { name: 'Contact us', url: Routes.contactUs },
  { name: 'Sign In', url: Routes.signIn },
  { name: 'Register', url: Routes.register }
];

export const footerData = [
  {
    section: 'CUSTOMER SERVICE',
    links: [
      {
        title: 'Payment Options',
        link: '/payment-options'
      },
      {
        title: 'Contact Us',
        link: '/contact-us'
      },
      {
        title: 'Return Policy',
        link: '/return-policy'
      },
      {
        title: 'FAQ',
        link: '/faq'
      },
      {
        title: 'Warranty',
        link: '/warranty'
      }
    ]
  },
  {
    section: 'INFORMATION',
    links: [
      {
        title: 'Instruction Sheets & Diagrams',
        link: '/installation-information'
      },
      {
        title: 'Terms & Conditions',
        link: '/terms-and-conditions'
      },
      {
        title: 'Domestic & International Shipping',
        link: '/shipping-information'
      },
      {
        title: 'About Us',
        link: '/about-us'
      },
      {
        title: 'Privacy Policy',
        link: '/privacy-policy'
      },
      {
        title: 'Sitemap',
        link: '/sitemap/categories'
      }
    ]
  }
];

export function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const addCommas = (num) =>
  num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : null;

export const countries = [
  {
    name: 'United States',
    dial_code: '+1',
    code: 'US',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg'
  },
  {
    name: 'Andorra',
    dial_code: '+376',
    code: 'AD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg'
  },
  {
    name: 'United Arab Emirates',
    dial_code: '+971',
    code: 'AE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg'
  },
  {
    name: 'Afghanistan',
    dial_code: '+93',
    code: 'AF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg'
  },
  {
    name: 'Antigua and Barbuda',
    dial_code: '+1268',
    code: 'AG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg'
  },
  {
    name: 'Anguilla',
    dial_code: '+1264',
    code: 'AI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg'
  },
  {
    name: 'Albania',
    dial_code: '+355',
    code: 'AL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg'
  },
  {
    name: 'Armenia',
    dial_code: '+374',
    code: 'AM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg'
  },
  {
    name: 'Angola',
    dial_code: '+244',
    code: 'AO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg'
  },
  {
    name: 'Antarctica',
    dial_code: '+672',
    code: 'AQ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg'
  },
  {
    name: 'Argentina',
    dial_code: '+54',
    code: 'AR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg'
  },
  {
    name: 'AmericanSamoa',
    dial_code: '+1684',
    code: 'AS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg'
  },
  {
    name: 'Austria',
    dial_code: '+43',
    code: 'AT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg'
  },
  {
    name: 'Australia',
    dial_code: '+61',
    code: 'AU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg'
  },
  {
    name: 'Aruba',
    dial_code: '+297',
    code: 'AW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg'
  },
  {
    name: 'Aland Islands',
    dial_code: '+358',
    code: 'AX',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg'
  },
  {
    name: 'Azerbaijan',
    dial_code: '+994',
    code: 'AZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg'
  },
  {
    name: 'Bosnia and Herzegovina',
    dial_code: '+387',
    code: 'BA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg'
  },
  {
    name: 'Barbados',
    dial_code: '+1246',
    code: 'BB',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg'
  },
  {
    name: 'Bangladesh',
    dial_code: '+880',
    code: 'BD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg'
  },
  {
    name: 'Belgium',
    dial_code: '+32',
    code: 'BE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg'
  },
  {
    name: 'Burkina Faso',
    dial_code: '+226',
    code: 'BF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg'
  },
  {
    name: 'Bulgaria',
    dial_code: '+359',
    code: 'BG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg'
  },
  {
    name: 'Bahrain',
    dial_code: '+973',
    code: 'BH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg'
  },
  {
    name: 'Burundi',
    dial_code: '+257',
    code: 'BI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg'
  },
  {
    name: 'Benin',
    dial_code: '+229',
    code: 'BJ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg'
  },
  {
    name: 'Saint Barthelemy',
    dial_code: '+590',
    code: 'BL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg'
  },
  {
    name: 'Bermuda',
    dial_code: '+1441',
    code: 'BM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg'
  },
  {
    name: 'Brunei Darussalam',
    dial_code: '+673',
    code: 'BN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg'
  },
  {
    name: 'Bolivia, Plurinational State of',
    dial_code: '+591',
    code: 'BO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg'
  },
  {
    name: 'Brazil',
    dial_code: '+55',
    code: 'BR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg'
  },
  {
    name: 'Bahamas',
    dial_code: '+1242',
    code: 'BS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg'
  },
  {
    name: 'Bhutan',
    dial_code: '+975',
    code: 'BT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg'
  },
  {
    name: 'Botswana',
    dial_code: '+267',
    code: 'BW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg'
  },
  {
    name: 'Belarus',
    dial_code: '+375',
    code: 'BY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg'
  },
  {
    name: 'Belize',
    dial_code: '+501',
    code: 'BZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg'
  },
  {
    name: 'Canada',
    dial_code: '+1',
    code: 'CA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg'
  },
  {
    name: 'Cocos (Keeling) Islands',
    dial_code: '+61',
    code: 'CC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg'
  },
  {
    name: 'Congo, The Democratic Republic of the Congo',
    dial_code: '+243',
    code: 'CD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg'
  },
  {
    name: 'Central African Republic',
    dial_code: '+236',
    code: 'CF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg'
  },
  {
    name: 'Congo',
    dial_code: '+242',
    code: 'CG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg'
  },
  {
    name: 'Switzerland',
    dial_code: '+41',
    code: 'CH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg'
  },
  {
    name: "Cote d'Ivoire",
    dial_code: '+225',
    code: 'CI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg'
  },
  {
    name: 'Cook Islands',
    dial_code: '+682',
    code: 'CK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg'
  },
  {
    name: 'Chile',
    dial_code: '+56',
    code: 'CL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg'
  },
  {
    name: 'Cameroon',
    dial_code: '+237',
    code: 'CM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg'
  },
  {
    name: 'China',
    dial_code: '+86',
    code: 'CN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg'
  },
  {
    name: 'Colombia',
    dial_code: '+57',
    code: 'CO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg'
  },
  {
    name: 'Costa Rica',
    dial_code: '+506',
    code: 'CR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg'
  },
  {
    name: 'Cuba',
    dial_code: '+53',
    code: 'CU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg'
  },
  {
    name: 'Cape Verde',
    dial_code: '+238',
    code: 'CV',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg'
  },
  {
    name: 'Christmas Island',
    dial_code: '+61',
    code: 'CX',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg'
  },
  {
    name: 'Cyprus',
    dial_code: '+357',
    code: 'CY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg'
  },
  {
    name: 'Czech Republic',
    dial_code: '+420',
    code: 'CZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg'
  },
  {
    name: 'Germany',
    dial_code: '+49',
    code: 'DE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg'
  },
  {
    name: 'Djibouti',
    dial_code: '+253',
    code: 'DJ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg'
  },
  {
    name: 'Denmark',
    dial_code: '+45',
    code: 'DK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg'
  },
  {
    name: 'Dominica',
    dial_code: '+1767',
    code: 'DM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg'
  },
  {
    name: 'Dominican Republic',
    dial_code: '+1849',
    code: 'DO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg'
  },
  {
    name: 'Algeria',
    dial_code: '+213',
    code: 'DZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg'
  },
  {
    name: 'Ecuador',
    dial_code: '+593',
    code: 'EC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg'
  },
  {
    name: 'Estonia',
    dial_code: '+372',
    code: 'EE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg'
  },
  {
    name: 'Egypt',
    dial_code: '+20',
    code: 'EG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg'
  },
  {
    name: 'Eritrea',
    dial_code: '+291',
    code: 'ER',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg'
  },
  {
    name: 'Spain',
    dial_code: '+34',
    code: 'ES',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg'
  },
  {
    name: 'Ethiopia',
    dial_code: '+251',
    code: 'ET',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg'
  },
  {
    name: 'Finland',
    dial_code: '+358',
    code: 'FI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg'
  },
  {
    name: 'Fiji',
    dial_code: '+679',
    code: 'FJ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    dial_code: '+500',
    code: 'FK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg'
  },
  {
    name: 'Micronesia, Federated States of Micronesia',
    dial_code: '+691',
    code: 'FM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg'
  },
  {
    name: 'Faroe Islands',
    dial_code: '+298',
    code: 'FO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg'
  },
  {
    name: 'France',
    dial_code: '+33',
    code: 'FR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg'
  },
  {
    name: 'Gabon',
    dial_code: '+241',
    code: 'GA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg'
  },
  {
    name: 'United Kingdom',
    dial_code: '+44',
    code: 'GB',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg'
  },
  {
    name: 'Grenada',
    dial_code: '+1473',
    code: 'GD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg'
  },
  {
    name: 'Georgia',
    dial_code: '+995',
    code: 'GE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg'
  },
  {
    name: 'French Guiana',
    dial_code: '+594',
    code: 'GF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg'
  },
  {
    name: 'Guernsey',
    dial_code: '+44',
    code: 'GG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg'
  },
  {
    name: 'Ghana',
    dial_code: '+233',
    code: 'GH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg'
  },
  {
    name: 'Gibraltar',
    dial_code: '+350',
    code: 'GI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg'
  },
  {
    name: 'Greenland',
    dial_code: '+299',
    code: 'GL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg'
  },
  {
    name: 'Gambia',
    dial_code: '+220',
    code: 'GM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg'
  },
  {
    name: 'Guinea',
    dial_code: '+224',
    code: 'GN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg'
  },
  {
    name: 'Guadeloupe',
    dial_code: '+590',
    code: 'GP',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg'
  },
  {
    name: 'Equatorial Guinea',
    dial_code: '+240',
    code: 'GQ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg'
  },
  {
    name: 'Greece',
    dial_code: '+30',
    code: 'GR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    dial_code: '+500',
    code: 'GS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg'
  },
  {
    name: 'Guatemala',
    dial_code: '+502',
    code: 'GT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg'
  },
  {
    name: 'Guam',
    dial_code: '+1671',
    code: 'GU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg'
  },
  {
    name: 'Guinea-Bissau',
    dial_code: '+245',
    code: 'GW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg'
  },
  {
    name: 'Guyana',
    dial_code: '+595',
    code: 'GY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg'
  },
  {
    name: 'Hong Kong',
    dial_code: '+852',
    code: 'HK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg'
  },
  {
    name: 'Honduras',
    dial_code: '+504',
    code: 'HN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg'
  },
  {
    name: 'Croatia',
    dial_code: '+385',
    code: 'HR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg'
  },
  {
    name: 'Haiti',
    dial_code: '+509',
    code: 'HT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg'
  },
  {
    name: 'Hungary',
    dial_code: '+36',
    code: 'HU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg'
  },
  {
    name: 'Indonesia',
    dial_code: '+62',
    code: 'ID',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg'
  },
  {
    name: 'Ireland',
    dial_code: '+353',
    code: 'IE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg'
  },
  {
    name: 'Israel',
    dial_code: '+972',
    code: 'IL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg'
  },
  {
    name: 'Isle of Man',
    dial_code: '+44',
    code: 'IM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg'
  },
  {
    name: 'India',
    dial_code: '+91',
    code: 'IN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg'
  },
  {
    name: 'British Indian Ocean Territory',
    dial_code: '+246',
    code: 'IO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg'
  },
  {
    name: 'Iraq',
    dial_code: '+964',
    code: 'IQ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg'
  },
  {
    name: 'Iran, Islamic Republic of Persian Gulf',
    dial_code: '+98',
    code: 'IR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg'
  },
  {
    name: 'Iceland',
    dial_code: '+354',
    code: 'IS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg'
  },
  {
    name: 'Italy',
    dial_code: '+39',
    code: 'IT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg'
  },
  {
    name: 'Jersey',
    dial_code: '+44',
    code: 'JE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg'
  },
  {
    name: 'Jamaica',
    dial_code: '+1876',
    code: 'JM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg'
  },
  {
    name: 'Jordan',
    dial_code: '+962',
    code: 'JO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg'
  },
  {
    name: 'Japan',
    dial_code: '+81',
    code: 'JP',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg'
  },
  {
    name: 'Kenya',
    dial_code: '+254',
    code: 'KE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg'
  },
  {
    name: 'Kyrgyzstan',
    dial_code: '+996',
    code: 'KG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg'
  },
  {
    name: 'Cambodia',
    dial_code: '+855',
    code: 'KH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg'
  },
  {
    name: 'Kiribati',
    dial_code: '+686',
    code: 'KI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg'
  },
  {
    name: 'Comoros',
    dial_code: '+269',
    code: 'KM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg'
  },
  {
    name: 'Saint Kitts and Nevis',
    dial_code: '+1869',
    code: 'KN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg'
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: '+850',
    code: 'KP',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg'
  },
  {
    name: 'Korea, Republic of South Korea',
    dial_code: '+82',
    code: 'KR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg'
  },
  {
    name: 'Kuwait',
    dial_code: '+965',
    code: 'KW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg'
  },
  {
    name: 'Cayman Islands',
    dial_code: '+ 345',
    code: 'KY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg'
  },
  {
    name: 'Kazakhstan',
    dial_code: '+77',
    code: 'KZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg'
  },
  {
    name: 'Laos',
    dial_code: '+856',
    code: 'LA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg'
  },
  {
    name: 'Lebanon',
    dial_code: '+961',
    code: 'LB',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg'
  },
  {
    name: 'Saint Lucia',
    dial_code: '+1758',
    code: 'LC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg'
  },
  {
    name: 'Liechtenstein',
    dial_code: '+423',
    code: 'LI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg'
  },
  {
    name: 'Sri Lanka',
    dial_code: '+94',
    code: 'LK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg'
  },
  {
    name: 'Liberia',
    dial_code: '+231',
    code: 'LR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg'
  },
  {
    name: 'Lesotho',
    dial_code: '+266',
    code: 'LS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg'
  },
  {
    name: 'Lithuania',
    dial_code: '+370',
    code: 'LT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg'
  },
  {
    name: 'Luxembourg',
    dial_code: '+352',
    code: 'LU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg'
  },
  {
    name: 'Latvia',
    dial_code: '+371',
    code: 'LV',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg'
  },
  {
    name: 'Libyan Arab Jamahiriya',
    dial_code: '+218',
    code: 'LY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg'
  },
  {
    name: 'Morocco',
    dial_code: '+212',
    code: 'MA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg'
  },
  {
    name: 'Monaco',
    dial_code: '+377',
    code: 'MC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg'
  },
  {
    name: 'Moldova',
    dial_code: '+373',
    code: 'MD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg'
  },
  {
    name: 'Montenegro',
    dial_code: '+382',
    code: 'ME',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg'
  },
  {
    name: 'Saint Martin',
    dial_code: '+590',
    code: 'MF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg'
  },
  {
    name: 'Madagascar',
    dial_code: '+261',
    code: 'MG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg'
  },
  {
    name: 'Marshall Islands',
    dial_code: '+692',
    code: 'MH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg'
  },
  {
    name: 'Macedonia',
    dial_code: '+389',
    code: 'MK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg'
  },
  {
    name: 'Mali',
    dial_code: '+223',
    code: 'ML',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg'
  },
  {
    name: 'Myanmar',
    dial_code: '+95',
    code: 'MM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg'
  },
  {
    name: 'Mongolia',
    dial_code: '+976',
    code: 'MN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg'
  },
  {
    name: 'Macao',
    dial_code: '+853',
    code: 'MO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg'
  },
  {
    name: 'Northern Mariana Islands',
    dial_code: '+1670',
    code: 'MP',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg'
  },
  {
    name: 'Martinique',
    dial_code: '+596',
    code: 'MQ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg'
  },
  {
    name: 'Mauritania',
    dial_code: '+222',
    code: 'MR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg'
  },
  {
    name: 'Montserrat',
    dial_code: '+1664',
    code: 'MS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg'
  },
  {
    name: 'Malta',
    dial_code: '+356',
    code: 'MT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg'
  },
  {
    name: 'Mauritius',
    dial_code: '+230',
    code: 'MU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg'
  },
  {
    name: 'Maldives',
    dial_code: '+960',
    code: 'MV',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg'
  },
  {
    name: 'Malawi',
    dial_code: '+265',
    code: 'MW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg'
  },
  {
    name: 'Mexico',
    dial_code: '+52',
    code: 'MX',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg'
  },
  {
    name: 'Malaysia',
    dial_code: '+60',
    code: 'MY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg'
  },
  {
    name: 'Mozambique',
    dial_code: '+258',
    code: 'MZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg'
  },
  {
    name: 'Namibia',
    dial_code: '+264',
    code: 'NA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg'
  },
  {
    name: 'New Caledonia',
    dial_code: '+687',
    code: 'NC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg'
  },
  {
    name: 'Niger',
    dial_code: '+227',
    code: 'NE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg'
  },
  {
    name: 'Norfolk Island',
    dial_code: '+672',
    code: 'NF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg'
  },
  {
    name: 'Nigeria',
    dial_code: '+234',
    code: 'NG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg'
  },
  {
    name: 'Nicaragua',
    dial_code: '+505',
    code: 'NI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg'
  },
  {
    name: 'Netherlands',
    dial_code: '+31',
    code: 'NL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg'
  },
  {
    name: 'Norway',
    dial_code: '+47',
    code: 'NO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg'
  },
  {
    name: 'Nepal',
    dial_code: '+977',
    code: 'NP',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg'
  },
  {
    name: 'Nauru',
    dial_code: '+674',
    code: 'NR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg'
  },
  {
    name: 'Niue',
    dial_code: '+683',
    code: 'NU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg'
  },
  {
    name: 'New Zealand',
    dial_code: '+64',
    code: 'NZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg'
  },
  {
    name: 'Oman',
    dial_code: '+968',
    code: 'OM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg'
  },
  {
    name: 'Panama',
    dial_code: '+507',
    code: 'PA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg'
  },
  {
    name: 'Peru',
    dial_code: '+51',
    code: 'PE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg'
  },
  {
    name: 'French Polynesia',
    dial_code: '+689',
    code: 'PF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg'
  },
  {
    name: 'Papua New Guinea',
    dial_code: '+675',
    code: 'PG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg'
  },
  {
    name: 'Philippines',
    dial_code: '+63',
    code: 'PH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg'
  },
  {
    name: 'Pakistan',
    dial_code: '+92',
    code: 'PK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg'
  },
  {
    name: 'Poland',
    dial_code: '+48',
    code: 'PL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg'
  },
  {
    name: 'Saint Pierre and Miquelon',
    dial_code: '+508',
    code: 'PM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg'
  },
  {
    name: 'Pitcairn',
    dial_code: '+872',
    code: 'PN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg'
  },
  {
    name: 'Puerto Rico',
    dial_code: '+1939',
    code: 'PR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg'
  },
  {
    name: 'Palestinian Territory, Occupied',
    dial_code: '+970',
    code: 'PS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg'
  },
  {
    name: 'Portugal',
    dial_code: '+351',
    code: 'PT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg'
  },
  {
    name: 'Palau',
    dial_code: '+680',
    code: 'PW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg'
  },
  {
    name: 'Paraguay',
    dial_code: '+595',
    code: 'PY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg'
  },
  {
    name: 'Qatar',
    dial_code: '+974',
    code: 'QA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg'
  },
  {
    name: 'Reunion',
    dial_code: '+262',
    code: 'RE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg'
  },
  {
    name: 'Romania',
    dial_code: '+40',
    code: 'RO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg'
  },
  {
    name: 'Serbia',
    dial_code: '+381',
    code: 'RS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg'
  },
  {
    name: 'Russia',
    dial_code: '+7',
    code: 'RU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg'
  },
  {
    name: 'Rwanda',
    dial_code: '+250',
    code: 'RW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg'
  },
  {
    name: 'Saudi Arabia',
    dial_code: '+966',
    code: 'SA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg'
  },
  {
    name: 'Solomon Islands',
    dial_code: '+677',
    code: 'SB',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg'
  },
  {
    name: 'Seychelles',
    dial_code: '+248',
    code: 'SC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg'
  },
  {
    name: 'Sudan',
    dial_code: '+249',
    code: 'SD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg'
  },
  {
    name: 'Sweden',
    dial_code: '+46',
    code: 'SE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg'
  },
  {
    name: 'Singapore',
    dial_code: '+65',
    code: 'SG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg'
  },
  {
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
    dial_code: '+290',
    code: 'SH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg'
  },
  {
    name: 'Slovenia',
    dial_code: '+386',
    code: 'SI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg'
  },
  {
    name: 'Svalbard and Jan Mayen',
    dial_code: '+47',
    code: 'SJ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg'
  },
  {
    name: 'Slovakia',
    dial_code: '+421',
    code: 'SK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg'
  },
  {
    name: 'Sierra Leone',
    dial_code: '+232',
    code: 'SL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg'
  },
  {
    name: 'San Marino',
    dial_code: '+378',
    code: 'SM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg'
  },
  {
    name: 'Senegal',
    dial_code: '+221',
    code: 'SN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg'
  },
  {
    name: 'Somalia',
    dial_code: '+252',
    code: 'SO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg'
  },
  {
    name: 'Suriname',
    dial_code: '+597',
    code: 'SR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg'
  },
  {
    name: 'South Sudan',
    dial_code: '+211',
    code: 'SS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg'
  },
  {
    name: 'Sao Tome and Principe',
    dial_code: '+239',
    code: 'ST',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg'
  },
  {
    name: 'El Salvador',
    dial_code: '+503',
    code: 'SV',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg'
  },
  {
    name: 'Syrian Arab Republic',
    dial_code: '+963',
    code: 'SY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg'
  },
  {
    name: 'Swaziland',
    dial_code: '+268',
    code: 'SZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg'
  },
  {
    name: 'Turks and Caicos Islands',
    dial_code: '+1649',
    code: 'TC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg'
  },
  {
    name: 'Chad',
    dial_code: '+235',
    code: 'TD',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg'
  },
  {
    name: 'Togo',
    dial_code: '+228',
    code: 'TG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg'
  },
  {
    name: 'Thailand',
    dial_code: '+66',
    code: 'TH',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg'
  },
  {
    name: 'Tajikistan',
    dial_code: '+992',
    code: 'TJ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg'
  },
  {
    name: 'Tokelau',
    dial_code: '+690',
    code: 'TK',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg'
  },
  {
    name: 'Timor-Leste',
    dial_code: '+670',
    code: 'TL',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg'
  },
  {
    name: 'Turkmenistan',
    dial_code: '+993',
    code: 'TM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg'
  },
  {
    name: 'Tunisia',
    dial_code: '+216',
    code: 'TN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg'
  },
  {
    name: 'Tonga',
    dial_code: '+676',
    code: 'TO',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg'
  },
  {
    name: 'Turkey',
    dial_code: '+90',
    code: 'TR',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg'
  },
  {
    name: 'Trinidad and Tobago',
    dial_code: '+1868',
    code: 'TT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg'
  },
  {
    name: 'Tuvalu',
    dial_code: '+688',
    code: 'TV',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg'
  },
  {
    name: 'Taiwan',
    dial_code: '+886',
    code: 'TW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg'
  },
  {
    name: 'Tanzania, United Republic of Tanzania',
    dial_code: '+255',
    code: 'TZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg'
  },
  {
    name: 'Ukraine',
    dial_code: '+380',
    code: 'UA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg'
  },
  {
    name: 'Uganda',
    dial_code: '+256',
    code: 'UG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg'
  },
  {
    name: 'Uruguay',
    dial_code: '+598',
    code: 'UY',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg'
  },
  {
    name: 'Uzbekistan',
    dial_code: '+998',
    code: 'UZ',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg'
  },
  {
    name: 'Holy See (Vatican City State)',
    dial_code: '+379',
    code: 'VA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    dial_code: '+1784',
    code: 'VC',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg'
  },
  {
    name: 'Venezuela, Bolivarian Republic of Venezuela',
    dial_code: '+58',
    code: 'VE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg'
  },
  {
    name: 'Virgin Islands, British',
    dial_code: '+1284',
    code: 'VG',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg'
  },
  {
    name: 'Virgin Islands, U.S.',
    dial_code: '+1340',
    code: 'VI',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg'
  },
  {
    name: 'Vietnam',
    dial_code: '+84',
    code: 'VN',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg'
  },
  {
    name: 'Vanuatu',
    dial_code: '+678',
    code: 'VU',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg'
  },
  {
    name: 'Wallis and Futuna',
    dial_code: '+681',
    code: 'WF',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg'
  },
  {
    name: 'Samoa',
    dial_code: '+685',
    code: 'WS',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg'
  },
  {
    name: 'Yemen',
    dial_code: '+967',
    code: 'YE',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg'
  },
  {
    name: 'Mayotte',
    dial_code: '+262',
    code: 'YT',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg'
  },
  {
    name: 'South Africa',
    dial_code: '+27',
    code: 'ZA',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg'
  },
  {
    name: 'Zambia',
    dial_code: '+260',
    code: 'ZM',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg'
  },
  {
    name: 'Zimbabwe',
    dial_code: '+263',
    code: 'ZW',
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg'
  }
];
