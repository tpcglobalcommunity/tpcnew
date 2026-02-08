"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  lang?: 'en' | 'id';
}

const labels = {
  en: {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  id: {
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik'
  }
};

export default function CountdownTimer({ targetDate, lang = 'en' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const currentLabels = labels[lang];

  return (
    <div className="text-center">
      <div className="grid grid-cols-4 gap-1 md:gap-2 mb-3 md:mb-4">
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">{currentLabels.days}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">{currentLabels.hours}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">{currentLabels.minutes}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">{currentLabels.seconds}</div>
        </div>
      </div>
    </div>
  );
}
