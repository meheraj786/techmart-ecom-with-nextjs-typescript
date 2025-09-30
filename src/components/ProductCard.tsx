import React from "react";
import { BiSolidStar } from "react-icons/bi";
import Image, { StaticImageData } from "next/image";
import Flex from "@/app/Layout/Flex";
import Link from "next/link";

interface Product {
  product: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    offerprice: number;
    mainprice: number;
    category: string;
    status: string;
    rating: number;
    stars: number;
    sizes?: boolean | string[];
    colors?: boolean | string[];
    isStock: boolean;
  };
}

const ProductCard = ({ product }: Product) => {
  const star = [];
  const noStar = [1, 2, 3, 4, 5];
  for (let i = 0; i < product.stars; i++) {
    star.push(i);
    noStar.pop();
  }

  return (
    <div className="w-[270px] ">
      <div className="w-full h-[250px] relative group overflow-hidden bg-[#F5F5F5] rounded-sm flex justify-center items-center text-transparent">
        {product.offerprice && product.offerprice > 0 && product.isStock && (
          <span className="px-3 py-1 absolute top-3 left-3 bg-primary rounded-sm text-white text-[12px]">
            -
            {Math.round(
              ((product.mainprice - product.offerprice) / product.mainprice) *
                100
            )}
            %
          </span>
        )}
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            className="object-cover transition-all duration-250 object-center group-hover:scale-120"
            alt={product.title}
            priority={false}
            loading="lazy"
          />
        </Link>
        <div className="bg-black cursor-pointer group-hover:translate-y-0 transition-all duration-300 absolute bottom-0 translate-y-full  left-0 rounded-b-sm text-white text-center font-medium py-2 w-full">
          Add To Cart
        </div>
      </div>
      <Link href={`/product/${product.id}`}>
        <p className="font-medium hover:text-gray-500 mt-4 mb-2">
          {product.title}
        </p>
      </Link>
      <Flex className="justify-start gap-x-[12px]">
        {product.offerprice && product.offerprice > 0 && product.isStock ? (
          <>
            <span className="text-primary font-medium">
              ${product.offerprice}
            </span>
            <span className="line-through text-black/50 font-medium">
              ${product.mainprice}
            </span>
          </>
        ) : !product.isStock ? (
          <span className="text-primary/80 font-medium">Out Of Stock</span>
        ) : (
          <span className="text-primary font-medium">${product.mainprice}</span>
        )}
      </Flex>
      <Flex className="justify-start mt-2 gap-x-1">
        {star.map((i, idx) => (
          <BiSolidStar key={idx} color="#FFAD33" />
        ))}
        {noStar.map((i, idx) => (
          <BiSolidStar key={idx} className="text-black/25" />
        ))}
        <span className="text-black/50 text-[12px] font-semibold">
          ({product.rating})
        </span>
      </Flex>
      {Array.isArray(product?.colors) &&
        product.colors.map((color, i) => (
          <span
            key={i}
            style={{ backgroundColor: color }}
            className="w-4 h-4 mt-2 rounded-full inline-block mr-1"
          ></span>
        ))}
    </div>
  );
};

export default ProductCard;
