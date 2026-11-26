"use client";

import Image from "next/image";
import { included, services, testCentres } from "@/lib/shop";
import { useChat } from "../Chat";
import { Reveal } from "../Reveal";

const groups = ["Automatic", "Manual"] as const;

export function Services() {
  const { openChat } = useChat();
  return (
    <section id="pricing" className="px-4 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Lessons & prices</p>
            <h2 className="heading">
              Simple prices. <span className="text-gold-deep">Pickup included.</span>
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-relaxed text-bone/70 lg:col-span-5">
            Every lesson comes with pickup and drop-off, Andy&apos;s insured dual-control car, logbook hours and L or P plates. Packages of several lessons are available too.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g} delay={gi * 0.08} className={`rounded-[28px] p-7 sm:p-9 ${gi === 0 ? "bg-ink text-paper" : "bg-coal"}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-[40px] font-extrabold uppercase leading-none">{g}</h3>
                <span className={`rounded-full px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.14em] ${gi === 0 ? "bg-gold text-ink" : "bg-ink text-paper"}`}>Dual control</span>
              </div>
              <ul className={`mt-8 divide-y ${gi === 0 ? "divide-paper/15 border-paper/15" : "divide-rule border-rule"} border-y`}>
                {services
                  .filter((s) => s.transmission === g)
                  .map((s) => (
                    <li key={s.id}>
                      <button type="button" onClick={() => openChat(`I'd like to book a ${s.name.toLowerCase()}.`)} className="group flex w-full items-center justify-between gap-6 py-5 text-left">
                        <span>
                          <span className="block text-[19px] font-semibold">{s.name.replace(`${g} `, "").replace(/^./, (c) => c.toUpperCase())}</span>
                          <span className={`mt-1 block text-[15px] ${gi === 0 ? "text-paper/60" : "text-ash"}`}>{s.text}</span>
                        </span>
                        <span className="shrink-0 font-display text-[44px] font-extrabold leading-none transition-transform duration-500 group-hover:-translate-x-1">${s.price}</span>
                      </button>
                    </li>
                  ))}
              </ul>
              <button
                type="button"
                onClick={() => openChat(`I'd like to book a ${g.toLowerCase()} driving lesson.`)}
                className={`mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors ${gi === 0 ? "bg-brass text-paper hover:bg-paper hover:text-ink" : "bg-brass text-paper hover:bg-ink"}`}
              >
                Book {g.toLowerCase()} →
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <Reveal className="rounded-[28px] bg-steel p-7 sm:p-9 lg:col-span-7">
            <p className="eyebrow mb-5">Every lesson includes</p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {included.map((it) => (
                <li key={it} className="flex gap-3 text-[17px] font-medium">
                  <span className="mt-2 size-2 shrink-0 rounded-sm bg-gold" />
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] text-bone/70">Main test centres: {testCentres.join(", ")}.</p>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[260px] overflow-hidden rounded-[28px] lg:col-span-5">
            <Image src="/images/car.jpg" alt="Andy's white dual-control car with the Andy L Driving School logo on the door" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
