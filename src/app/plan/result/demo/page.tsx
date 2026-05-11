"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Share2, ArrowLeft, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

/* Demo Itinerary Data */
const itinerary = {
  entry: "上海浦东 (PVG)",
  duration: "8天7晚",
  budget: "Comfort",
  preferences: ["History & Culture", "Food Exploration"],
  route: "Shanghai (3 days) → 🚄 High-speed rail to Beijing (4 days) → Depart from Beijing Capital Airport",

  days: [
    {
      day: 1,
      title: "Arrival in Shanghai & The Bund",
      location: "Shanghai",
      items: [
        { time: "Morning", content: "Arrive at Pudong Airport → Take Metro Line 2/Maglev to city center", type: "transport" },
        { time: "Midday", content: "Check in to hotel (Recommended: near Nanjing East Road, ¥500-800/night)", type: "hotel" },
        { time: "Afternoon", content: "Stroll along The Bund → Nanjing Road Pedestrian Street", type: "sight" },
        { time: "Evening", content: "Dinner at Yu Garden (Recommended: Green Wave Hall/Nanxiang Steamed Bun Restaurant)", type: "food" },
      ],
      tips: [
        "🎟️ Tickets: The Bund is free, no reservation needed",
        "💳 Payment: Large restaurants accept international credit cards; it's recommended to carry some cash",
        "🚇 Transport: Metro Line 2/10, East Nanjing Road Station",
      ],
    },
    {
      day: 2,
      title: "History & French Concession",
      location: "Shanghai",
      items: [
        { time: "Morning", content: "Shanghai Museum (Free, reservation required via WeChat official account)", type: "sight" },
        { time: "Midday", content: "Lunch in French Concession (Recommended: Old Jesse)", type: "food" },
        { time: "Afternoon", content: "Wukang Road → Tianzifang", type: "sight" },
        { time: "Evening", content: "Dinner at Xintiandi", type: "food" },
      ],
      tips: [
        "🎟️ Shanghai Museum requires reservation 3 days in advance via WeChat official account",
        "🚇 Metro Line 1/8, People's Square Station",
        "💡 If you can't manage the Chinese reservation, ask the hotel front desk for help",
      ],
    },
    {
      day: 3,
      title: "Shanghai → Beijing",
      location: "Shanghai → Beijing",
      items: [
        { time: "Morning", content: "G2 High-speed rail Shanghai Hongqiao Station→Beijing South Station (4.5h, second class ¥558)", type: "transport" },
        { time: "Afternoon", content: "Beijing South Station→Check in to hotel → Temple of Heaven Park", type: "sight" },
        { time: "Evening", content: "Qianmen Street + Peking Duck (Recommended: Si Ji Min Fu/Da Dong)", type: "food" },
      ],
      tips: [
        "🚄 It's recommended to buy tickets in advance on Trip.com (English interface)",
        "🎟️ Temple of Heaven: Peak season ¥34, can reserve via 'Changyou Park' WeChat official account",
        "💳 Si Ji Min Fu accepts international credit cards",
      ],
    },
    {
      day: 4,
      title: "Forbidden City & Hutongs",
      location: "Beijing",
      items: [
        { time: "Morning", content: "Forbidden City (¥60, reservation required 7 days in advance)", type: "sight" },
        { time: "Afternoon", content: "Nanluoguxiang → Shichahai", type: "sight" },
        { time: "Evening", content: "Dinner at Guijie (Recommended: Hua Jia Yi Yuan)", type: "food" },
      ],
      tips: [
        "🎟️ Forbidden City reservations are on the 'Palace Museum' mini-program; tickets are very competitive",
        "🎧 Recommended to rent an English audio guide ¥20",
        "🚇 Metro Line 1, Tiananmen East Station",
      ],
    },
    {
      day: 5,
      title: "Great Wall Day Trip",
      location: "Beijing",
      items: [
        { time: "Full Day", content: "Badaling Great Wall (¥40, reservation required)", type: "sight" },
        { time: "Morning", content: "Qinghe Station → 20min high-speed rail to Badaling (¥20)", type: "transport" },
        { time: "Afternoon", content: "Great Wall sightseeing → Return to city", type: "sight" },
      ],
      tips: [
        "🎟️ Reserve on the 'Badaling Great Wall' WeChat official account",
        "👟 Wear comfortable shoes and bring enough water",
        "⏰ Recommended to depart at 7am to avoid crowds",
      ],
    },
    {
      day: 6,
      title: "Summer Palace & 798",
      location: "Beijing",
      items: [
        { time: "Morning", content: "Summer Palace (Peak season ¥30, combo ticket ¥60)", type: "sight" },
        { time: "Afternoon", content: "798 Art District", type: "sight" },
        { time: "Evening", content: "Dinner at Sanlitun", type: "food" },
      ],
      tips: [
        "🎟️ Summer Palace reservation on 'Changyou Park' WeChat official account",
        "🚇 Metro Line 4, Beigongmen Station → Summer Palace",
        "🏙️ International credit cards are widely accepted in Sanlitun",
      ],
    },
    {
      day: 7,
      title: "Departure",
      location: "Beijing",
      items: [
        { time: "Morning", content: "Free time / Final shopping", type: "shopping" },
        { time: "Afternoon", content: "Head to Beijing Capital Airport", type: "transport" },
      ],
      tips: [
        "🚇 Airport Express: Dongzhimen Station→Capital Airport 30min ¥25",
        "💰 Keep your shopping receipts for tax refund at the airport",
      ],
    },
  ],

  paymentTips: [
    "Recommended before departure: Set up Alipay (link an international credit card)",
    "Backup: Carry 500-1000 RMB in cash (some small vendors only accept cash)",
    "Large shopping malls and hotels generally accept Visa/Mastercard",
    "For taxis, it's recommended to use the Didi app (has English version)",
  ],
  transportTips: [
    "Between cities: Buy high-speed rail tickets on Trip.com (English interface, supports foreign cards)",
    "Within city: Get metro QR code via Alipay to swipe directly",
    "Ride-hailing: Didi App (has English version), can link foreign credit cards",
    "Maps: Amap (Gaode Maps) App can replace Google Maps",
  ],
  appTips: [
    "Must-install: Alipay / WeChat / Amap / Didi / Trip.com",
    "VPN: Recommended to install before departure (recommend Astrill/ExpressVPN)",
    "⚠️ Install VPN before arriving in China; some websites will be inaccessible after landing",
  ],
};

export default function ResultPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showAllTips, setShowAllTips] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:py-16">
      {/* Top navigation */}
      <Link
        href="/plan"
        className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} />
        Back to Planner
      </Link>

      {/* Itinerary header */}
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

      {/* Trip overview card */}
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

      {/* 💳 Payment module */}
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

      {/* 🚄 Transport module */}
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

      {/* Day-by-day itinerary */}
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

      {/* Essential apps */}
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

      {/* Bottom actions */}
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
