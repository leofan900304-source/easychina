"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GuangzhouPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Guangzhou</h1>
        <p className="mt-2 text-lg text-stone">🥟 The Cantonese Capital, Where Dim Sum Was Born</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Food Paradise ★★★★★", "Trade & Commerce ★★★★☆", "History & Culture ★★★★☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Canton Tower"
            nameCn="广州塔"
            time="1-2 hours"
            price="¥150"
            tip="Visit at sunset for the best views. The LED light show runs 7-10pm nightly"
            transport="Metro Line 3/APM, Canton Tower Station"
          />
          <AttractionCard
            name="Chen Clan Academy"
            nameCn="陈家祠"
            time="1.5 hours"
            price="¥10"
            tip="One of the finest surviving examples of Lingnan architecture — don't miss the rooftop ceramics"
            transport="Metro Line 1, Chen Clan Academy Station"
          />
          <AttractionCard
            name="Shangxiajiu Pedestrian Street"
            nameCn="上下九步行街"
            time="2 hours"
            price="Free"
            tip="The best street for Cantonese snacks and bargain shopping — come hungry"
            transport="Metro Line 1, Changshou Lu Station"
          />
          <AttractionCard
            name="Shamian Island"
            nameCn="沙面岛"
            time="2 hours"
            price="Free"
            tip="Rent a bike and explore the colonial-era architecture. Great for photos"
            transport="Metro Line 6, Cultural Park Station"
          />
          <AttractionCard
            name="Baiyun Mountain"
            nameCn="白云山"
            time="Half day"
            price="¥5"
            tip="Take the cable car up (¥25) and walk down. Morning visits are cooler and less crowded"
            transport="Metro Line 3, Baiyun Dadao Bei Station"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Dim Sum (Yum Cha)" nameCn="点心" place="Tao Tao Ju / Guangzhou Restaurant" price="¥50-100/person" rating="★★★★★" />
          <FoodCard name="Char Siu (BBQ Pork)" nameCn="叉烧" place="Bing Sheng / Fat Brother" price="¥40-80" rating="★★★★★" />
          <FoodCard name="Wonton Noodles" nameCn="云吞面" place="Bao Yuan Dian" price="¥15-25" rating="★★★★☆" />
          <FoodCard name="Claypot Rice" nameCn="煲仔饭" place="Superstar Claypot Rice" price="¥20-40" rating="★★★★☆" />
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
              <li>● Metro is king — 16 lines cover the entire city. Use Alipay transit card</li>
              <li>● Didi from ¥12. Taxi flagfall ¥12 for the first 3km</li>
              <li>● Water buses on the Pearl River are a cheap scenic ride — ¥2-5</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Shenzhen: HSR 1h ¥75</li>
              <li>● To Hong Kong: HSR 1h ¥215</li>
              <li>● To Guilin: HSR 2.5h ¥165</li>
              <li>● To Changsha: HSR 2.5h ¥314</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Tianhe CBD", best: "Best for Business & Shopping", desc: "Modern district with skyscrapers, malls, and easy metro access.", icon: "🏙️" },
            { area: "Liwan / Yuexiu", best: "Best for Foodies", desc: "Old Guangzhou — classic Cantonese eateries, dim sum houses, and historic streets.", icon: "🥟" },
            { area: "Haizhu (Canton Tower Area)", best: "Best for Views", desc: "Great skyline views across the Pearl River. Quieter and slightly cheaper.", icon: "🌉" },
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
