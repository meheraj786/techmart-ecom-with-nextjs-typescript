'use client'
import Container from "@/app/Layout/Container";
import Flex from "@/app/Layout/Flex";
import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";

const Banner = () => {
  const categories = [
    { name: "Woman's Fashion", link: "/" },
    { name: "Men's Fashion", link: "/" },
    { name: "Electronics", link: "/" },
    { name: "Home & Lifestyle", link: "/" },
    { name: "Medicine", link: "/" },
    { name: "Sports & Outdoor", link: "/" },
    { name: "Baby's & Toys", link: "/" },
    { name: "Groceries & Pets", link: "/" },
    { name: "Health & Beauty", link: "/" },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = products.slice(0, 5);

  useEffect(() => {
    if (paused) return; 

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  return (
    <div className="font-body overflow-x-hidden pt-10 pb-[140px]">
      <Container>
        <Flex className="items-start gap-x-[32px]">
          <aside className="xl:w-[233px] relative hidden after:absolute after:content-[''] after:w-[1px] after:h-[384px] after:bg-black/30 after:-top-10 after:right-0 xl:block">
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.link}
                    className="flex items-center justify-between text-black text-base hover:text-gray-700"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

        <div className="flex-1 overflow-hidden text-white">
          <div
            className=" text-white group relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out h-[344px]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center min-w-full bg-black"
                >
                  <div className="pl-[54px] w-[320px] pt-[64px] pb-[47px]">
                    <p className="!text-white font-bold">
                      {product.title}
                    </p>
                    <h2 className="!text-white py-3 ">
    Save upto {Math.round(((product.mainprice - product.offerprice) / product.mainprice) * 100)}%
                    </h2>
                    <button className="font-medium flex items-center gap-x-2 mt-3">
                      <Link href={`/product/${product.id}`}>
                      <span className="border-b border-white">Shop Now </span>
                      </Link>
                      <BiArrowToRight size={24} />
                    </button>
                  </div>

                  <div className="pr-[100px] relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-[300px] relative z-10 group-hover:scale-125 transition-all duration-200 h-[250px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-primary border border-gray-600" : "bg-white border-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
