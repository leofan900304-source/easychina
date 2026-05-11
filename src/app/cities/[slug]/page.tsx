import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const cityData: Record<string, { name: string; tag: string; types: string[] }> = {
  "guangzhou": { name: "广州", tag: "🥟 美食之都，商贸中心", types: ["美食 ★★★★★", "摩登都市 ★★★★☆"] },
  "xian": { name: "西安", tag: "🏯 十三朝古都", types: ["历史文化 ★★★★★", "美食 ★★★★☆"] },
  "chengdu": { name: "成都", tag: "🐼 熊猫故乡，慢生活", types: ["美食 ★★★★★", "休闲 ★★★★☆", "自然 ★★★☆☆"] },
  "guilin": { name: "桂林", tag: "⛰️ 山水甲天下", types: ["自然风光 ★★★★★", "休闲 ★★★★☆"] },
  "lijiang": { name: "丽江", tag: "🏘️ 古城漫步，世外桃源", types: ["民俗 ★★★★★", "自然 ★★★★☆", "休闲 ★★★★☆"] },
  "hangzhou": { name: "杭州", tag: "🌊 江南水乡，诗意栖居", types: ["自然 ★★★★★", "休闲 ★★★★☆", "历史文化 ★★★☆☆"] },
  "kunming": { name: "昆明", tag: "🌸 春城花都，七彩云南", types: ["自然风光 ★★★★★", "民俗 ★★★★☆", "休闲 ★★★★☆"] },
};

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cityData[params.slug];
  if (!city) return <div className="p-12 text-center text-stone">City not found</div>;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link href="/cities" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />All Cities
      </Link>
      <h1 className="text-4xl font-[450] tracking-tight">{city.name}</h1>
      <p className="mt-2 text-lg text-stone">{city.tag}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {city.types.map((t) => (
          <span key={t} className="rounded-full bg-celadon/10 px-3 py-1 text-xs text-celadon">{t}</span>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-black/5 bg-surface-card p-8 text-center">
        <p className="text-sm text-stone">Detailed guide for {city.name} coming soon.</p>
        <Link href="/plan" className="btn-primary mt-6 inline-flex text-sm">
          Plan your trip to {city.name}
        </Link>
      </div>
    </div>
  );
}
