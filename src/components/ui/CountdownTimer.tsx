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
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    const target = sixMonthsFromNow.getTime();
    
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
  }, []);

  return (
    <div className="text-center">
      <div className="grid grid-cols-4 gap-1 md:gap-2 mb-3 md:mb-4">
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">Hari</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">Jam</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">Menit</div>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-2 md:p-3">
          <div className="text-lg md:text-2xl font-bold text-[#d4af37]">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-[#6b7280]">Detik</div>
        </div>
      </div>
      <p className="text-xs md:text-sm text-[#a0a0a0]">
        Presale berakhir {new Date().toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'Asia/Singapore'
        })} (WIB / UTC+7)
      </p>
      <p className="text-xs text-[#6b7280] mt-1 md:mt-2">
        Presale dapat berakhir lebih awal jika supply tahap telah teralokasi penuh.
      </p>
    </div>
  );
}
