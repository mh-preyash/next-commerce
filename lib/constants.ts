export enum BigCommerceSortKeys {
  A_TO_Z = 'A_TO_Z',
  BEST_REVIEWED = 'BEST_REVIEWED',
  BEST_SELLING = 'BEST_SELLING',
  RELEVANCE = 'RELEVANCE',
  FEATURED = 'FEATURED',
  HIGHEST_PRICE = 'HIGHEST_PRICE',
  LOWEST_PRICE = 'LOWEST_PRICE',
  NEWEST = 'NEWEST',
  Z_TO_A = 'Z_TO_A'
}

export enum VercelSortKeys {
  RELEVANCE = 'RELEVANCE',
  BEST_SELLING = 'BEST_SELLING',
  CREATED_AT = 'CREATED_AT',
  PRICE = 'PRICE',
  PRICE_ASC= 'PRICE_ASC',
  PRICE_DESC= 'PRICE_DESC',

}

export enum vercelToBigCommerceSortKeys {
  RELEVANCE = 'RELEVANCE',
  BEST_SELLING = 'BEST_SELLING',
  CREATED_AT = 'NEWEST',
  PRICE = 'LOWEST_PRICE',
  PRICE_ON_REVERSE = 'HIGHEST_PRICE'
}

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: keyof typeof VercelSortKeys;
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE_ASC', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE_DESC', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';

export const qaData = [
  {
    user: 'Zuh Smith',
    dateAsked: '11/10/2023',
    question:
      'Does the 6’ wood barre come with a bag. I did not see that adding one was an option.',
    dateAnswered: '11/13/2023',
    answer: 'It is not available for anything over 5ft lengths. Thanks'
  },
  {
    user: 'Lisa Kelland',
    dateAsked: '10/04/2023',
    question: `How deep are the support beams on the floor? We have a space that can accommodate barre width of 3'10 so your smallest bar works but ideally, we'd like the barre to only extend 15" from the wall. I must be missing something, because I don't see dimensions for the depth/length of the floor support beams. Pls enlighten me. Thank you.`,
    dateAnswered: '10/04/2023',
    answer: '28 inch wide feet on this unit.'
  },
  {
    user: 'SOON KIM',
    dateAsked: '08/21/2023',
    question: `Hi VitaBarre Team,
I am happy to find your product. I am very interested in purchasing Prodigy Series: Traditional Wood Double Bar Freestanding Ballet Barre 6 FT. My worries is that I live in Paris , Would you ship to France please ? I am looking forward to hearing from you soon . Thank you`,
    dateAnswered: '09/06/2023',
    answer:
      'We ship internationally. Please add the item to the cart to calculate shipping costs. Thanks'
  }
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
