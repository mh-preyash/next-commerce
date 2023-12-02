'use client';
import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { CheckCircle } from 'react-feather';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import CustomModal from './CustomModal';
import CustomSelect from './CustomSelect';
import StarIcon from './StarIcon';
import Typography from './Typography';
import WriteReviewForm from './WriteReviewForm';

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 }
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      reviewTitle: 'Perfect balance of quality and cost.',
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    },
    {
      id: 2,
      rating: 4,
      reviewTitle: 'Reflection in the dance of beauty.',
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  ]
};

const typeData = [
  {
    label: 'Most Recent',
    value: 'Most Recent'
  },
  {
    label: 'Highest Rating',
    value: 'Highest Rating'
  },
  {
    label: 'Lowest Rating',
    value: 'Lowest Rating'
  },
  {
    label: 'Only Pictures',
    value: 'Only Pictures'
  },
  {
    label: 'Pictures First',
    value: 'Pictures First'
  },
  {
    label: 'Videos First',
    value: 'Videos First'
  },
  {
    label: 'Most Helpful',
    value: 'Most Helpful'
  }
];

export const sectionData = [
  {
    title: 'Fast Shipping',
    subtitle: 'Same Day Shipping on most orders.',
    image: '/easy-returns.webp'
  },
  {
    title: 'Long Warranty',
    subtitle: 'We stand behind our products for 10 years.',
    image: '/long-warranty.webp'
  },
  {
    title: 'Easy Returns',
    subtitle: 'Returns should be easy! Don’t like it? Return it!',
    image: '/free-shipping.webp'
  },
  {
    title: 'International Shipping',
    subtitle: 'If it can be delivered, we can likely get it to you!',
    image: '/international-shipping.webp'
  },
  {
    title: 'Satisfaction Guaranteed',
    subtitle: 'We either make it right or you can return it!',
    image: '/satisfaction-guaranteed.webp'
  },
  {
    title: 'USA Products',
    subtitle: 'Our products are made in the USA.',
    image: '/usa-flag.webp'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface IReview {
  qaData: {
    user?: string;
    dateAsked?: string;
    question?: string;
    dateAnswered?: string;
    answer?: string;
  }[];
}

export default function Review({ qaData }: IReview) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const modalHandle = () => setModal(!modal);
  const modalHandle2 = () => setModal2(!modal2);
  return (
    <div className="bg-white px-6">
      {modal ? (
        <CustomModal bg="bg-white" size="2xl" modal={modal} setModal={setModal}>
          <WriteReviewForm review />
        </CustomModal>
      ) : null}
      {modal2 ? (
        <CustomModal bg="bg-white" size="2xl" modal={modal2} setModal={setModal2}>
          <WriteReviewForm />
        </CustomModal>
      ) : null}
      <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {(sectionData || []).map((item) => {
          return (
            <div key={item?.title} className="flex-col justify-center text-center">
              <CustomImage
                width={100}
                height={100}
                src={item?.image}
                alt={item?.title}
                className="mx-auto mb-2 h-[80px] w-[80px] rounded-full border-2 border-gray-500 object-cover"
              />
              <Typography className=" font-semibold">{item?.title}</Typography>
              <Typography className="">{item?.subtitle}</Typography>
            </div>
          );
        })}
      </div>
      {/* <div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            A lightweight and highly portable ballet barre
          </h2>
          <p className="mx-auto max-w-full lg:max-w-2xl">
            Our Prodigy series barres are our most portable barres. Easily assemble and dissasembly
            with feet that pivot sideways for easy storage. The optional carry bag keeps the barres
            in one place in the vehicle or
          </p>
        </div>
        <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:grid lg:max-w-5xl lg:grid-cols-12 lg:p-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Features</h2>
          </div>
          <div className="product mt-4 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <ul className="space-y-4 text-base lg:text-lg">
              {(features || []).map((i) => (
                <li key={i} className="flex">
                  <span>&#10003;</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:grid lg:max-w-5xl lg:grid-cols-12 lg:p-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Specifications</h2>
          </div>
          <div className="product mt-4 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <ul className="space-y-4 text-base lg:text-lg">
              {(specifications || []).map((i) => (
                <li key={i} className="flex">
                  <span>&#10003;</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
      <div
        id="reviewsAndQuestions"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:px-8 lg:py-32"
      >
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customer Reviews</h2>
          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-[#fcd53f]' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other customers
            </p>
            <CustomButton
              onClick={modalHandle}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </CustomButton>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Have any queries</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you have any concerns with the features, functionality, or product, please contact
              us.
            </p>
            <CustomButton
              onClick={modalHandle2}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Ask a question
            </CustomButton>
          </div>
        </div>
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Reviews (9)">
              <div className="mt-7 flow-root">
                <CustomSelect
                  className="max-w-xs"
                  data={typeData}
                  label="Select a category"
                  defaultSelectedKeys={['Most Recent']}
                />
                <div className="divide-y divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-6">
                      <div className="flex items-center">
                        <div>
                          <Typography className="flex items-center space-x-2 font-semibold text-[#131313]">
                            <span>John Doe</span>
                            {true ? <CheckCircle className="h-4 w-4 " /> : null}
                          </Typography>
                          <Typography
                            variant="small"
                            className="mb-2 mt-1 flex items-center space-x-2 font-semibold text-slate-400"
                          >
                            12/18/23
                          </Typography>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                        </div>
                      </div>
                      <Typography variant="h5" className="mt-3 w-full text-left font-bold">
                        {review?.reviewTitle}
                      </Typography>
                      <div
                        className="mt-2 space-y-6 text-base italic text-gray-600"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab key="music" title="Questions (18)">
              {(qaData || []).map((i, j) => (
                <div key={j} className="b-10 mt-5">
                  <div className="flex border-l-5 border-primary bg-[#F9F9F9] py-5">
                    <span className="flex items-center px-5 text-5xl text-primary">Q.</span>
                    <div className="space-y-2">
                      <div>
                        <b>{i?.user}</b> - {i?.dateAsked}
                      </div>
                      <p className="text-lg font-medium">{i?.question}</p>
                    </div>
                  </div>
                  <div className="flex border-l-5 border-slate-400 py-5">
                    <span className="flex items-center px-5 text-5xl text-slate-400">A.</span>
                    <div className="space-y-2">
                      <div>
                        <b>Vitabarre</b> - {i?.dateAnswered}
                      </div>
                      <p className="">{i?.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
