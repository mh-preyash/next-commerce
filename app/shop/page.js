'use client';
import ContainerHOC from '../../components/ContainerHOC';
import ProductCard from '../../components/ProductCard';

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
    colors: ['#000000', '#555555']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555']
  },
  {
    title: 'CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)',
    img: '/shipping.webp',
    price: '$359.95',
    colors: ['#000000', '#555555']
  }
];

export default function Page() {
  return (
    <div>
      <ContainerHOC className="mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((item, index) => (
            <ProductCard item={item} index={index} key={index} />
          ))}
        </div>
      </ContainerHOC>
    </div>
  );
}
