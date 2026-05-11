import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Map } from "lucide-react";

const popularCities = [
  { name: "北京", tag: "🏛️ 千年古都", type: "历史文化", bg: "bg-[#E8E3DC]" },
  { name: "上海", tag: "🌃 摩登魔都", type: "摩登都市", bg: "bg-[#E3E8E4]" },
  { name: "西安", tag: "🏯 十三朝古都", type: "历史文化", bg: "bg-[#E8E0D8]" },
  { name: "成都", tag: "🐼 熊猫故乡", type: "美食休闲", bg: "bg-[#E0E8E0]" },
  { name: "重庆", tag: "🏔️ 8D山城", type: "美食都市", bg: "bg-[#E8E0E0]" },
  { name: "桂林", tag: "⛰️ 山水甲天下", type: "自然风光", bg: "bg-[#E0E8E6]" },
];

export default function Home() {
  return (
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        {/* 水墨装饰 — 右下角 */}
        <div className="pointer-events-none absolute bottom-0 right-0 opacity-[0.04]">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
            <path d="M0 300 L80 120 L150 180 L220 60 L300 140 L380 80 L400 300Z" fill="#2C2C2C" />
            <path d="M0 300 L60 160 L120 210 L180 100 L250 150 L330 110 L400 300Z" fill="#2C2C2C" opacity="0.5" />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          {/* 装饰标签 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-celadon/10 px-4 py-1.5 text-xs font-medium text-celadon">
            <Sparkles size={14} />
            AI-Powered Travel Planning
          </div>

          <h1 className="text-balance text-4xl font-[450] tracking-tight md:text-6xl lg:text-7xl">
            China Travel,{" "}
            <span className="italic text-celadon">Made Easy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
            Tell us your preferences and we'll build a personalized China
            itinerary — from apps and SIM cards to cities and hidden gems.
            Worry-free, start to finish.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/plan" className="btn-primary text-base">
              Start Your Trip Plan
              <ArrowRight size={18} />
            </Link>
            <Link href="/cities" className="btn-secondary text-base">
              Explore Cities
            </Link>
          </div>
        </div>
      </section>

      {/* 三步介绍 */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[3px] text-stone uppercase">
              — How It Works
            </span>
            <h2 className="mt-3 text-3xl font-[450] tracking-tight">
              Three steps to your perfect trip
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: <Map size={28} />,
                title: "Tell us about you",
                desc: "Where you're landing, how long you're staying, your budget, and what you love — history, food, nature, or city life.",
              },
              {
                step: "02",
                icon: <Sparkles size={28} />,
                title: "Get your custom plan",
                desc: "Our AI builds a day-by-day itinerary with transport, dining, and booking tips — tailored to your preferences.",
              },
              {
                step: "03",
                icon: <Shield size={28} />,
                title: "Travel worry-free",
                desc: "From SIM cards to WeChat Pay, we cover everything you need before and during your trip.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group rounded-2xl border border-black/5 bg-surface-card p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="text-xs font-semibold tracking-[3px] text-stone/40">
                  Step {item.step}
                </span>
                <div className="mt-4 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-celadon/10 text-celadon">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门城市 */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold tracking-[3px] text-stone uppercase">
              — Popular Destinations
            </span>
            <h2 className="mt-3 text-3xl font-[450] tracking-tight">
              Explore China's top cities
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-stone">
              Each city comes with curated recommendations for attractions,
              food, transport, and booking tips.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCities.map((city) => (
              <Link
                key={city.name}
                href={`/cities/${city.name}`}
                className={`${city.bg} city-card group`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-ink">{city.name}</span>
                    <div className="mt-0.5 text-xs text-stone">{city.tag}</div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-stone/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-celadon"
                  />
                </div>
                <div className="mt-3">
                  <span className="inline-block rounded-full bg-white/50 px-2.5 py-0.5 text-[11px] text-stone">
                    {city.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/cities" className="btn-secondary">
              View All 10 Cities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-[450] tracking-tight">
            Ready to plan your China adventure?
          </h2>
          <p className="mt-4 text-stone">
            No spam, no signup required. Just tell us what you love and we'll
            build your itinerary.
          </p>
          <Link href="/plan" className="btn-primary mt-8 text-base">
            Start Your Trip Plan
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
