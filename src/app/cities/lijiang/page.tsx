"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LijiangPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Lijiang</h1>
        <p className="mt-2 text-lg text-stone">🏔️ The Ancient Tea Horse Road Town at the Foot of Snow Mountains</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Ancient Town ★★★★★", "Natural Scenery ★★★★★", "Minority Culture ★★★★☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Old Town of Lijiang"
            nameCn="丽江古城"
            time="3-4 hours"
            price="Free (¥50 maintenance fee)"
            tip="Wander the small canals at dawn before the crowds arrive — pure magic"
            transport="Walk from anywhere in the Old Town district"
          />
          <AttractionCard
            name="Jade Dragon Snow Mountain"
            nameCn="玉龙雪山"
            time="Full day"
            price="¥100 + ¥120 cable car"
            tip="Book the cable car tickets 3 days ahead on WeChat. Oxygen cans sold at base ¥20"
            transport="Bus from Old Town (1h, ¥20) or Didi ¥100"
            book="3 days ahead"
          />
          <AttractionCard
            name="Tiger Leaping Gorge"
            nameCn="虎跳峡"
            time="Full day"
            price="¥45"
            tip="One of the world's deepest gorges. The 2-day hike is world-class, but the upper trail is doable in a day"
            transport="Bus from Lijiang (2h, ¥60)"
          />
          <AttractionCard
            name="Shuhe Ancient Town"
            nameCn="束河古镇"
            time="2 hours"
            price="Free"
            tip="Quieter and more authentic than Dayan Old Town. Great for a relaxed afternoon tea"
            transport="Bus 6 from Old Town or Didi ¥25"
          />
          <AttractionCard
            name="Lashihai Lake"
            nameCn="拉市海"
            time="Half day"
            price="Free"
            tip="Horse riding around the lake is a unique experience (¥200-300 for 2h)"
            transport="Bus from Lijiang (40min, ¥15)"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Crossing Bridge Noodles" nameCn="过桥米线" place="Naxi Family Restaurant" price="¥25-45" rating="★★★★★" />
          <FoodCard name="Yak Yogurt" nameCn="牦牛酸奶" place="Old Town Street Vendors" price="¥10-15" rating="★★★★☆" />
          <FoodCard name="Baba Flatbread" nameCn="粑粑" place="Grandma's Baba Shop" price="¥8-12" rating="★★★★☆" />
          <FoodCard name="Naxi Cuisine Set" nameCn="纳西菜" place="Mu Mansion Restaurant" price="¥50-80/person" rating="★★★★☆" />
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/10 text-sm">🚌</span>
              <h3 className="text-sm font-semibold">Getting Around</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● No metro — city buses and Didi are your main options. Didi starts at ¥8</li>
              <li>● The Old Town is pedestrian-only — wear comfortable shoes for the stone streets</li>
              <li>● Electric bike rentals (¥50/day) are great for exploring the lake area</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Kunming: HSR 3.5h ¥220</li>
              <li>● To Dali: HSR 2h ¥110</li>
              <li>● To Shangri-La: Bus 4h ¥80</li>
              <li>● To Chengdu: Flight 1.5h or overnight train 10h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Dayan Old Town Inside", best: "Best for Atmosphere", desc: "Stay in a traditional Naxi courtyard guesthouse. Can be noisy near bars at night.", icon: "🏘️" },
            { area: "Shuhe Old Town", best: "Best for Peace", desc: "Quiet canals and fewer tourists. Excellent boutique hotels at better prices.", icon: "🌸" },
            { area: "Old Town South Gate Area", best: "Best for Access", desc: "Easy car access, close to the Old Town but outside the noise restrictions.", icon: "🚪" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-amber-100 to-amber-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-amber-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
