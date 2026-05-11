import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const apps = [
  {
    name: "支付宝 (Alipay)",
    category: "Payment",
    desc: "Everything from paying at restaurants to buying train tickets. Essential.",
    url: "https://apps.apple.com/app/alipay/id333206289",
  },
  {
    name: "微信 (WeChat)",
    category: "Messaging + Payment",
    desc: "China's super app — messaging, payments, and mini-programs.",
    url: "https://apps.apple.com/app/wechat/id414478124",
  },
  {
    name: "高德地图 (Amap)",
    category: "Navigation",
    desc: "Best map app in China. Public transport directions are excellent.",
    url: "https://apps.apple.com/app/amap/id461703208",
  },
  {
    name: "滴滴出行 (DiDi)",
    category: "Ride-hailing",
    desc: "China's Uber. Has an English version. Bind your card in advance.",
    url: "https://apps.apple.com/app/didi/id1064210820",
  },
  {
    name: "Trip.com (携程)",
    category: "Travel Booking",
    desc: "Hotels, flights, and train tickets in English. Accepts foreign cards.",
    url: "https://apps.apple.com/app/trip-com/id1238953736",
  },
  {
    name: "美团 (Meituan)",
    category: "Food / Local Services",
    desc: "Food delivery, restaurant reviews, movie tickets, and more.",
    url: "https://apps.apple.com/app/meituan/id423084503",
  },
  {
    name: "小红书 (Xiaohongshu)",
    category: "Social / Discovery",
    desc: "Great for finding hidden gems and travel inspiration from locals.",
    url: "https://apps.apple.com/app/xiaohongshu/id839668466",
  },
  {
    name: "有道翻译 (Youdao)",
    category: "Translation",
    desc: "Translate text and voice. Camera translation for menus and signs.",
    url: "https://apps.apple.com/app/youdao-translate/id1136857923",
  },
];

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <Link href="/prepare" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        Back to Prepare
      </Link>

      <h1 className="text-3xl font-[450] tracking-tight">Essential Apps</h1>
      <p className="mt-3 text-sm text-stone">
        Install these before you arrive for a smooth trip.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-black/5 bg-surface-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-medium">{app.name}</h2>
                <span className="text-[11px] text-celadon">{app.category}</span>
              </div>
              <ExternalLink size={14} className="mt-1 text-stone/30 transition-all group-hover:text-celadon" />
            </div>
            <p className="mt-2 text-sm text-stone">{app.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
