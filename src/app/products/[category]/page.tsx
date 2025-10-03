'use client'
import Container from '@/app/Layout/Container';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/products';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Category:React.FC = () => {
  interface Products{
    id: number,
    image: StaticImageData,
    title: string,
    description: string,
    offerprice: number,
    mainprice: number,
    category: string,
    status: string,
    rating: number,
    stars: number,
    sizes?: boolean | string[],
    colors?: boolean | string[],
    isStock: boolean
  }
    const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filterProducts, setFilterProducts] = useState<Products[]>([]);
  const { category } = useParams();

  useEffect(() => {
    let filtered = [];
    if (category === "all") {
      filtered = products;
    } else {
      filtered = products.filter((product) => product.category === category || product.status === category);
    }
    setFilterProducts(filtered);
  }, [category]);

  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  interface Colors{
    id:number,
    name:string,
    color:string
  }

  const colors :Colors[] = [
    { id: 1, name: "Color 1", color: "bg-blue-500" },
    { id: 2, name: "Color 2", color: "bg-red-500" },
    { id: 3, name: "Color 3", color: "bg-green-500" },
  ];
return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="">
          <div className=" mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-black">Shop</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="w-64 flex-shrink-0">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <div key={index} className="flex items-center">
                      <Link href={`/products/${cat.toLowerCase()}`} className="text-gray-700 hover:text-black cursor-pointer">
                        {cat}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Shop by Color</h3>
                <div className="space-y-3">
                  {colors.map((color) => (
                    <div key={color.id} className="flex items-center space-x-2">
                      <div
                        className={`w-4 h-4 rounded-full ${color.color} cursor-pointer border-2 border-gray-300`}
                      ></div>
                      <span className="text-gray-700 text-sm">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-end items-center mb-6">
                <span className="text-sm text-gray-700 mr-3">Show:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                >
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProducts?.slice(0, itemsPerPage).map((product,idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>

              <div className="flex justify-center items-center space-x-2 mt-8">
                <button className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800">
                  1
                </button>
                <button className="w-10 h-10 bg-gray-100 text-gray-700 rounded flex items-center justify-center hover:bg-gray-200">
                  2
                </button>
                <button className="w-10 h-10 bg-gray-100 text-gray-700 rounded flex items-center justify-center hover:bg-gray-200">
                  3
                </button>
                <button className="w-10 h-10 bg-gray-100 text-gray-700 rounded flex items-center justify-center hover:bg-gray-200">
                  4
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category