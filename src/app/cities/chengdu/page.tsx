"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChengduPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
      <Link href="/cities" className="mb-6 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header — Original style */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Chengdu</h1>
        <p className="mt-2 text-lg text-stone">🐼 Home of Pandas and Sichuan Heat</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Food Paradise ★★★★★", "Nature & Wildlife ★★★★★", "Relaxed Vibe ★★★★☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-5">
          <AttractionCard
            name="Panda Base"
            nameCn="大熊猫基地"
            time="Half day"
            price="¥55"
            tip="Arrive by 8am — pandas are most active in the morning before it gets hot"
            transport="Metro Line 3, Panda Avenue Station + shuttle bus"
          />
          <AttractionCard
            name="Jinli Ancient Street"
            nameCn="锦里古街"
            time="1.5 hours"
            price="Free"
            tip="Best in the evening when the red lanterns light up. Great for souvenirs"
            transport="Metro Line 3, Gaoshengqiao Station"
          />
          <AttractionCard
            name="Wuhou Shrine"
            nameCn="武侯祠"
            time="2 hours"
            price="¥50"
            tip="Dedicated to the Three Kingdoms era — the red wall corridor is the most photogenic spot"
            transport="Metro Line 3/5, Wuhouci Station"
          />
          <AttractionCard
            name="Dujiangyan Irrigation System"
            nameCn="都江堰"
            time="Half day"
            price="¥80"
            tip="A 2,200-year-old engineering marvel still in use. Combine with Mount Qingcheng"
            transport="HSR from Chengdu to Dujiangyan (30min, ¥30)"
          />
          <AttractionCard
            name="Leshan Giant Buddha"
            nameCn="乐山大佛"
            time="Full day"
            price="¥80"
            tip="Take the boat (¥70) for the full view — walking down to the feet is a steep climb back up"
            transport="HSR from Chengdu South to Leshan (45min, ¥54)"
          />
        </div>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <FoodCard name="Mapo Tofu" nameCn="麻婆豆腐" place="Chen Mapo Tofu (Kuanzhai Alley)" price="¥25-35" rating="★★★★★" />
          <FoodCard name="Kung Pao Chicken" nameCn="宫保鸡丁" place="Old Chengdu Restaurant" price="¥30-50" rating="★★★★★" />
          <FoodCard name="Dan Dan Noodles" nameCn="担担面" place="Xiao Tan Dou Hua" price="¥10-15" rating="★★★★★" />
          <FoodCard name="Sichuan Hotpot" nameCn="四川火锅" place="Huangcheng Laoma / Da Miao Hotpot" price="¥80-150/person" rating="★★★★★" />
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
              <li>● Metro lines 1-7 cover all major areas. Extended to the Panda Base in 2024</li>
              <li>● Chengdu is very bikeable — hundreds of km of dedicated cycle lanes</li>
              <li>● Didi starting from ¥10. Chengdu drivers are known for being friendly</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-celadon/20 text-sm">🚄</span>
              <h3 className="text-sm font-semibold">Intercity Travel</h3>
            </div>
            <ul className="space-y-2 text-sm text-stone">
              <li>● To Chongqing: HSR 1h ¥154</li>
              <li>● To Xi'an: HSR 3.5h ¥263</li>
              <li>● To Guilin: HSR 5h ¥362</li>
              <li>● To Kunming: HSR 5.5h ¥488</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Taikoo Li / Chunxi Road", best: "Best for Shopping & Dining", desc: "Heart of the city with luxury malls, trendy restaurants, and metro connections.", icon: "🛍️" },
            { area: "Kuanzhai Alley Area", best: "Best for Culture", desc: "Old town atmosphere with traditional tea houses and Sichuan opera nearby.", icon: "🏘️" },
            { area: "South 2nd Ring Area", best: "Best for Nightlife", desc: "University district with lively bars, street food, and affordable accommodation.", icon: "🌃" },
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
      <div className="flex items-center justify-between bg-gradient-to-r from-green-100 to-green-50 px-5 py-3">
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
    <div className="rounded-xl border-l-4 border-green-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft">
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
