"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BeijingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — 初版风格 */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Beijing</h1>
        <p className="mt-2 text-lg text-stone">⛩️ Ancient Capital, Modern Heartbeat</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["History & Culture", "Urban", "Food"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Forbidden City"
            nameCn="故宫"
            time="3-4 hrs"
            price="¥60"
            tip="Book 7 days ahead on the Forbidden City mini-program"
            transport="Metro Line 1, Tiananmen East"
            book="7 days ahead"
          />
          <AttractionCard
            name="Great Wall (Badaling)"
            nameCn="长城"
            time="Full day"
            price="¥40"
            tip="Leave by 7am to avoid crowds"
            transport="HSR to Badaling Station"
          />
          <AttractionCard
            name="Temple of Heaven"
            nameCn="天坛"
            time="2 hrs"
            price="¥34"
            tip="Book via Changyou Park WeChat account"
            transport="Metro Line 5, Tiantandongmen"
          />
          <AttractionCard
            name="Summer Palace"
            nameCn="颐和园"
            time="3 hrs"
            price="¥30"
            tip="Go for the combo ticket"
            transport="Metro Line 4, Beigongmen"
          />
          <AttractionCard
            name="Nanluoguxiang"
            nameCn="南锣鼓巷"
            time="2 hrs"
            price="Free"
            tip="Best in the evening"
            transport="Metro Line 6, Nanluoguxiang"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Peking Duck" nameCn="北京烤鸭" place="Sijimin Fu / Dadong" price="¥150-300" rating="★★★★★" />
          <FoodCard name="Zhajiangmian" nameCn="炸酱面" place="Haiwan Ju" price="¥20-40" rating="★★★★☆" />
          <FoodCard name="Lamb Hotpot" nameCn="涮羊肉" place="Donglaishun" price="¥100-200" rating="★★★★★" />
          <FoodCard name="Douzhir & Jianquanr" nameCn="豆汁焦圈" place="Huguosi Snacks" price="¥10-20" rating="★★★☆☆" />
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
              <li>● Metro covers all — Alipay transit card</li>
              <li>● Didi from ¥13</li>
              <li>● Bike share: Meituan / HelloBike</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Shanghai: HSR 4.5h ¥558</li>
              <li>● To Xi'an: HSR 4.5h ¥515</li>
              <li>● To Chengdu: HSR 7.5h / flight 2.5h</li>
              <li>● To Chongqing: HSR 10.5h / flight 2.5h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Dongcheng (Wangfujing)", best: "Best for tourists", desc: "Walk to Forbidden City", icon: "🏛️" },
            { area: "Chaoyang (Sanlitun)", best: "Best for nightlife", desc: "Most international area", icon: "🌃" },
            { area: "Xicheng (Shichahai)", best: "Best for culture", desc: "Hutong experience", icon: "🏘️" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-rose-100 to-rose-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-rose-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
