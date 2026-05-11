"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HangzhouPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Hangzhou</h1>
        <p className="mt-2 text-lg text-stone">🌊 Paradise on Earth, West Lake &amp; Silk Dreams</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Natural Scenery ★★★★★", "Tea Culture ★★★★☆", "History & Culture ★★★★☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="West Lake"
            nameCn="西湖"
            time="3-4 hours"
            price="Free"
            tip="Rent a bike and cycle the 10km lake loop. The Broken Bridge and Leifeng Pagoda are unmissable"
            transport="Metro Line 1, Ding'an Road or Longxiangqiao Station"
          />
          <AttractionCard
            name="Lingyin Temple"
            nameCn="灵隐寺"
            time="2 hours"
            price="¥45"
            tip="The flying peak grottoes with Buddhist carvings are just as impressive as the temple itself"
            transport="Bus 7 or 407 from city center"
          />
          <AttractionCard
            name="Longjing Tea Village"
            nameCn="龙井村"
            time="2 hours"
            price="Free"
            tip="Visit a tea plantation for a tasting. Buy Longjing tea from the farms, not tourist shops"
            transport="Bus 27 from West Lake area (30min)"
          />
          <AttractionCard
            name="Hefang Street"
            nameCn="河坊街"
            time="1.5 hours"
            price="Free"
            tip="Traditional street with local snacks and handicrafts. Try the stinky tofu — it's surprisingly good"
            transport="Metro Line 1, Ding'an Road Station"
          />
          <AttractionCard
            name="Xixi Wetland Park"
            nameCn="西溪湿地"
            time="3 hours"
            price="¥80"
            tip="Take the boat tour through the waterways. Quiet and serene — a nice break from the city"
            transport="Metro Line 3, Xixi Wetland Station"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Dongpo Pork" nameCn="东坡肉" place="Lou Wai Lou Restaurant" price="¥60-100" rating="★★★★★" />
          <FoodCard name="Longjing Shrimp" nameCn="龙井虾仁" place="Grandma's House / Lou Wai Lou" price="¥80-120" rating="★★★★★" />
          <FoodCard name="Beggar's Chicken" nameCn="叫花鸡" place="Hangzhou Restaurant" price="¥70-100" rating="★★★★☆" />
          <FoodCard name="West Lake Vinegar Fish" nameCn="西湖醋鱼" place="Lou Wai Lou / Zhi Wei Guan" price="¥60-90" rating="★★★★☆" />
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
              <li>● 5 metro lines connect the city. Line 1 goes right to West Lake and the HSR station</li>
              <li>● Public bikes are everywhere — first 60 minutes free with a deposit</li>
              <li>● West Lake has a sightseeing bus (¥5 per stop) that goes around the lake</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Shanghai: HSR 1h ¥73</li>
              <li>● To Nanjing: HSR 1.5h ¥119</li>
              <li>● To Beijing: HSR 4.5h ¥538</li>
              <li>● To Huangshan: HSR 1.5h ¥120</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "West Lake Area", best: "Best for Scenery", desc: "Top choice for first-time visitors. Wake up to lake views. Highest priced.", icon: "🏞️" },
            { area: "Wulin Square / Central", best: "Best for Shopping", desc: "Hangzhou's CBD with luxury malls, great metro access, and diverse dining.", icon: "🛍️" },
            { area: "Longjing / Hangzhou South", best: "Best for Peace & Tea", desc: "Stay among the tea plantations. Quiet, scenic, and perfect for a retreat.", icon: "🍵" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-emerald-100 to-emerald-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-emerald-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
