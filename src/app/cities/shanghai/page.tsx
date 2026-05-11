import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShanghaiPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink"><ArrowLeft size={14} />All Cities</Link>
      <h1 className="text-4xl font-[450] tracking-tight">上海</h1>
      <p className="mt-2 text-lg text-stone">🌃 东方明珠，魅力魔都</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["摩登都市 ★★★★★", "美食 ★★★★☆", "科技 ★★★★☆"].map((t) => (
          <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
        ))}
      </div>

      <section className="mt-10 mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "外滩", time: "1-2小时", tip: "傍晚灯光最美，免费无需预约", transport: "地铁2号线/10号线 南京东路站" },
            { name: "上海博物馆", time: "2-3小时", tip: "免费，提前3天公众号预约", transport: "地铁1号线/8号线 人民广场站" },
            { name: "东方明珠/陆家嘴", time: "2小时", tip: "登塔¥199，可在Trip.com购票", transport: "地铁2号线 陆家嘴站" },
            { name: "武康路", time: "1-2小时", tip: "适合散步拍照，沿途很多咖啡馆", transport: "地铁10号线 上海图书馆站" },
            { name: "豫园", time: "1.5小时", tip: "门票¥30，附近有南翔小笼包", transport: "地铁10号线 豫园站" },
          ].map((spot) => (
            <div key={spot.name} className="rounded-2xl border border-black/5 bg-surface-card p-5">
              <h3 className="font-medium">{spot.name}</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-stone">
                <span>⏱️ {spot.time}</span><span>🚇 {spot.transport}</span>
              </div>
              <p className="mt-2 text-xs text-stone/60">💡 {spot.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "小笼包", place: "南翔馒头店 / 佳家汤包" },
            { name: "上海本帮菜", place: "绿波廊 / 老吉士" },
            { name: "生煎包", place: "小杨生煎" },
            { name: "葱油拌面", place: "老地方面馆" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
