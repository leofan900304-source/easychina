"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GuilinPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Guilin</h1>
        <p className="mt-2 text-lg text-stone">🏞️ China&rsquo;s Most Beautiful Karst Landscape</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Natural Scenery ★★★★★", "Outdoor Activities ★★★★☆", "Photography ★★★★★"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Li River Cruise"
            nameCn="漓江"
            time="4-5 hours"
            price="¥320"
            tip="Book the Guilin-Yangshuo cruise. Morning departures — the misty karst views at dawn are legendary"
            transport="Bus from Guilin to Mopanshan Pier (¥20)"
          />
          <AttractionCard
            name="Yangshuo West Street"
            nameCn="阳朔西街"
            time="2-3 hours"
            price="Free"
            tip="Explore the surrounding countryside by e-bike (¥40/day) — the rice paddies are stunning"
            transport="HSR from Guilin to Yangshuo (30min, ¥30)"
          />
          <AttractionCard
            name="Longji Rice Terraces"
            nameCn="龙脊梯田"
            time="Full day"
            price="¥80"
            tip="Best visited in May-June (water-filled) or September-October (golden harvest)"
            transport="Bus from Guilin to Longji (2.5h, ¥65)"
          />
          <AttractionCard
            name="Elephant Trunk Hill"
            nameCn="象鼻山"
            time="1 hour"
            price="¥55"
            tip="Guilin's iconic symbol. A quick stop — the best photo is from across the river"
            transport="Bus 57 from the city center"
          />
          <AttractionCard
            name="Reed Flute Cave"
            nameCn="芦笛岩"
            time="1.5 hours"
            price="¥90"
            tip="The colorful lighting on the stalactites is impressive. Cool inside even in summer"
            transport="Bus 3 from the city center (20min)"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Guilin Rice Noodles" nameCn="桂林米粉" place="Rice Noodle Street / Laodifang" price="¥8-15" rating="★★★★★" />
          <FoodCard name="Beer Fish (Yangshuo)" nameCn="啤酒鱼" place="Xie Sanjie's Beer Fish" price="¥50-80" rating="★★★★★" />
          <FoodCard name="Stuffed Li River Snails" nameCn="酿田螺" place="Dongpo Restaurant" price="¥20-35" rating="★★★★☆" />
          <FoodCard name="Oil Tea (Leicha)" nameCn="打油茶" place="Yao Ethnic Restaurant" price="¥10-20" rating="★★★☆☆" />
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
              <li>● No metro, but city buses cover all main spots — ¥1-2 per ride</li>
              <li>● E-bike rentals are the best way to explore Yangshuo — ¥40/day</li>
              <li>● Guilin is small — most downtown attractions are walkable</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Guangzhou: HSR 2.5h ¥165</li>
              <li>● To Changsha: HSR 3h ¥210</li>
              <li>● To Kunming: HSR 4.5h ¥345</li>
              <li>● To Chengdu: HSR 5h ¥362</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Downtown Guilin (Xiangle Rd)", best: "Best for Convenience", desc: "Close to Sun and Moon Pagodas, Elephant Trunk Hill, and bus stations.", icon: "🏙️" },
            { area: "Yangshuo Town", best: "Best for Scenery", desc: "Surrounded by karst peaks. West Street has endless restaurants and bars.", icon: "🏞️" },
            { area: "Dragon's Back (Longji)", best: "Best for Peace", desc: "Stay in a Yao minority guesthouse among the rice terraces. Unforgettable sunrise.", icon: "🌄" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-teal-100 to-teal-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-teal-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
