const items = [
  "Six live products",
  "✦",
  "Click anything",
  "✦",
  "Multi-agent systems",
  "✦",
  "Calibrated LLM evals",
  "✦",
  "Reliability ML",
  "✦",
  "Ships same week",
  "✦",
  "Yes, the links work",
  "✦",
  "No, this is not a template",
  "✦",
];

export function Band({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative -mx-4 overflow-hidden py-6" aria-hidden>
      <div className={`band bg-[#3d5a47] ${reverse ? "band-reverse" : ""}`}>
        <div className="band-inner">
          {[...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.3em] ${
                item === "✦" ? "text-[#d4a72c]" : "text-[#ebe8e1]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
