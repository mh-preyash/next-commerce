"use client";
import React from "react";
import ContainerHOC from "../components/ContainerHOC";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import CustomImage from "../components/CustomImage";
import CustomButton from "../components/nextui/CustomButton";
import Typography from "../components/Typography";

const list = [
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555", "#0F99A5", "#6F3A86"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
  {
    title:
      "CORE Series - Adjustable Stall/Swedish Wall Bar - (With Chin-Up Bar)",
    img: "/ing1.webp",
    price: "$359.95",
    colors: ["#000000", "#555555"],
  },
];

export default function Page() {
  return (
    <div>
      {/* page header */}
      <ContainerHOC className="mx-auto px-6">
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((item, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <CustomImage
                  shadow="sm"
                  radius="lg"
                  width="400"
                  height="400"
                  className="object-cover"
                  src="/shipping.webp"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-center p-6 space-y-4">
                <b>{item.title}</b>
                <CustomButton variant="flat" fullWidth>
                  View Product
                </CustomButton>
                <Typography>
                  Starting at: <b className="text-2xl">{item.price}</b>
                </Typography>
                <div className="flex space-x-2">
                  {(item?.colors || []).map((i) => (
                    <div
                      key={i?.title}
                      style={{ background: i }}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ContainerHOC>
    </div>
  );
}
