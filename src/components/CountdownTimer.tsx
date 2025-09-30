'use client'
import React,{ useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 19, 56, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num:number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex items-center font-body justify-center p-8 bg-white">
      <div className="flex items-center space-x-6">
        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1">Days</div>
          <div className="text-[32px] font-bold text-black">
            {formatNumber(timeLeft.days)}
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1">Hours</div>
          <div className="text-[32px] font-bold text-black">
            {formatNumber(timeLeft.hours)}
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1">Minutes</div>
          <div className="text-[32px] font-bold text-black">
            {formatNumber(timeLeft.minutes)}
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
          <div className="w-1 h-1 bg-[#E07575] rounded-full"></div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1">Seconds</div>
          <div className="text-[32px] font-bold text-black">
            {formatNumber(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </div>
  );
}