'use client';
import { classNames } from '@/lib/constants';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import Typography from '../Typography';

export default function ColorSelector({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <div>
      <Typography className="mb-2">Color</Typography>
      <RadioGroup value={selectedColor} onChange={setSelectedColor}>
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {product.colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedClass,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.class,
                  'h-8 w-8 rounded-full border border-primary border-opacity-10'
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
