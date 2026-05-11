import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChongqingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        All Cities
      </Link>

      {/* City Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-[450] tracking-tight">重庆</h1>
        <p className="mt-2 text-lg text-stone">🏔️ 8D魔幻山城</p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone/70 italic">
          &ldquo;一座建在山上的城市，轻轨穿楼过，火锅满街香。
          没有东西南北，只有上下左右。来了就知道什么叫魔幻现实主义。&rdquo;
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["美食探索 ★★★★★", "摩登都市 ★★★★☆", "自然风光 ★★★☆☆"].map((t) => (
            <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
          ))}
        </div>
      </div>

      {/* 必游景点 */}
      <section className="mb-12">
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Must-See Attractions</h2>
        <div className="space-y-4">
          {[
            { name: "洪崖洞", time: "2-3小时", tip: "傍晚+夜景最美。从1楼进电梯到11楼出去还是马路——这就是重庆", transport: "地铁1号线/6号线 小什字站" },
            { name: "长江索道", time: "15分钟", tip: "建议从南向北坐，视野更好。单程¥20", transport: "地铁6号线 上新街站" },
            { name: "磁器口古镇", time: "2-3小时", tip: "周末人很多，建议工作日去", transport: "地铁1号线 磁器口站" },
            { name: "解放碑 / 八一好吃街", time: "1-2小时", tip: "周边巷子里有很多地道老火锅", transport: "地铁2号线 临江门站" },
            { name: "武隆天生三桥", time: "全天", tip: "变形金刚4取景地，可在美团/Trip.com订票 ¥125", transport: "市区→武隆 大巴2.5h 或 火车2h" },
          ].map((spot) => (
            <div key={spot.name} className="rounded-2xl border border-black/5 bg-surface-card p-5">
              <h3 className="font-medium">{spot.name}</h3>
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
            { name: "重庆火锅", place: "佩姐老火锅 / 周师兄大刀腰片", tip: "不能吃辣请提前说'微微辣'" },
            { name: "重庆小面", place: "随便一家路边摊都好吃", tip: "早餐首选" },
            { name: "酸辣粉", place: "好又来酸辣粉", tip: "解放碑附近有好又来的店" },
            { name: "江湖菜", place: "杨记隆府", tip: "川菜系，重口味爱好者的天堂" },
          ].map((food) => (
            <div key={food.name} className="rounded-xl border border-black/5 bg-white/40 p-4">
              <h3 className="text-sm font-medium">{food.name}</h3>
              <p className="mt-1 text-xs text-stone">{food.place}</p>
              <p className="mt-0.5 text-xs text-stone/50">{food.tip}</p>
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
              <li>• 地铁非常发达，基本覆盖所有景点</li>
              <li>• 支付宝领乘车码直接刷</li>
              <li>• ⚠️ 山城特色：导航显示500米可能等于爬5层楼</li>
              <li>• 建议多用地铁，少步行爬坡</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-celadon/10 bg-celadon/5 p-5">
            <h3 className="mb-2 text-sm font-semibold">🚄 城市间交通</h3>
            <ul className="space-y-1.5 text-sm text-stone">
              <li>• 到成都: 高铁1h ¥154</li>
              <li>• 到西安: 高铁5h ¥330</li>
              <li>• 到广州: 高铁7h ¥445</li>
              <li>• 到北京: 高铁10.5h 或 飞机2.5h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 住宿 */}
      <section>
        <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Where to Stay</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { area: "解放碑/洪崖洞区域", best: "游客首选", desc: "交通方便，夜景好，到各景点都近" },
            { area: "观音桥区域", best: "本地生活", desc: "本地人生活区，美食多，价格适中" },
            { area: "南滨路区域", best: "江景观赏", desc: "看江景，环境好，稍微偏一点" },
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
