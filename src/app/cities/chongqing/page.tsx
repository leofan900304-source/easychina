import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChongqingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Chongqing</h1>
        <p className="mt-2 text-lg text-stone">🏔️ The 8D Cyberpunk Mountain City</p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone/70 italic">
          &ldquo;A city built on mountains — the monorail cuts right through apartment buildings,
          and the scent of hotpot fills every street. There&rsquo;s no north or south, only up and down.
          Come here and you&rsquo;ll understand what magical realism really means.&rdquo;
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Food Paradise ★★★★★", "Modern Metropolis ★★★★☆", "Natural Scenery ★★★☆☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Must-See Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "Hongya Cave", time: "2-3 hours", tip: "Go at dusk for the illuminated skyline. Take the elevator from Floor 1 to Floor 11 — you'll step out onto a street again. That's Chongqing.", transport: "Metro Line 1/6, Xiaoshizi Station" },
            { name: "Yangtze River Cableway", time: "15 min", tip: "Ride south-to-north for the best views. Single trip ¥20", transport: "Metro Line 6, Shangxinjie Station" },
            { name: "Ciqikou Ancient Town", time: "2-3 hours", tip: "Gets packed on weekends — go on a weekday if you can", transport: "Metro Line 1, Ciqikou Station" },
            { name: "Jiefangbei / Bayi Food Street", time: "1-2 hours", tip: "The surrounding alleyways hide plenty of authentic old-school hotpot joints", transport: "Metro Line 2, Linjiangmen Station" },
            { name: "Wulong Three Natural Bridges", time: "Full day", tip: "Filming location for Transformers 4. Book tickets on Meituan or Trip.com ¥125", transport: "City center → Wulong: 2.5h by bus or 2h by train" },
          ].map((spot) => (
            <div key={spot.name} className="rounded-2xl border border-black/5 bg-surface-card p-5">
              <h3 className="font-medium">{spot.name}</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-stone">
                <span>⏱️ {spot.time}</span>
                <span>🚇 {spot.transport}</span>
              </div>
              <p className="mt-2 text-xs text-stone/60">💡 {spot.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "Chongqing Hotpot", place: "Peijie Old Hotpot / Zhou Shixiong Knife-Cut Tripe", tip: "If you can't handle spice, be sure to say 'wei wei la' (just a tiny hint of heat) up front" },
            { name: "Chongqing Noodles (Xiaomian)", place: "Any street stall is amazing", tip: "The ultimate breakfast" },
            { name: "Hot & Sour Rice Noodles (Suanla Fen)", place: "Hao You Lai", tip: "There's a Hao You Lai shop near Jiefangbei" },
            { name: "Jianghu Cuisine", place: "Yang Ji Long Fu", tip: "Sichuan-style cooking — a paradise for bold flavor lovers" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
              <p className="mt-0.5 text-xs text-stone/50">{food.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-card p-5">
            <h3 className="mb-2 text-sm font-semibold">🚇 Getting Around Town</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• The metro is extensive and covers nearly every attraction</li>
              <li>• Get your transit QR code on Alipay and scan to ride</li>
              <li>• ⚠️ Mountain-city reality check: 500m on the map might mean climbing 5 flights of stairs</li>
              <li>• Stick to the metro and save your legs for the sights</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <h3 className="mb-2 text-sm font-semibold">🚄 Getting Between Cities</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• To Chengdu: 1h by high-speed rail, ¥154</li>
              <li>• To Xi'an: 5h by high-speed rail, ¥330</li>
              <li>• To Guangzhou: 7h by high-speed rail, ¥445</li>
              <li>• To Beijing: 10.5h by train or 2.5h by flight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Jiefangbei / Hongya Cave Area", best: "Best for Tourists", desc: "Convenient transport, stunning night views, close to all major sights" },
            { area: "Guanyin Bridge Area", best: "Local Life", desc: "A real local neighborhood with great food and moderate prices" },
            { area: "Nanbin Road Area", best: "River Views", desc: "Beautiful riverside scenery and a nicer environment, though a bit further out" },
          ].map(({ area, best, desc }) => (
            <div key={area} className="rounded-xl border border-black/5 bg-surface-card p-4">
              <h3 className="text-sm font-medium">{area}</h3>
              <span className="text-[11px] text-celadon">{best}</span>
              <p className="mt-1.5 text-xs text-stone">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
