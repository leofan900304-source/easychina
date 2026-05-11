import Link from "next/link";
import { ArrowLeft, MapPin, Train, Utensils } from "lucide-react";

export default function BeijingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">北京</h1>
        <p className="mt-2 text-lg text-stone">🏛️ 千年古都，现代之心</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["历史文化", "摩登都市", "美食"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* 必游景点 */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "故宫博物院", time: "3-4小时", price: "¥60（旺季）", tip: "提前7天在'故宫博物院'小程序预约", transport: "地铁1号线 天安门东站" },
            { name: "长城（八达岭）", time: "全天", price: "¥40", tip: "建议早7点出发避开人流。清河站高铁20分钟直达", transport: "高铁至八达岭站" },
            { name: "天坛公园", time: "2小时", price: "旺季¥34", tip: "可在'畅游公园'公众号预约", transport: "地铁5号线 天坛东门站" },
            { name: "颐和园", time: "3小时", price: "旺季¥30（联票¥60）", tip: "建议买联票", transport: "地铁4号线 北宫门站" },
            { name: "南锣鼓巷 / 什刹海", time: "2小时", price: "免费", tip: "适合傍晚去，周边很多胡同可逛", transport: "地铁6号线 南锣鼓巷站" },
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

      {/* 美食 */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-Try Food</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "北京烤鸭", place: "四季民福 / 大董", price: "¥150-300/人" },
            { name: "炸酱面", place: "海碗居 / 方砖厂69号", price: "¥20-40" },
            { name: "涮羊肉", place: "东来顺 / 聚宝源", price: "¥100-200/人" },
            { name: "豆汁儿 + 焦圈儿", place: "护国寺小吃 / 尹三豆汁", price: "¥10-20" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
              <p className="mt-0.5 text-xs text-stone/50">{food.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 交通 */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Transport</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-card p-5">
            <h3 className="mb-2 text-sm font-semibold">🚇 市内交通</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• 地铁覆盖所有主要景点，用支付宝领乘车码</li>
              <li>• 滴滴打车 ¥13起步</li>
              <li>• 共享单车（美团单车/哈啰单车）扫码即用</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <h3 className="mb-2 text-sm font-semibold">🚄 城市间交通</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• 到上海: 高铁4.5h ¥558</li>
              <li>• 到西安: 高铁4.5h ¥515</li>
              <li>• 到成都: 高铁7.5h 或 飞机2.5h</li>
              <li>• 到重庆: 高铁10.5h 或 飞机2.5h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 住宿 */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "东城区（王府井/天安门）", best: "游客首选", desc: "到故宫/天安门步行可达，交通便利" },
            { area: "朝阳区（三里屯/国贸）", best: "都市派", desc: "使馆区，国际化程度高，餐厅和夜生活丰富" },
            { area: "西城区（什刹海/后海）", best: "文艺派", desc: "胡同区，体验老北京生活" },
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
