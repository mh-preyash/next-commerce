'use client';
import { Checkbox, CheckboxGroup, Chip, Radio, RadioGroup, cn } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CustomAccordion from './CustomAccordion';
import { MultiRangeSlider } from './MultiRangeSlider';

const categoryData = [
  {
    title: 'All Portable Barres',
    count: 6
  },
  {
    title: 'Ball Racks',
    count: 1
  },
  {
    title: 'Brackets',
    count: 1
  },
  {
    title: 'Carry Bag',
    count: 1
  }
];

const availabilityData = [
  {
    title: 'In Stock',
    count: 46
  }
];

const conditionData = [
  {
    title: 'New',
    count: 46
  }
];

const discountData = [
  {
    title: 'No discount',
    count: 46
  }
];

const colorData = ['#000000', '#00FFFF', '#800080', '#666666'];

const sizeData = [
  1.5, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42
];

interface IFilters {
  selectedFilters?: void;
  onChange?: void;
}

export default function Filters({ selectedFilters, onChange }: IFilters) {
  const [filters, setFilters] = useState({});

  const filterData = [
    {
      title: 'Price, $',
      details: (
        <div className="py-4">
          <MultiRangeSlider
            min={7}
            max={492}
            onChange={({ min, max }) => console.log({ min, max })}
          />
        </div>
      )
    },
    {
      title: 'Category',
      details: (
        <CheckboxGroup
          value={filters.category}
          onValueChange={(e) => setFilters({ ...filters, category: e })}
        >
          {(categoryData || []).map((i) => (
            <Checkbox
              value={i?.title.toLowerCase().replaceAll(' ', '-')}
              key={i?.title}
              className="flex items-center"
            >
              {i?.title}
              <small className="ml-1 text-sm text-slate-400">({i?.count})</small>
            </Checkbox>
          ))}
        </CheckboxGroup>
      )
    },
    {
      title: 'Availability',
      details: (
        <CheckboxGroup
          value={filters.availability}
          onValueChange={(e) => setFilters({ ...filters, availability: e })}
        >
          {(availabilityData || []).map((i) => (
            <Checkbox
              value={i?.title.toLowerCase().replaceAll(' ', '-')}
              key={i?.title}
              className="flex items-center"
            >
              {i?.title}
              <small className="ml-1 text-sm text-slate-400">({i?.count})</small>
            </Checkbox>
          ))}
        </CheckboxGroup>
      )
    },
    {
      title: 'Product condition',
      details: (
        <CheckboxGroup
          value={filters.condition}
          onValueChange={(e) => setFilters({ ...filters, condition: e })}
        >
          {(conditionData || []).map((i) => (
            <Checkbox
              value={i?.title.toLowerCase().replaceAll(' ', '-')}
              key={i?.title}
              className="flex items-center"
            >
              {i?.title}
              <small className="ml-1 text-sm text-slate-400">({i?.count})</small>
            </Checkbox>
          ))}
        </CheckboxGroup>
      )
    },
    {
      title: 'Color',
      details: (
        <RadioGroup
          value={filters.color}
          onValueChange={(e) => setFilters({ ...filters, color: e })}
          orientation="horizontal"
        >
          {(colorData || []).map((i) => (
            <Radio
              key={i}
              value={i}
              style={{ backgroundColor: i, height: '16px', width: '16px', borderRadius: '50%' }}
              classNames={{
                base: cn(
                  'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
                  'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-3 border-3 border-transparent',
                  'data-[selected=true]:border-primary data-[selected=true]:custom-shadow'
                ),
                wrapper: cn('hidden')
              }}
            />
          ))}
        </RadioGroup>
      )
    },
    {
      title: 'Size (FT)',
      details: (
        <RadioGroup
          value={filters.size}
          onValueChange={(e) => setFilters({ ...filters, size: e })}
          orientation="horizontal"
        >
          {(sizeData || []).map((i) => (
            <Radio
              key={i}
              value={i}
              style={{
                backgroundColor: 'white',
                height: '56px',
                width: '56px',
                textAlign: 'center'
              }}
              classNames={{
                base: cn(
                  'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between ml-0',
                  'flex-row-reverse cursor-pointer rounded-lg gap-4 border-3 border-transparent',
                  'data-[selected=true]:border-primary'
                ),
                wrapper: cn('hidden')
              }}
            >
              {i}
            </Radio>
          ))}
        </RadioGroup>
      )
    },
    {
      title: 'Discount',
      details: (
        <CheckboxGroup
          value={filters.discount}
          onValueChange={(e) => setFilters({ ...filters, discount: e })}
        >
          {(discountData || []).map((i) => (
            <Checkbox
              value={i?.title.toLowerCase().replaceAll(' ', '-')}
              key={i?.title}
              className="flex items-center"
            >
              {i?.title}
              <small className="ml-1 text-sm text-slate-400">({i?.count})</small>
            </Checkbox>
          ))}
        </CheckboxGroup>
      )
    }
  ];

  const [chips, setChips] = useState(Object.values(filters).flat());

  const handleClose = (itemToRemove) => {
    setChips(chips.filter((fruit) => fruit !== itemToRemove));
    if (chips.length === 1) {
      setChips(Object.values(filters).flat());
    }
  };

  useEffect(() => {
    if (filters) {
      setChips(Object.values(filters).flat());
    }
  }, [filters]);

  return (
    <div className="sticky top-4 w-[250px]">
      <div className="flex flex-wrap gap-2">
        {(chips || []).map((i) => (
          <Chip key={i} size="md" variant="flat" onClose={() => handleClose(i)} color="primary">
            {i}
          </Chip>
        ))}
      </div>
      {(chips || []).length ? (
        <Chip color="default" className="mt-6 cursor-pointer" onClick={() => setFilters({})}>
          Reset Filters
        </Chip>
      ) : null}
      <CustomAccordion
        defaultExpandedKeys={filterData.map((i, j) => j.toString())}
        selectionMode="multiple"
        accordionData={filterData}
      />
    </div>
  );
}
