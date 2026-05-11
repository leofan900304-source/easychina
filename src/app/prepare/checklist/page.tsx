"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

const checklistItems = [
  { category: "📄 Documents", items: [
    "Valid passport (6+ months validity)",
    "Chinese visa (if applicable)",
    "Hotel booking confirmations (printed)",
    "Flight itinerary (printed)",
    "Travel insurance documents",
    "Passport photos (2-3, just in case)",
  ]},
  { category: "📱 Digital Setup", items: [
    "Install VPN before departure",
    "Download Alipay + bind international card",
    "Download WeChat",
    "Download Didi (ride-hailing)",
    "Download Amap (navigation)",
    "Download Trip.com (train/hotel booking)",
    "Save offline maps of your cities",
    "Download translation app (Youdao/Google Translate)",
  ]},
  { category: "💳 Finance", items: [
    "Notify bank of China travel",
    "Withdraw ¥500-1000 RMB cash",
    "Check credit card foreign transaction fees",
    "Bring a backup card (different network)",
    "Add cards to Apple Pay / Google Pay",
  ]},
  { category: "🔌 Packing", items: [
    "Universal power adapter (China uses Type A/I, 220V)",
    "Power bank (portable charger — essential!)",
    "Portable Wi-Fi / eSIM confirmation",
    "Reusable water bottle (tap water not drinkable)",
    "Tissues / wet wipes (some public restrooms don't have)",
    "Comfortable walking shoes",
    "Face mask (still common on public transport)",
  ]},
  { category: "🌐 Connectivity", items: [
    "Test VPN works while still at home",
    "Save screenshots of key Chinese phrases",
    "Download offline translator language pack",
    "Share itinerary with family/friends",
    "Save emergency contacts: 110 (police), 120 (ambulance)",
  ]},
];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const total = checklistItems.reduce((sum, c) => sum + c.items.length, 0);
  const done = checked.size;
  const progress = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <Link href="/prepare" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        Back to Prepare
      </Link>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-[450] tracking-tight">Pre-Trip Checklist</h1>
          <p className="mt-2 text-sm text-stone">
            {done} of {total} completed ({progress}%)
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="btn-secondary !py-2 !px-4 text-xs"
        >
          <Printer size={14} />
          Print
        </button>
      </div>

      {/* 进度条 */}
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-black/5">
        <div
          className="h-full rounded-full bg-celadon transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-10 space-y-8">
        {checklistItems.map(({ category, items }) => (
          <div key={category}>
            <h2 className="mb-4 text-sm font-semibold">{category}</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/5 bg-surface-card px-4 py-3 transition-all hover:border-black/10"
                >
                  <input
                    type="checkbox"
                    checked={checked.has(item)}
                    onChange={() => toggle(item)}
                    className="h-4 w-4 accent-celadon"
                  />
                  <span
                    className={`text-sm transition-all ${
                      checked.has(item)
                        ? "text-stone/50 line-through"
                        : "text-ink"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
