import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cities = [
  { name: "北京", slug: "beijing", tag: "🏛️ 千年古都，现代之心", type: ["历史文化", "摩登都市", "美食"], bg: "bg-[#E8E3DC]" },
  { name: "上海", slug: "shanghai", tag: "🌃 东方明珠，魅力魔都", type: ["摩登都市", "美食", "科技"], bg: "bg-[#E3E8E4]" },
  { name: "广州", slug: "guangzhou", tag: "🥟 美食之都，商贸中心", type: ["美食", "摩登都市"], bg: "bg-[#E8E8E0]" },
  { name: "西安", slug: "xian", tag: "🏯 十三朝古都", type: ["历史文化", "美食"], bg: "bg-[#E8E0D8]" },
  { name: "成都", slug: "chengdu", tag: "🐼 熊猫故乡，慢生活", type: ["美食", "休闲", "自然"], bg: "bg-[#E0E8E0]" },
  { name: "重庆", slug: "chongqing", tag: "🏔️ 8D魔幻山城", type: ["美食", "摩登都市", "自然"], bg: "bg-[#E8E0E0]" },
  { name: "桂林", slug: "guilin", tag: "⛰️ 山水甲天下", type: ["自然风光", "休闲"], bg: "bg-[#E0E8E6]" },
  { name: "丽江", slug: "lijiang", tag: "🏘️ 古城漫步，世外桃源", type: ["民俗", "自然", "休闲"], bg: "bg-[#E8E8E8]" },
  { name: "杭州", slug: "hangzhou", tag: "🌊 江南水乡，诗意栖居", type: ["自然", "休闲", "历史文化"], bg: "bg-[#E0E8E4]" },
  { name: "昆明", slug: "kunming", tag: "🌸 春城花都，七彩云南", type: ["自然风光", "民俗", "休闲"], bg: "bg-[#E8E4E0]" },
];

const preferenceFilters = [
  "全部",
  "历史文化",
  "自然风光",
  "摩登都市",
  "美食",
  "民俗",
  "休闲",
  "科技",
];

export default function CitiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
      <div className="mb-10">
        <span className="text-xs font-semibold tracking-[3px] text-stone uppercase">
          — Explore
        </span>
        <h1 className="mt-3 text-3xl font-[450] tracking-tight">
          China's Best Cities
        </h1>
        <p className="mt-3 max-w-lg text-sm text-stone">
          Each city has its own personality. Browse to find your perfect
          match, then add them to your personalized itinerary.
        </p>
      </div>

      {/* 筛选器 */}
      <div className="mb-8 flex flex-wrap gap-2">
        {preferenceFilters.map((filter) => (
          <button
            key={filter}
            className="rounded-full border border-black/5 bg-surface-card px-4 py-1.5 text-xs font-medium text-stone transition-all hover:border-celadon/30 hover:text-celadon"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 城市网格 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className={`${city.bg} group rounded-2xl border border-black/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium">{city.name}</span>
              <ArrowRight
                size={18}
                className="text-stone/30 transition-all group-hover:translate-x-1 group-hover:text-celadon"
              />
            </div>
            <p className="mt-1 text-sm text-stone">{city.tag}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {city.type.map((t) => (
                <span
                  key={t}
                  className="inline-block rounded-full bg-white/50 px-2.5 py-0.5 text-[11px] text-stone"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
