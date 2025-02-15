'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  minutes: number;
}

export function Countdown({ minutes }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 font-mono">
      <div className="bg-red-100 rounded-lg px-2 md:px-3 py-1 md:py-2">
        <span className="text-xl md:text-2xl font-bold text-red-600">
          {String(minutesLeft).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm text-red-500 ml-1">min</span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-red-600">:</span>
      <div className="bg-red-100 rounded-lg px-2 md:px-3 py-1 md:py-2">
        <span className="text-xl md:text-2xl font-bold text-red-600">
          {String(secondsLeft).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm text-red-500 ml-1">seg</span>
      </div>
    </div>
  );
}
