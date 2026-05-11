import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShanghaiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink"><ArrowLeft size={14} />All Cities</Link>
      <h1 className="text-4xl font-[450] tracking-tight">Shanghai</h1>
      <p className="mt-2 text-lg text-stone">🌃 The Pearl of the Orient, City of Endless Energy</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Modern Metropolis ★★★★★", "Food Scene ★★★★☆", "Tech & Innovation ★★★★☆"].map((t) => (
          <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
        ))}
      </div>

      <section className="mt-10 mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "The Bund", time: "1-2 hours", tip: "Best at dusk when the lights come on — free, no reservation needed", transport: "Metro Line 2/10, East Nanjing Road Station" },
            { name: "Shanghai Museum", time: "2-3 hours", tip: "Free entry, book via their WeChat mini-program 3 days ahead", transport: "Metro Line 1/8, People's Square Station" },
            { name: "Oriental Pearl / Lujiazui", time: "2 hours", tip: "Tower entry ¥199, book via Trip.com", transport: "Metro Line 2, Lujiazui Station" },
            { name: "Wukang Road", time: "1-2 hours", tip: "Perfect for a stroll with great photo spots and cafés along the way", transport: "Metro Line 10, Shanghai Library Station" },
            { name: "Yu Garden", time: "1.5 hours", tip: "Entry ¥30, grab Nanxiang soup dumplings nearby", transport: "Metro Line 10, Yu Garden Station" },
          ].map((spot) => (
            <div key={spot.name} className="rounded-2xl border border-black/5 bg-surface-card p-5">
              <h3 className="font-medium">{spot.name}</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-stone">
                <span>⏱️ {spot.time}</span><span>🚇 {spot.transport}</span>
              </div>
              <p className="mt-2 text-xs text-stone/60">💡 {spot.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "Soup Dumplings (Xiaolongbao)", place: "Nanxiang Steamed Bun Restaurant / Jia Jia Tang Bao" },
            { name: "Shanghai-Style Cuisine", place: "Lu Bo Lang / Lao Ji Shi" },
            { name: "Pan-Fried Pork Buns (Shengjianbao)", place: "Yang's Fried Dumplings" },
            { name: "Scallion Oil Noodles", place: "Old Local Noodle House" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
