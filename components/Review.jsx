import { Tab, Tabs } from '@nextui-org/react';
import { CheckCircle } from 'react-feather';
import StarIcon from './StarIcon';
import Typography from './Typography';
import CustomSelect from './CustomSelect';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Review({ qaData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
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

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
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
