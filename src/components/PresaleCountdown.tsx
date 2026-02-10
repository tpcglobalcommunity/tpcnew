'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  copy: {
    title: string;
    note: string;
    units: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
}

export function PresaleCountdown({ targetDate, copy }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">
        {copy.title}
      </h3>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6 max-w-2xl mx-auto">
        <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
          <div className="text-2xl md:text-3xl font-bold text-amber-400">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">{copy.units.days}</div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
          <div className="text-2xl md:text-3xl font-bold text-amber-400">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">{copy.units.hours}</div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
          <div className="text-2xl md:text-3xl font-bold text-amber-400">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">{copy.units.minutes}</div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
          <div className="text-2xl md:text-3xl font-bold text-amber-400">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">{copy.units.seconds}</div>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
        {copy.note}
      </p>
    </div>
  );
}
