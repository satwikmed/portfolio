"use client";

import { useEffect, useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 200);
          return 100;
        }
        return p + 4;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#ebe8e1]">
      <p className="font-serif text-3xl text-[#1a1a1a]">
        {progress < 100 ? "Loading" : "Ready"}
        <span className="text-[#3d5a47]">.</span>
      </p>
      <div className="mt-6 h-px w-48 overflow-hidden bg-[#1a1a1a]/10">
        <div
          className="h-full bg-[#3d5a47] transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[#5c5c5c]">
        Portfolio / 2026
      </p>
    </div>
  );
}
