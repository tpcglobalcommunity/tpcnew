"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
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

  return (
    <div className="text-center">
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="bg-[#1a1a24] rounded-lg p-3">
          <div className="text-2xl font-bold text-[#d4af37]">{timeLeft.days}</div>
          <div className="text-xs text-[#6b7280]">Days</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-3">
          <div className="text-2xl font-bold text-[#d4af37]">{timeLeft.hours}</div>
          <div className="text-xs text-[#6b7280]">Hours</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-3">
          <div className="text-2xl font-bold text-[#d4af37]">{timeLeft.minutes}</div>
          <div className="text-xs text-[#6b7280]">Minutes</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-3">
          <div className="text-2xl font-bold text-[#d4af37]">{timeLeft.seconds}</div>
          <div className="text-xs text-[#6b7280]">Seconds</div>
        </div>
      </div>
      <p className="text-sm text-[#a0a0a0]">
        Presale ends {new Date(targetDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          timeZone: 'Asia/Singapore'
        })} (SGT / UTC+8)
      </p>
      <p className="text-xs text-[#6b7280] mt-2">
        Presale may end earlier if stage supply is fully allocated.
      </p>
    </div>
  );
}
