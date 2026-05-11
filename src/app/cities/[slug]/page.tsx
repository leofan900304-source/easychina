import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const cityData: Record<string, { name: string; tag: string; types: string[] }> = {
  "guangzhou": { name: "Guangzhou", tag: "🥟 Food capital, trade hub", types: ["Food ★★★★★", "Modern City ★★★★☆"] },
  "xian": { name: "Xi'an", tag: "🏯 Ancient capital of 13 dynasties", types: ["History & Culture ★★★★★", "Food ★★★★☆"] },
  "chengdu": { name: "Chengdu", tag: "🐼 Panda homeland, slow living", types: ["Food ★★★★★", "Leisure ★★★★☆", "Nature ★★★☆☆"] },
  "guilin": { name: "Guilin", tag: "⛰️ Scenery like no other", types: ["Natural Beauty ★★★★★", "Leisure ★★★★☆"] },
  "lijiang": { name: "Lijiang", tag: "🏘️ Ancient town, idyllic escape", types: ["Folklore ★★★★★", "Nature ★★★★☆", "Leisure ★★★★☆"] },
  "hangzhou": { name: "Hangzhou", tag: "🌊 Jiangnan water town, poetic living", types: ["Nature ★★★★★", "Leisure ★★★★☆", "History & Culture ★★★☆☆"] },
  "kunming": { name: "Kunming", tag: "🌸 Spring city, colorful Yunnan", types: ["Natural Beauty ★★★★★", "Folklore ★★★★☆", "Leisure ★★★★☆"] },
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
        <p className="text-sm text-stone">Detailed guide for {city.name} — coming soon.</p>
        <Link href="/plan" className="btn-primary mt-6 inline-flex text-sm">
          Plan your trip to {city.name}
        </Link>
      </div>
    </div>
  );
}
