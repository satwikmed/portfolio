const words = [
  "HIRE SATWIK",
  "SAY YES",
  "HIRE SATWIK",
  "SAY YES",
  "I SHIP",
  "WORKS ON PROD",
  "HIRE SATWIK",
  "SAY YES",
  "6/6 ONLINE",
];

export function Marquee() {
  const text = words.join(" · ") + " · ";
  return (
    <div className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden md:top-32">
      <div className="animate-marquee hypnosis-marquee whitespace-nowrap font-mono text-5xl font-medium uppercase tracking-wider text-[#3d5a47]/[0.06] md:text-7xl">
        {text.repeat(6)}
      </div>
    </div>
  );
}
