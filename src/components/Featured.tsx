import React from "react";
import img1 from "../../public/arrivalImg1.png";
import img2 from "../../public/arrivalImg2.png";
import img3 from "../../public/arrivalImg3.png";
import img4 from "../../public/arrivalImg4.png";
import Image from "next/image";
import Container from "@/app/Layout/Container";
import Flex from "@/app/Layout/Flex";

const Featured = () => {
  return (
    <div className="font-body pb-[140px]">
      <Container>
        <div className="text-primary mb-5 flex items-center justify-start ">
          <div className="w-5 h-10 rounded-sm bg-primary mr-4"></div>
          <span className="font-semibold">Featured</span>
        </div>
        <Flex className="mb-[60px]">
          <h3>New Arrival</h3>
        </Flex>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div className="bg-black group relative h-[600px]">
            <div className="absolute bottom-8 z-10 left-8">
              <h4 className="text-2xl text-white font-bold mb-3">
                PlayStation 5
              </h4>
              <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                Shop Now
              </p>
            </div>
            <Image
              src={img1}
              className="absolute bottom-0 group-hover:scale-80 transition-all duration-200 left-1/2 -translate-x-1/2 z-0"
              alt=""
            />
          </div>
          <div className=" h-[600px]">
            <div className="grid grid-rows-2 gap-y-[30px]">
              <div className="bg-black group relative h-[285px]">
                <div className="absolute bottom-8 z-10 left-8">
                  <h4 className="text-2xl text-white font-bold mb-3">
                    Women’s Collections
                  </h4>
                  <p className="text-gray-300 mb-4 text-[14px] leading-relaxed">
                    Featured woman collections that give you another vibe.
                  </p>
                  <p className="text-white text-[16px] underline cursor-pointer hover:text-gray-300 transition-colors">
                    Shop Now
                  </p>
                </div>
                <Image
                  src={img2}
                  className="absolute group-hover:scale-80 transition-all duration-200 bottom-0 right-0 z-0"
                  alt=""
                />
              </div>
              <div className=" h-[285px]">
                <div className="grid grid-cols-2 gap-x-[30px]">
                  <div className="bg-black group relative h-[285px]">
                    <div className="absolute z-10 bottom-8 left-8">
                      <h4 className="text-2xl text-white font-bold mb-3">
                        Speakers
                      </h4>
                      <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                        Amazon wireless speakers
                      </p>
                      <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                        Shop Now
                      </p>
                    </div>
                    <Image

                      src={img3}
                      className="absolute group-hover:scale-80 transition-all duration-200 top-1/2 left-1/2 -translate-1/2 z-0"
                      alt=""
                    />
                  </div>
                  <div className="bg-black group relative h-[285px]">
                    <div className="absolute z-10 bottom-8 left-8">
                      <h4 className="text-2xl text-white font-bold mb-3">
                        Perfume
                      </h4>
                      <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
                        GUCCI INTENSE OUD EDP
                      </p>
                      <p className="text-white underline cursor-pointer hover:text-gray-300 transition-colors">
                        Shop Now
                      </p>
                    </div>
                    <Image
                      src={img4}
                      className="absolute group-hover:scale-80 transition-all duration-200 top-1/2 left-1/2 -translate-1/2 z-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
