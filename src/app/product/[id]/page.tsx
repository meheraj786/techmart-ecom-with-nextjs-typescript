"use client";
import Button from "@/app/Layout/Button";
import Container from "@/app/Layout/Container";
import Flex from "@/app/Layout/Flex";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { BiHeart, BiSolidStar } from "react-icons/bi";
import { FaTruck, FaUndo } from "react-icons/fa";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = products?.find((p) => p.id === Number(id));

  const star = [];
  const noStar = [1, 2, 3, 4, 5];
  const starsCount = product?.stars ?? 0;
  for (let i = 0; i < starsCount; i++) {
    star.push(i);
    noStar.pop();
  }

  const relatedProducts = products.filter((p) => {
    if (p.category == product?.category && p.id !== product?.id) {
      return p;
    }
  });
  return (
    <div className=" mt-[130px] ">
    <Container>
      <div className="p-6  pb-[140px] font-body grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-4 w-20">
            <Image
              src={product?.image ?? "/placeholder.png"}
              className="bg-[#F5F5F5] rounded-lg cursor-pointer hover:scale-105 transition"
              alt="main"
            />
          </div>
          <div className="flex-1">
            <Image
              src={product?.image ?? "/placeholder.png"}
              alt="main"
              width={80}
              className="w-full p-10 bg-[#F5F5F5] rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="">{product?.title}</h3>

          <Flex className="justify-start my-2 gap-x-1">
            {star.map((id,idx) => (
              <BiSolidStar key={idx} size={24} color="#FFAD33" />
            ))}
            {noStar.map((id,idx) => (
              <BiSolidStar key={idx} size={24} className="text-black/25" />
            ))}
            <span className="text-black/50 text-[18px] ml-3 font-semibold">
              ({product?.rating} Reviews)
            </span>{" "}
            <span className="mx-3 text-gray-400">|</span>{" "}
            {product?.isStock ? (
              <span className="text-green-400 font-semibold">In Stock</span>
            ) : (
              <span className="text-red-400 font-semibold">Out of Stock</span>
            )}
          </Flex>

          <Flex className="justify-start gap-x-[12px]">
            {product?.offerprice &&
            product?.offerprice > 0 &&
            product?.isStock ? (
              <>
                <span className="text-primary text-xl font-medium">
                  ${product?.offerprice}
                </span>
                <span className="line-through text-xl text-black/50 font-medium">
                  ${product?.mainprice}
                </span>
              </>
            ) : (
              product?.isStock && (
                <span className="text-primary text-xl font-medium">
                  ${product?.mainprice}
                </span>
              )
            )}
          </Flex>

          <p className="!text-gray-600 !text-[14px] mt-3">
            {product?.description}
          </p>

          {Array.isArray(product?.colors) && product.colors && (
            <div className="mt-5">
              <h4 className="font-medium mb-2">Colours:</h4>
              <div className="flex gap-1">
                {product?.colors?.map((color, i) => (
                  <span
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-5 h-5 mt-2 rounded-full inline-block"
                  ></span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Size:</h4>
            <div className="flex gap-3 flex-wrap">
              {Array.isArray(product?.sizes) ? (
                product.sizes.map((size: string) => (
                  <button
                    key={size}
                    className="px-3 py-1 border rounded-md transition"
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p>One Size</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-2 hover:bg-primary hover:text-white cursor-pointer transition">
                -
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-2 hover:bg-primary hover:text-white cursor-pointer transition">
                +
              </button>
            </div>
            {product?.isStock ? (
              <Button>Buy Now</Button>
            ) : (
              <Button className="bg-primary/60 !hover:bg-primary/60">
                Out of Stock
              </Button>
            )}

            <button className="border px-4 py-4 rounded-lg hover:bg-gray-100 transition">
              <BiHeart size={24} />
            </button>
          </div>
          <div className="mt-6 space-y-3 text-gray-600">
            <p className="flex items-center gap-2">
              <FaTruck className="text-gray-500" /> Free Delivery
            </p>
            <p className="flex items-center gap-2">
              <FaUndo className="text-gray-500" /> Return Delivery (Free 30 Days
              Delivery Returns. Details)
            </p>
          </div>
        </div>
      </div>
      <div className="font-body relative pb-[60px]">
        <Container>
          <div className="text-primary flex items-center justify-start ">
            <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
            <span className="font-semibold">Related Items</span>
          </div>
          {/* <Flex>
            <Button>
            View All
          </Button>
          </Flex> */}
          <Flex className="mb-[60px] justify-start gap-x-[30px] mt-[60px]">
            {relatedProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
          <div className="text-center">
            <Button>View All Products</Button>
          </div>
        </Container>
      </div>
    </Container>
    </div>
  );
};

export default ProductDetails;
