'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import CustomImage from '../../components/CustomImage';
import Typography from '../../components/Typography';
const CustomGallery = dynamic(() => import('../../components/CustomGallery'));

const ing = [
  {
    original: '/ing.webp',
    title: 'YERBA MATE'
  },
  {
    original: '/ing2.webp',
    title: 'GUARANA'
  },
  {
    original: '/ing3.webp',
    title: 'ASHWAGANDHA'
  },
  {
    original: '/ing4.webp',
    title: 'CORDYCEPS'
  },
  {
    original: '/ing5.webp',
    title: 'RHODIOLA'
  },
  {
    original: '/ing6.webp',
    title: "LION'S MANE"
  }
];

const Common = ({ title, images, handleSelected }) => (
  <div>
    <Typography variant="h3">{title}</Typography>
    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
      {(images || []).map((i, j) => (
        <div
          key={j}
          onClick={() => handleSelected(i?.original)}
          className="group w-full transform cursor-pointer overflow-hidden rounded-xl border bg-white transition-colors duration-500 hover:shadow-md sm:w-full"
        >
          <div className="relative min-h-[220px] w-full rounded-t-xl sm:min-h-[280px] xl:min-h-[220px]">
            <CustomImage
              className="absolute inset-0 rounded-t-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              isBlurred
              src={i?.original}
              width="400"
              height="400"
              alt={title}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSelected = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <main>
      <Common title="Wall Mounted Ballet Barres" handleSelected={handleSelected} images={ing} />
      <br />
      <br />
      <Common title="Wall Mounted Ballet Barres" handleSelected={handleSelected} images={ing} />
      <br />
      <br />
      <Common title="Floor Mounted Barres" handleSelected={handleSelected} images={ing} />
      <br />
      <br />
      <Common title="Fitness Products" handleSelected={handleSelected} images={ing} />
      {open ? (
        <div
          className="custom-gallery fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-primary"
          onClick={() => setOpen(false)}
        >
          <CustomGallery data={ing} setOpen={setOpen} />
        </div>
      ) : null}
    </main>
  );
}
