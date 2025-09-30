import Container from "@/app/Layout/Container";
import Flex from "@/app/Layout/Flex";
import Link from "next/link";
import React from "react";

const Categories = () => {
  type categoriesType={
    icon: React.ReactNode,
    name: string,
    link: string
  }
  const categories:categoriesType[] = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            strokeWidth={2}
          />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2} />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2} />
        </svg>
      ),
      name: "Phones",
      link:""
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="4"
            width="20"
            height="12"
            rx="2"
            ry="2"
            strokeWidth={2}
          />
          <path d="M2 16h20" strokeWidth={2} />
          <path d="M6 20h12" strokeWidth={2} />
        </svg>
      ),
      name: "Computers",
      link:""
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <polyline points="12,6 12,12 16,14" strokeWidth={2} />
        </svg>
      ),
      name: "SmartWatch",
      link:""
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            strokeWidth={2}
          />
          <circle cx="12" cy="13" r="4" strokeWidth={2} />
        </svg>
      ),
      name: "Camera",
    link:""
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeWidth={2} />
          <path
            d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            strokeWidth={2}
          />
        </svg>
      ),
      name: "HeadPhones",
      link:""
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            strokeWidth={2}
          />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2} />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2} />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="16" cy="9" r="1" fill="currentColor" />
          <path d="M9 13h6" strokeWidth={2} />
        </svg>
      ),
      name: "Gaming",
      link:""
    },
  ];
  return (
    <div className="font-body relative py-[75px]">
      <Container>
        <div className="text-primary mb-5 flex items-center justify-start ">
          <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
          <span className="font-semibold">Todays</span>
        </div>
        <Flex>
          <h3>Browse By Category</h3>
        </Flex>
        <div className="flex mt-[60px] justify-center flex-wrap gap-6 ">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
            <div
              className={`
            w-40 h-36 border border-gray-200 rounded-lg 
            flex flex-col items-center justify-center space-y-3 
            transition-all duration-300 cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500
          `}
            >
              <div className="flex items-center justify-center">
                {category.icon}
              </div>
              <div className="text-sm font-medium text-center">
                {category.name}
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className='xl:w-[1170px] w-full h-[1px] mx-auto absolute bottom-0 bg-black/30'></div>
      </Container>
    </div>
  );
};

export default Categories;
