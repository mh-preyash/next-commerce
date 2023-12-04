'use client';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { VercelProduct as Product } from 'lib/bigcommerce/types';
import { useState } from 'react';
import { Minus, Plus } from 'react-feather';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import StarIcon from '../StarIcon';
import Typography from '../Typography';
import ColorSelector from './ColorSelector';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  console.log(product);
  const [number, setNumber] = useState<number>(1);
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.title}
        </h1>
        <div className="mt-4 text-3xl tracking-tight text-gray-900">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  // className={classNames(
                  //   reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                  //   'h-5 w-5 flex-shrink-0'
                  // )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="flex items-center divide-x divide-solid">
              <a
                href="#reviewsAndQuestions"
                className="px-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                25 reviews
              </a>
              <a
                href="#reviewsAndQuestions"
                className="px-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                3 questions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <ColorSelector
          product={{
            colors: [
              { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
              { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
              { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
            ]
          }}
        />
        <VariantSelector options={product.options} variants={product.variants} />
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            html={product.descriptionHtml}
          />
        ) : null}
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col">
            <Typography className="mb-2">Quantity</Typography>
            <div className="flex items-center gap-2">
              <CustomButton
                className="!min-w-unit-10 !rounded-full border-2 bg-[#F4F4F5] !px-0 text-primary"
                onClick={() => number > 1 && setNumber(number - 1)}
              >
                <Minus size="18" />
              </CustomButton>
              <CustomInput
                variant="underlined"
                className="w-12"
                value={number}
                onValueChange={(val) => setNumber(Number(val))}
              />
              <CustomButton
                className="!min-w-unit-10 !rounded-full border-2 bg-[#F4F4F5] !px-0 text-primary"
                onClick={() => setNumber((!isNaN(number) ? number : 0) + 1)}
              >
                <Plus size="18" />
              </CustomButton>
            </div>
          </div>
          <AddToCart variants={product.variants} availableForSale={!product.availableForSale} />
        </div>
      </div>
    </>
  );
}
