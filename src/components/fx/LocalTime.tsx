"use client";

import { useEffect, useState } from "react";

export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(t);
    };
    format();
    const id = setInterval(format, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={className}>
      <span className="text-[#8f8c82]">Dallas</span>{" "}
      <span className="tabular-nums text-[#3d5a47]">{time}</span>
    </span>
  );
}
