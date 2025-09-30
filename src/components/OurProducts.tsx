import Container from "@/app/Layout/Container";
import Flex from "@/app/Layout/Flex";
import { products } from "@/utils/products";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Button from "@/app/Layout/Button";

const OurProducts = () => {
  return (
    <div className="font-body relative pt-[60px] pb-[140px]">
      <Container>
        <div className="text-primary mb-5 flex items-center justify-start ">
          <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
          <span className="font-semibold">Our Products</span>
        </div>
        <Flex>
          <h3>Explore Our Products</h3>
          {/* <Button>
            View All
          </Button> */}
        </Flex>
        <Flex className="mb-[60px] items-start gap-y-7 mt-[60px]">
          {products.filter((p)=>p.status!=="flashSale").slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
        <div className="text-center">
          
          <Link href="/products/all">
          <Button>View All Products</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurProducts;
