"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChongqingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Chongqing</h1>
        <p className="mt-2 text-lg text-stone">🏙️ The 8D Cyberpunk Mountain City</p>
      </div>

      {/* Quote & Tags */}
      <div className="mb-10">
        <p className="mb-4 max-w-lg text-sm leading-relaxed text-stone/70 italic">
          &ldquo;A city built on mountains — the monorail cuts right through apartment buildings,
          and the scent of hotpot fills every street. There&rsquo;s no north or south, only up and down.
          Come here and you&rsquo;ll understand what magical realism really means.&rdquo;
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Food Paradise ★★★★★", "Modern Metropolis ★★★★☆", "Natural Scenery ★★★☆☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Hongya Cave"
            nameCn="洪崖洞"
            time="2-3 hours"
            price="Free"
            tip="Go at dusk for the illuminated skyline. Take the elevator from Floor 1 to Floor 11 — you'll step out onto a street again. That's Chongqing."
            transport="Metro Line 1/6, Xiaoshizi Station"
          />
          <AttractionCard
            name="Yangtze River Cableway"
            nameCn="长江索道"
            time="15 min"
            price="¥20"
            tip="Ride south-to-north for the best views. Single trip ¥20"
            transport="Metro Line 6, Shangxinjie Station"
          />
          <AttractionCard
            name="Ciqikou Ancient Town"
            nameCn="磁器口古镇"
            time="2-3 hours"
            price="Free"
            tip="Gets packed on weekends — go on a weekday if you can"
            transport="Metro Line 1, Ciqikou Station"
          />
          <AttractionCard
            name="Jiefangbei / Bayi Food Street"
            nameCn="解放碑"
            time="1-2 hours"
            price="Free"
            tip="The surrounding alleyways hide plenty of authentic old-school hotpot joints"
            transport="Metro Line 2, Linjiangmen Station"
          />
          <AttractionCard
            name="Wulong Three Natural Bridges"
            nameCn="武隆天生三桥"
            time="Full day"
            price="¥125"
            tip="Filming location for Transformers 4. Book tickets on Meituan or Trip.com ¥125"
            transport="City center -> Wulong: 2.5h by bus or 2h by train"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Chongqing Hotpot" nameCn="重庆火锅" place="Peijie Old Hotpot / Zhou Shixiong Knife-Cut Tripe" price="¥80-150/person" rating="★★★★★" />
          <FoodCard name="Chongqing Noodles (Xiaomian)" nameCn="重庆小面" place="Any street stall is amazing" price="¥10-15" rating="★★★★★" />
          <FoodCard name="Hot & Sour Rice Noodles (Suanla Fen)" nameCn="酸辣粉" place="Hao You Lai" price="¥12-18" rating="★★★★☆" />
          <FoodCard name="Jianghu Cuisine" nameCn="江湖菜" place="Yang Ji Long Fu" price="¥60-120/person" rating="★★★★☆" />
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/10 text-sm">🚇</span>
              <h3 className="text-sm font-semibold">Getting Around Town</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● The metro is extensive and covers nearly every attraction</li>
              <li>● Get your transit QR code on Alipay and scan to ride</li>
              <li>● ⚠️ Mountain-city reality check: 500m on the map might mean climbing 5 flights of stairs</li>
              <li>● Stick to the metro and save your legs for the sights</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Getting Between Cities</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Chengdu: 1h by high-speed rail, ¥154</li>
              <li>● To Xi'an: 5h by high-speed rail, ¥330</li>
              <li>● To Guangzhou: 7h by high-speed rail, ¥445</li>
              <li>● To Beijing: 10.5h by train or 2.5h by flight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Jiefangbei / Hongya Cave Area", best: "Best for Tourists", desc: "Convenient transport, stunning night views, close to all major sights", icon: "🏮" },
            { area: "Guanyin Bridge Area", best: "Local Life", desc: "A real local neighborhood with great food and moderate prices", icon: "🍜" },
            { area: "Nanbin Road Area", best: "River Views", desc: "Beautiful riverside scenery and a nicer environment, though a bit further out", icon: "🌊" },
          ].map((a) => (
            <div key={a.area} className="rounded-xl border border-black/5 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <span className="text-lg">{a.icon}</span>
              <h3 className="mt-1 text-sm font-medium">{a.area}</h3>
              <span className="text-[11px] text-celadon">{a.best}</span>
              <p className="mt-1.5 text-xs text-stone">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AttractionCard({ name, nameCn, time, price, tip, transport, book }: {
  name: string; nameCn: string; time: string; price: string; tip: string; transport: string; book?: string | null;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-orange-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/80 px-2.5 py-0.5 text-xs font-medium text-ink shadow-sm">⏱️ {time}</span>
        </div>
        <button
          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(nameCn)}`, "_blank")}
          className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition-all hover:bg-white"
        >🚕 Show Driver</button>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{name}</h3>
            <span className="text-xs text-stone/50">{nameCn}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-stone/50">{price}</span>
            {book && <p className="mt-0.5 text-[10px] font-medium text-cinnabar">🔔 Book {book}</p>}
          </div>
        </div>
        <div className="mt-2 text-xs text-stone">🚇 {transport}</div>
        <p className="mt-2 text-xs text-stone/60">💡 {tip}</p>
      </div>
    </div>
  );
}

function FoodCard({ name, nameCn, place, price, rating }: {
  name: string; nameCn: string; place: string; price: string; rating: string;
}) {
  return (
    <div className="rounded-xl border-l-4 border-orange-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium">{name}</h3>
          <span className="text-xs text-stone/50">{nameCn}</span>
        </div>
        <span className="text-xs text-amber-500">{rating}</span>
      </div>
      <p className="mt-1 text-xs text-stone">📍 {place}</p>
      <p className="mt-0.5 text-xs text-stone/50">{price}</p>
    </div>
  );
}
