import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = [
    'BIGCOMMERCE_CANONICAL_STORE_DOMAIN',
    'BIGCOMMERCE_ACCESS_TOKEN',
    'BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN'
  ];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    );
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    );
  }
};

export const REVIEWS_PAGE_REVIEWS_DATA = [
  {
    star: 5,
    title: 'NICE TASTE.',
    subtitle: `“I like the taste of these better than the cherry pomegranate ones. This is a big shot 2.5 ounces and did not make me jittery when used. Overall a nice option compared to all the high sugar ones on the market.”`,
    author: 'J.S.'
  },
  {
    star: 5,
    title: 'DECENT FLAVOR. EXCELLENT ENERGY.',
    subtitle: `“This energy shot had decent blueberry flavor and it provided an excellent amount of energy that I needed for my mid-day pick-me-up. Best having it chilled and very easy to consume. Simple and it works; what more can I say.”`,
    author: 'E.C.'
  },
  {
    star: 4,
    title: 'GREAT BOOST!',
    subtitle: `“These are expensive energy shots, but they really get me going without being overkill and giving me the jitters. The flavor is tasty and benefits from being chilled. I’m comfortable taking these shots to boost my energy levels in the afternoon and I don’t have a crash later and am not kept up late into the night.”`,
    author: 'KORT'
  },
  {
    star: 5,
    title: 'DELICIOUS QUICK ENERGY AND VITAMIN BOOST.',
    subtitle: `“Say goodbye to your morning coffee with this healthy energy burst! This is wonderful to have if you have an ever changing schedule like I do in care giving. It helps me wake up and stay alert at whatever hour I need to be present. The ingredients are all God-made energy boosters and much better for you than strong coffee or tea which doesn’t work as well or last as long. I love that it is sugar free!”`,
    author: 'GYAOH'
  },
  {
    star: 5,
    title: 'INSTANT WOW.',
    subtitle: `“🍃 I was expecting this to taste a little like cough syrup. But it didn’t and was a pleasant cherry flavor, and was easy to drink. I only drank half, and soon after I got an instant burst of energy. No jitters, (even on an empty stomach) and it had me moving all morning! I love that it’s all natural. End it actually helped me decrease my appetite right up until the afternoon. I feel that this will also assist me with my goal of losing a few pounds. I will definitely be buying more of this in the future! I highly recommend. 👍👍”`,
    author: 'CINDY'
  },
  {
    star: 4,
    title: 'LIKE MOST ENERGY SHOTS BUT WITH A HEALTHIER SOURCE OF ENERGY.',
    subtitle: `“These are powered with Yerba Mate, which is one of a few botanical sources of caffeine that is definitely smoother than caffeine from coffee beans. Yerba Mate is a very popular beverage in South America, and is their favorite source of caffeine. It is usually prepared and consumed from a gourd made beverage cup. As a big consumer of all things caffeine, I wanted to explore some of the alternatives. While I am not giving up my coffee just yet, there are noticeable differences and benefits from the alternative types of caffeine. There is definitely less jitters and less post use crash. This is an excellent way to try an energy boost shot with an alternative source of energy.”`,
    author: 'MSA'
  },
  {
    star: 4,
    title: 'REPLACED MORNING CUP OF COFFEE.',
    subtitle: `“In blind taste test I would not guess blueberry. Maybe would guess slightly tart fruit something. That said, did feel little energized with one bottle shot.”`,
    author: 'M.H.P.'
  },
  {
    star: 5,
    title: 'THESE DID PERK ME UP ACTUALLY.',
    subtitle: `“I had a day where I was so very groggy. I felt lethargic. I wanted to put these to the test to see if they helped. I actually perked up afterward. The flavor is something you want to get past. It’s not BAD in a way that you want to spit it out, but bad in that you want to get it down as fast as possible and move on with your life. I also had a tough time opening one of the bottles. Nobody could get it open. I used a pair of pliers and still had a hard time. The machine at the factory may have gone a little too hard on sealing that one. I like the drink. The flavor… not so much.”`,
    author: 'WHOA!'
  },
  {
    star: 5,
    title: 'LIKE MOST ENERGY SHOTS BUT WITH A HEALTHIER SOURCE OF ENERGY.',
    subtitle: `“Wholesome Organics Sugar Free Energy Shots Extra Strength Natural & Healthy Energy Drinks are convenient, palatable, and packed with B vitamins. This supplements provides an energy boost without preservatives, sugars, or unwanted junk. Not only is it effective, I also like that its plant based, suitable for those with sensitivities, and it doesn’t cause any jitters or crashes. I am satisfied with this product and would consider purchasing it in the future.”`,
    author: 'DUSTED'
  },
  {
    star: 5,
    title: 'EXTRA BOOST OF ENERGY!!',
    subtitle: `“You get three bottles in this pack. The taste is not great but it was not to hard to drink the small amount. You get a great boost of energy with this product. I did have a crash with this. It great to get a boost of energy with clean ingredients and no sugar.”`,
    author: 'R.M.'
  },
  {
    star: 5,
    title: 'SOLID ENERGY BOOST.',
    subtitle: `“This natural, plant-based energy shot is a game-changer. Packed with wholesome ingredients and free from artificial additives, it delivers a clean and sustainable energy boost. With its refreshing taste and convenient packaging, it’s the perfect on-the-go solution for a natural and revitalizing pick-me-up.”`,
    author: 'A.C.'
  },
  {
    star: 5,
    title: 'TASTES GREAT.',
    subtitle: `“It tastes like a healthy blueberry drink and definitely gave me energy.”`,
    author: 'M.B.'
  },
];
