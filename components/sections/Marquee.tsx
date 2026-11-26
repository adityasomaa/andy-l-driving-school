import { testCentres } from "@/lib/shop";

const words = ["Automatic & manual", "Pickup included", ...testCentres.map((t) => `${t} test centre`), "Passed first try", "Lessons from 7 am"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-rule bg-coal py-5" aria-hidden>
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-[22px] font-bold uppercase tracking-[0.02em] text-bone/70">
            {w}
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
