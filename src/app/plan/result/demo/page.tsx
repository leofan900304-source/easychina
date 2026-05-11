"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Share2, ArrowLeft, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

/* Demo 行程数据 */
const itinerary = {
  entry: "上海浦东 (PVG)",
  duration: "8天7晚",
  budget: "舒适",
  preferences: ["历史文化", "美食探索"],
  route: "上海(3天) → 🚄 高铁至北京(4天) → 北京首都机场出境",

  days: [
    {
      day: 1,
      title: "抵达上海 & 外滩",
      location: "上海",
      items: [
        { time: "上午", content: "抵达浦东机场 → 地铁2号线/磁悬浮至市区", type: "transport" },
        { time: "中午", content: "酒店入住（推荐: 南京东路附近，¥500-800/晚）", type: "hotel" },
        { time: "下午", content: "外滩漫步 → 南京路步行街", type: "sight" },
        { time: "晚上", content: "豫园晚餐（推荐: 绿波廊/南翔馒头店）", type: "food" },
      ],
      tips: [
        "🎟️ 门票: 外滩免费，无需预约",
        "💳 支付: 大餐厅接受国际信用卡，建议备少量现金",
        "🚇 交通: 地铁2号线/10号线 南京东路站",
      ],
    },
    {
      day: 2,
      title: "历史与法租界",
      location: "上海",
      items: [
        { time: "上午", content: "上海博物馆（免费，需公众号预约）", type: "sight" },
        { time: "中午", content: "法租界午餐（推荐: 老吉士）", type: "food" },
        { time: "下午", content: "武康路 → 田子坊", type: "sight" },
        { time: "晚上", content: "新天地晚餐", type: "food" },
      ],
      tips: [
        "🎟️ 上海博物馆需提前3天在公众号预约",
        "🚇 地铁1号线/8号线 人民广场站",
        "💡 如果搞不定中文预约，让酒店前台帮忙",
      ],
    },
    {
      day: 3,
      title: "上海 → 北京",
      location: "上海 → 北京",
      items: [
        { time: "上午", content: "G2次高铁 上海虹桥站→北京南站（4.5h，二等座¥558）", type: "transport" },
        { time: "下午", content: "北京南站→酒店入住 → 天坛公园", type: "sight" },
        { time: "晚上", content: "前门大街 + 北京烤鸭（推荐: 四季民福/大董）", type: "food" },
      ],
      tips: [
        "🚄 建议用 Trip.com（英文界面）提前购票",
        "🎟️ 天坛: 旺季¥34，可在'畅游公园'公众号预约",
        "💳 四季民福支持国际信用卡",
      ],
    },
    {
      day: 4,
      title: "故宫 & 胡同",
      location: "北京",
      items: [
        { time: "上午", content: "故宫博物院（¥60，需提前7天预约）", type: "sight" },
        { time: "下午", content: "南锣鼓巷 → 什刹海", type: "sight" },
        { time: "晚上", content: "簋街晚餐（推荐: 花家怡园）", type: "food" },
      ],
      tips: [
        "🎟️ 故宫预约在'故宫博物院'小程序，票很抢手",
        "🎧 建议租英文语音导览 ¥20",
        "🚇 地铁1号线 天安门东站",
      ],
    },
    {
      day: 5,
      title: "长城一日游",
      location: "北京",
      items: [
        { time: "全天", content: "八达岭长城（¥40，需预约）", type: "sight" },
        { time: "上午", content: "清河站→高铁20min到八达岭（¥20）", type: "transport" },
        { time: "下午", content: "长城游览 → 返回市区", type: "sight" },
      ],
      tips: [
        "🎟️ 在'八达岭长城'公众号预约",
        "👟 穿舒服的鞋子，带够水",
        "⏰ 建议早上7点出发避开人流",
      ],
    },
    {
      day: 6,
      title: "颐和园 & 798",
      location: "北京",
      items: [
        { time: "上午", content: "颐和园（旺季¥30，联票¥60）", type: "sight" },
        { time: "下午", content: "798艺术区", type: "sight" },
        { time: "晚上", content: "三里屯晚餐", type: "food" },
      ],
      tips: [
        "🎟️ 颐和园在'畅游公园'预约",
        "🚇 地铁4号线 北宫门站 → 颐和园",
        "🏙️ 三里屯国际信用卡普遍接受",
      ],
    },
    {
      day: 7,
      title: "离境",
      location: "北京",
      items: [
        { time: "上午", content: "自由活动/最后购物", type: "shopping" },
        { time: "下午", content: "前往北京首都机场", type: "transport" },
      ],
      tips: [
        "🚇 机场快线: 东直门站→首都机场 30min ¥25",
        "💰 保留购物发票，可在机场退税",
      ],
    },
  ],

  paymentTips: [
    "推荐行前完成: 开通支付宝（绑定国际信用卡）",
    "备用: 携带500-1000元现金（部分小摊只收现金）",
    "大型商场和酒店普遍接受Visa/Mastercard",
    "出租车建议用滴滴App（有英文版）",
  ],
  transportTips: [
    "城市间: 高铁建议Trip.com购票（英文界面，支持外国卡）",
    "市内: 支付宝领地铁乘车码直接刷",
    "打车: 滴滴App（有英文版），可绑外国信用卡",
    "地图: 高德地图App可替代Google Maps",
  ],
  appTips: [
    "必装: 支付宝 / 微信 / 高德地图 / 滴滴 / Trip.com",
    "VPN: 建议行前安装好（推荐Astrill/ExpressVPN）",
    "⚠️ 到中国前装好VPN，落地后部分网站无法访问",
  ],
};

export default function ResultPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showAllTips, setShowAllTips] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:py-16">
      {/* 顶部导航 */}
      <Link
        href="/plan"
        className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} />
        Back to Planner
      </Link>

      {/* 攻略头 */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-celadon/10 px-3 py-1 text-xs font-medium text-celadon">
          <Sparkles size={12} />
          Your Personalized Itinerary
        </div>
        <h1 className="text-3xl font-[450] tracking-tight">Your China Trip</h1>
        <p className="mt-2 text-sm text-stone">
          Curated just for you based on your preferences
        </p>
      </div>

      {/* 概览卡 */}
      <div className="mb-10 rounded-2xl border border-black/5 bg-surface-card p-6">
        <h2 className="mb-4 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">
          Trip Overview
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div>
            <span className="text-xs text-stone/50">Entry</span>
            <p className="font-medium">{itinerary.entry}</p>
          </div>
          <div>
            <span className="text-xs text-stone/50">Duration</span>
            <p className="font-medium">{itinerary.duration}</p>
          </div>
          <div>
            <span className="text-xs text-stone/50">Budget</span>
            <p className="font-medium">{itinerary.budget}</p>
          </div>
          <div>
            <span className="text-xs text-stone/50">Vibe</span>
            <p className="font-medium">{itinerary.preferences.join(" + ")}</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-white/50 p-3 text-sm text-stone">
          {itinerary.route}
        </div>
      </div>

      {/* 💳 支付模块 */}
      <div className="mb-6 rounded-2xl border border-osmanthus/20 bg-osmanthus/5 p-6">
        <h3 className="mb-3 text-sm font-semibold">💳 Payment Guide</h3>
        <ul className="space-y-1.5 text-sm text-stone">
          {itinerary.paymentTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 text-osmanthus">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* 🚄 交通模块 */}
      <div className="mb-10 rounded-2xl border border-celadon/20 bg-celadon/5 p-6">
        <h3 className="mb-3 text-sm font-semibold">🚄 Transport Guide</h3>
        <ul className="space-y-1.5 text-sm text-stone">
          {itinerary.transportTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 text-celadon">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* 按天行程 */}
      <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">
        Day by Day Itinerary
      </h2>

      <div className="space-y-3">
        {itinerary.days.map((day) => (
          <div
            key={day.day}
            className="overflow-hidden rounded-2xl border border-black/5 bg-surface-card transition-all"
          >
            <button
              onClick={() =>
                setExpandedDay(expandedDay === day.day ? null : day.day)
              }
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <div>
                <span className="text-xs font-medium text-celadon">
                  Day {day.day}
                </span>
                <h3 className="mt-0.5 font-medium">{day.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone/50">{day.location}</span>
                {expandedDay === day.day ? (
                  <ChevronUp size={16} className="text-stone/30" />
                ) : (
                  <ChevronDown size={16} className="text-stone/30" />
                )}
              </div>
            </button>

            {expandedDay === day.day && (
              <div className="animate-fade-in border-t border-black/5 px-5 pb-5">
                <div className="mt-4 space-y-3">
                  {day.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-12 flex-shrink-0 text-xs font-medium text-stone/60">
                        {item.time}
                      </span>
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5">
                          {item.type === "transport" && "🚄"}
                          {item.type === "hotel" && "🏨"}
                          {item.type === "sight" && "📍"}
                          {item.type === "food" && "🍜"}
                          {item.type === "shopping" && "🛍️"}
                        </span>
                        <span className="text-sm text-stone">{item.content}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {day.tips.length > 0 && (
                  <div className="mt-4 rounded-xl bg-white/50 p-3">
                    {day.tips.map((tip, i) => (
                      <p key={i} className="text-xs text-stone/70">
                        {tip}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 必备APP */}
      <div className="my-10 rounded-2xl border border-black/5 bg-surface-card p-6">
        <h3 className="mb-3 text-sm font-semibold">📱 Essential Apps</h3>
        <ul className="space-y-1.5 text-sm text-stone">
          {itinerary.appTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 text-stone/30">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* 底部操作 */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="btn-primary flex-1 justify-center text-sm">
          <Download size={16} />
          Download PDF Guide
        </button>
        <button className="btn-secondary flex-1 justify-center text-sm">
          <Share2 size={16} />
          Share
        </button>
        <Link
          href="/plan"
          className="btn-secondary flex-1 justify-center text-sm"
        >
          <Sparkles size={16} />
          Refine with AI
        </Link>
      </div>
    </div>
  );
}
