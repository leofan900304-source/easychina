"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KunmingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Kunming</h1>
        <p className="mt-2 text-lg text-stone">🌸 The Spring City, Gateway to Yunnan</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Natural Scenery ★★★★☆", "Minority Culture ★★★★☆", "Spring Climate ★★★★★"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Stone Forest (Shilin)"
            nameCn="石林"
            time="Half day"
            price="¥130"
            tip="A UNESCO site with surreal karst formations. Take the electric cart (¥25) to save walking"
            transport="HSR from Kunming South to Shilin West (20min, ¥18)"
          />
          <AttractionCard
            name="Dianchi Lake & Western Hills"
            nameCn="滇池"
            time="Half day"
            price="Free (cable car ¥70)"
            tip="Take the cable car up for panoramic views of the lake. The dragon gate carved into the cliff is incredible"
            transport="Bus 44 or 24 from city center (40min)"
          />
          <AttractionCard
            name="Flower & Bird Market"
            nameCn="花鸟市场"
            time="1.5 hours"
            price="Free"
            tip="Kunming is China's flower capital — buy fresh blooms for pocket change. Open every day"
            transport="Metro Line 2, Jiaosanqiao Station"
          />
          <AttractionCard
            name="Yuantong Temple"
            nameCn="圆通寺"
            time="1 hour"
            price="¥6"
            tip="The oldest Buddhist temple in Kunming. The carp pond in the courtyard is a peaceful spot"
            transport="Metro Line 2, Jiaosanqiao Station + short walk"
          />
          <AttractionCard
            name="Dongchuan Red Land"
            nameCn="东川红土地"
            time="Full day"
            price="Free"
            tip="Best photography in November when the red soil contrasts with golden crops. Hire a driver for the day"
            transport="Bus from Kunming North (4h, ¥80) or rent a car"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Crossing Bridge Noodles" nameCn="过桥米线" place="Jian Xing Yuan / Noodle King" price="¥20-50" rating="★★★★★" />
          <FoodCard name="Steam Pot Chicken" nameCn="汽锅鸡" place="Yunnan Mei Shi Ren Jia" price="¥50-80" rating="★★★★★" />
          <FoodCard name="Flower Cake" nameCn="鲜花饼" place="Panxianglou Bakery" price="¥5-10" rating="★★★★☆" />
          <FoodCard name="Erkuai (Rice Cakes)" nameCn="饵块" place="Street Food Stalls near Flower Market" price="¥8-15" rating="★★★★☆" />
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
              <li>● Metro lines 1-6 cover the city. Alipay transit QR works everywhere</li>
              <li>● Kunming's climate is perfect for cycling — use HelloBike or Meituan bike share</li>
              <li>● Taxis are affordable — flagfall ¥8 for first 3km</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Dali: HSR 2h ¥145</li>
              <li>● To Lijiang: HSR 3.5h ¥220</li>
              <li>● To Guilin: HSR 4.5h ¥345</li>
              <li>● To Chengdu: HSR 5.5h ¥488</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Green Lake / City Center", best: "Best for Tourists", desc: "Central location near Yuantong Temple, Green Lake Park, and the Flower Market.", icon: "🌊" },
            { area: "Dianchi Lake Area", best: "Best for Scenery", desc: "Lakeside resorts with mountain views. Further from the center but very relaxing.", icon: "🏔️" },
            { area: "Kunming South Station Area", best: "Best for Travelers", desc: "Convenient for HSR connections. Modern area with new hotels and good metro access.", icon: "🚄" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 to-pink-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-pink-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
