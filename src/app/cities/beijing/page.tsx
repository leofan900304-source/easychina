import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BeijingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">Beijing</h1>
        <p className="mt-2 text-lg text-stone">🏛️ Ancient Capital, Modern Heartbeat</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["History & Culture", "Urban", "Food"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "Forbidden City", time: "3-4 hrs", price: "¥60 (peak)", tip: "Book 7 days ahead on the 'Forbidden City' mini-program", transport: "Metro Line 1, Tiananmen East" },
            { name: "Great Wall (Badaling)", time: "Full day", price: "¥40", tip: "Leave by 7am to avoid crowds. Qinghe Station → Badaling by high-speed rail (20min)", transport: "HSR to Badaling Station" },
            { name: "Temple of Heaven", time: "2 hrs", price: "¥34 (peak)", tip: "Book via 'Changyou Park' WeChat account", transport: "Metro Line 5, Tiantandongmen" },
            { name: "Summer Palace", time: "3 hrs", price: "¥30 (combo ¥60)", tip: "Go for the combo ticket, it's worth it", transport: "Metro Line 4, Beigongmen" },
            { name: "Nanluoguxiang & Shichahai", time: "2 hrs", price: "Free", tip: "Best in the evening — explore the hutong alleys", transport: "Metro Line 6, Nanluoguxiang" },
          ].map((spot) => (
            <div key={spot.name} className="rounded-2xl border border-black/5 bg-surface-card p-5">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{spot.name}</h3>
                <span className="text-xs text-stone/50">{spot.price}</span>
              </div>
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
            { name: "Peking Duck", place: "Sijimin Fu / Dadong", price: "¥150-300/person" },
            { name: "Zhajiangmian (Noodles)", place: "Haiwan Ju / Fangzhuanchang 69", price: "¥20-40" },
            { name: "Lamb Hotpot", place: "Donglaishun / Jubao Yuan", price: "¥100-200/person" },
            { name: "Douzhir & Jianquanr", place: "Huguosi Snacks", price: "¥10-20" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
              <p className="mt-0.5 text-xs text-stone/50">{food.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-card p-5">
            <h3 className="mb-2 text-sm font-semibold">🚇 Getting Around</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• Metro covers all major attractions — use Alipay transit card</li>
              <li>• Didi (ride-hailing) from ¥13</li>
              <li>• Bike share: Meituan / HelloBike — scan to ride</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <h3 className="mb-2 text-sm font-semibold">🚄 Intercity Travel</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• To Shanghai: HSR 4.5h ¥558</li>
              <li>• To Xi'an: HSR 4.5h ¥515</li>
              <li>• To Chengdu: HSR 7.5h or flight 2.5h</li>
              <li>• To Chongqing: HSR 10.5h or flight 2.5h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "Dongcheng (Wangfujing)", best: "Best for tourists", desc: "Walk to Forbidden City & Tiananmen. Great transport links." },
            { area: "Chaoyang (Sanlitun/CBD)", best: "Best for nightlife", desc: "Embassy district, most international. Best dining & bars." },
            { area: "Xicheng (Shichahai)", best: "Best for culture", desc: "Hutong area — experience old Beijing. Great for photos." },
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
