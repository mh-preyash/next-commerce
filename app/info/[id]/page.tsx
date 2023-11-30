'use client';
import React from 'react';
import ContainerHOC from '../../../components/ContainerHOC';
import ProductCard from '../../../components/ProductCard';
import HeroSection from '../../../components/HeroSection';

const list = [
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555', '#0F99A5', '#6F3A86']
  }
];

export default function Page() {
  return (
    <div>
      <HeroSection
        iframe={false}
        image="/allPortable.webp"
        title="All Portable Barres"
        subtitle="If you are looking for a portable dance barre for home or commercial use, you have came to the right place! Vita Barre has a large selection of portable ballet barres. Offering both wood and aluminum crossbars, you can find something you like. All of our barres are backed by a 10 year warranty and are made in the USA. "
      />
      <ContainerHOC className="mx-auto px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(list || []).map((item, index) => (
            <ProductCard item={item} index={index} key={index} />
          ))}
        </div>
      </ContainerHOC>
    </div>
  );
}
