import Image from "next/image";
import { promises, shop } from "@/lib/shop";
import { Reveal } from "../Reveal";

const passes = ["p1", "p2", "p3", "p5", "p6", "p7", "p8", "p10"];

const steps = [
  { title: "Book your first lesson", text: "Pick a time here. Andy picks you up from home, school or work." },
  { title: "Find your level", text: "Andy sees where you're at and tells you honestly how many lessons you'll need." },
  { title: "Build your skills", text: "Logbook hours, test routes, parking and the tricky bits, at your pace." },
  { title: "Lesson & Test", text: "A warm-up on the day, then you sit your PDA in Andy's car." },
];

export function Process() {
  return (
    <section id="about" className="bg-coal px-4 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:pr-8">
            <p className="eyebrow mb-5">Meet Andy</p>
            <h2 className="heading">
              Calm, patient, <span className="text-gold-deep">and a little bit funny.</span>
            </h2>
            <p className="mt-6 max-w-md text-[18px] leading-relaxed text-bone/75">
              Learners and parents keep saying the same thing in {shop.reviewCount} five-star reviews: Andy puts nervous drivers at ease, explains things simply, and gets them through their PDA first try.
            </p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="border-t-4 border-gold pt-5">
                <h3 className="font-display text-[28px] font-extrabold uppercase leading-none">{p.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-bone/70">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <p className="eyebrow">New P platers</p>
            <p className="text-[15px] text-ash">A few of Andy&apos;s learners on the day they passed.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {passes.map((p, i) => (
              <div key={p} className={`relative aspect-[3/4] overflow-hidden rounded-[22px] ${i % 2 ? "lg:translate-y-8" : ""}`}>
                <Image src={`/images/${p}.jpg`} alt="A new driver holding up red P plates after passing the driving test" fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20 grid gap-px overflow-hidden rounded-[28px] bg-rule sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-night p-6 lg:p-8">
              <p className="font-display text-[48px] font-extrabold leading-none text-gold">0{i + 1}</p>
              <h3 className="mt-3 font-display text-[26px] font-extrabold uppercase leading-none">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone/70">{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
