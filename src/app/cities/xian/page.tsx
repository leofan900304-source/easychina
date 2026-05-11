"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function XianPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Xi&rsquo;an</h1>
        <p className="mt-2 text-lg text-stone">🏛️ Ancient Capital of Thirteen Dynasties</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["History & Culture ★★★★★", "Food Scene ★★★★☆", "UNESCO Sites ★★★★★"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Terracotta Warriors"
            nameCn="兵马俑"
            time="3-4 hours"
            price="¥120"
            tip="Go straight to Pit 1 — it's the biggest and most impressive. Hire a guide or use the audio tour"
            transport="Xi'an Railway Station Bus 306 (¥7, 1h ride)"
            book="7 days ahead"
          />
          <AttractionCard
            name="Xi'an City Wall"
            nameCn="西安城墙"
            time="2-3 hours"
            price="¥54"
            tip="Rent a bike (¥45) and cycle the full 14km — best at golden hour"
            transport="Metro Line 2, Yongningmen Station"
          />
          <AttractionCard
            name="Muslim Quarter"
            nameCn="回民街"
            time="2 hours"
            price="Free"
            tip="Come for dinner — the food street (Huimin Jie) is legendary. Try everything"
            transport="Metro Line 2, Zhonglou Station"
          />
          <AttractionCard
            name="Big Wild Goose Pagoda"
            nameCn="大雁塔"
            time="1.5 hours"
            price="¥50"
            tip="The night fountain show in the square is spectacular at 8pm"
            transport="Metro Line 3, Dayanta Station"
          />
          <AttractionCard
            name="Mount Huashan"
            nameCn="华山"
            time="Full day"
            price="¥160"
            tip="Take the cable car up. The Plank Walk is terrifying but unforgettable — harness included"
            transport="Xi'an North Station → Huashan North on HSR (30min, ¥54)"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Biang Biang Noodles" nameCn="裤带面" place="Old Wang's Biang Biang Noodles" price="¥15-25" rating="★★★★★" />
          <FoodCard name="Yangrou Paomo" nameCn="羊肉泡馍" place="Tongsheng Xiang / Old Sun Family" price="¥25-40" rating="★★★★★" />
          <FoodCard name="Liangpi (Cold Noodles)" nameCn="凉皮" place="Wei Jia Liangpi" price="¥8-15" rating="★★★★☆" />
          <FoodCard name="Suan Tang Jiaozi" nameCn="酸汤饺子" place="De Fa Chang Dumpling Restaurant" price="¥30-60" rating="★★★★☆" />
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/10 text-sm">🚇</span>
              <h3 className="text-sm font-semibold">Getting Around</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● 4 metro lines cover the main city — easy and affordable at ¥2-7 per ride</li>
              <li>● Didis are cheap — getting across the city rarely costs over ¥30</li>
              <li>● Buses reach the Terracotta Warriors and other suburban sites</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Beijing: HSR 4.5h ¥515</li>
              <li>● To Chengdu: HSR 3.5h ¥263</li>
              <li>● To Zhengzhou: HSR 2h ¥221</li>
              <li>● To Lanzhou: HSR 3h ¥175</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Bell Tower / City Center", best: "Best for Tourists", desc: "Walk to Muslim Quarter and City Wall. Most convenient base for sightseeing.", icon: "🔔" },
            { area: "Qujiang District", best: "Best for Culture", desc: "Close to Big Wild Goose Pagoda and Tang Paradise. Quieter and more upscale.", icon: "🎭" },
            { area: "Gaoxin (Hi-Tech Zone)", best: "Best for Budget", desc: "Modern area with affordable hotels and great metro links to the center.", icon: "🏢" },
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
