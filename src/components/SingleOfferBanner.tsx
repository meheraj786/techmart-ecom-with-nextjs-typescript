'use client'
import React,{ useState, useEffect } from 'react';
import music from '../../public/music.png'
import Image from 'next/image';
import Container from '@/app/Layout/Container';

export default function SingleOfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" font-body  text-white relative overflow-hidden">
      <Container>
      <div className="bg-black group">
      <div className="container mx-auto px-[56px] py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-lg">

            <div className="inline-block mb-6">
              <span className="text-green-400 cursor-pointer text-sm font-medium">Categories</span>
            </div>

            <h2 className="!text-white font-bold leading-tight mb-8">
              Enhance Your<br />
              Music Experience
            </h2>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                  <div>
                    <div className="text-lg font-bold">{timeLeft.days}</div>
                    <div className="text-xs">Days</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                  <div>
                    <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                  <div>
                    <div className="text-lg font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
                  <div>
                    <div className="text-lg font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Buy Now!
            </button>
          </div>
          <div className='relative'>
            <Image src={music} className='relative z-10' alt="" />
            <div className='absolute w-0 h-0 group-hover:w-full group-hover:h-full top-1/2 left-1/2 -translate-1/2 transition-all duration-300 bg-white/20 rounded-full blur-3xl '></div>
          </div>
        </div>
      </div>
      </div>
      </Container>
    </div>
  );
}