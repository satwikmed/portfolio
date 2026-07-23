const SPOTS = [
  { top: "16%", left: "68%", size: 22, delay: "0s" },
  { top: "30%", left: "88%", size: 15, delay: "0.9s" },
  { top: "64%", left: "78%", size: 18, delay: "1.7s" },
  { top: "12%", left: "38%", size: 13, delay: "2.3s" },
  { top: "72%", left: "8%", size: 16, delay: "1.2s" },
];

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0z" />
    </svg>
  );
}

export function Sparkles() {
  return (
    <>
      {SPOTS.map((s, i) => (
        <span
          key={i}
          className="sparkle hidden md:block"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        >
          <Star size={s.size} />
        </span>
      ))}
    </>
  );
}
