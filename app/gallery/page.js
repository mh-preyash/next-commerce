"use client";
import React, { useState } from "react";
import Typography from "../components/Typography";
import CustomImage from "../components/CustomImage";
import dynamic from "next/dynamic";
const CustomGallery = dynamic(() => import("../components/CustomGallery"));

const ing = [
  {
    original: "/ing.webp",
    title: "YERBA MATE",
  },
  {
    original: "/ing2.webp",
    title: "GUARANA",
  },
  {
    original: "/ing3.webp",
    title: "ASHWAGANDHA",
  },
  {
    original: "/ing4.webp",
    title: "CORDYCEPS",
  },
  {
    original: "/ing5.webp",
    title: "RHODIOLA",
  },
  {
    original: "/ing6.webp",
    title: "LION'S MANE",
  },
];

const Common = ({ title, images, handleSelected }) => (
  <div>
    <Typography variant="h3">{title}</Typography>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-4 ">
      {(images || []).map((i, j) => (
        <div
          key={j}
          onClick={() => handleSelected(i?.original)}
          className="group w-full sm:w-full transition-colors duration-500 transform cursor-pointer bg-white hover:shadow-md rounded-xl border overflow-hidden"
        >
          <div className="min-h-[220px] sm:min-h-[280px] xl:min-h-[220px] w-full rounded-t-xl relative">
            <CustomImage
              className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-t-xl"
              isBlurred
              src={i?.original}
              width="400"
              height="400"
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
      <Common
        title="Wall Mounted Ballet Barres"
        handleSelected={handleSelected}
        images={ing}
      />
      <br />
      <br />
      <Common
        title="Wall Mounted Ballet Barres"
        handleSelected={handleSelected}
        images={ing}
      />
      <br />
      <br />
      <Common
        title="Floor Mounted Barres"
        handleSelected={handleSelected}
        images={ing}
      />
      <br />
      <br />
      <Common
        title="Fitness Products"
        handleSelected={handleSelected}
        images={ing}
      />
      {open ? (
        <div
          className="w-full h-full fixed z-[9999] inset-0 flex items-center justify-center bg-black custom-gallery"
          onClick={() => setOpen(false)}
        >
          <CustomGallery data={ing} setOpen={setOpen} />
        </div>
      ) : null}
    </main>
  );
}
