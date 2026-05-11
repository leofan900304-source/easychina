"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Share2, ArrowLeft, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  items: { time: string; content: string; type: string }[];
  tips: string[];
}

interface ItineraryData {
  route: string;
  days: ItineraryDay[];
  paymentTips: string[];
  transportTips: string[];
  appTips: string[];
}

export default function CustomResultPage() {
  const [itinerary, setItinerary] = useState<ItineraryData | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("itinerary");
    if (stored) {
      setItinerary(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-celadon border-t-transparent" />
          <p className="text-sm text-stone">Loading your itinerary...</p>
        </div>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-stone">No itinerary found. Please go back and generate one.</p>
        <Link href="/plan" className="btn-primary mt-6 inline-flex text-sm">
          Start Planning
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:py-16">
      <Link href="/plan" className="mb-8 inline-flex items-center gap-1.5 text-xs text-stone transition-colors hover:text-ink">
        <ArrowLeft size={14} />
        Back to Planner
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-celadon/10 px-3 py-1 text-xs font-medium text-celadon">
          <Sparkles size={12} />
          AI-Generated Itinerary
        </div>
        <h1 className="text-3xl font-[450] tracking-tight">Your China Trip</h1>
        <p className="mt-2 text-sm text-stone">Curated just for you by AI</p>
      </div>

      {/* Route overview */}
      <div className="mb-10 rounded-2xl border border-black/5 bg-surface-card p-6">
        <h2 className="mb-3 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Route</h2>
        <p className="text-sm text-stone">{itinerary.route}</p>
      </div>

      {/* Payment tips */}
      {itinerary.paymentTips.length > 0 && (
        <div className="mb-6 rounded-2xl border border-osmanthus/20 bg-osmanthus/5 p-6">
          <h3 className="mb-3 text-sm font-semibold">💳 Payment</h3>
          <ul className="space-y-1.5 text-sm text-stone">
            {itinerary.paymentTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-osmanthus">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Transport tips */}
      {itinerary.transportTips.length > 0 && (
        <div className="mb-10 rounded-2xl border border-celadon/20 bg-celadon/5 p-6">
          <h3 className="mb-3 text-sm font-semibold">🚄 Transport</h3>
          <ul className="space-y-1.5 text-sm text-stone">
            {itinerary.transportTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-celadon">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Day by day */}
      <h2 className="mb-6 text-xs font-semibold tracking-[3px] text-stone/50 uppercase">Your Itinerary</h2>

      <div className="space-y-3">
        {itinerary.days.map((day) => (
          <div key={day.day} className="overflow-hidden rounded-2xl border border-black/5 bg-surface-card transition-all">
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <div>
                <span className="text-xs font-medium text-celadon">Day {day.day}</span>
                <h3 className="mt-0.5 font-medium">{day.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone/50">{day.location}</span>
                {expandedDay === day.day ? <ChevronUp size={16} className="text-stone/30" /> : <ChevronDown size={16} className="text-stone/30" />}
              </div>
            </button>

            {expandedDay === day.day && (
              <div className="animate-fade-in border-t border-black/5 px-5 pb-5">
                <div className="mt-4 space-y-3">
                  {day.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-16 flex-shrink-0 text-xs font-medium text-stone/60">{item.time}</span>
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
                      <p key={i} className="text-xs text-stone/70">{tip}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* App tips */}
      {itinerary.appTips.length > 0 && (
        <div className="my-10 rounded-2xl border border-black/5 bg-surface-card p-6">
          <h3 className="mb-3 text-sm font-semibold">📱 Apps</h3>
          <ul className="space-y-1.5 text-sm text-stone">
            {itinerary.appTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-stone/30">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="btn-primary flex-1 justify-center text-sm">
          <Download size={16} />
          Download PDF
        </button>
        <button className="btn-secondary flex-1 justify-center text-sm">
          <Share2 size={16} />
          Share
        </button>
        <Link href="/plan" className="btn-secondary flex-1 justify-center text-sm">
          <Sparkles size={16} />
          Generate Again
        </Link>
      </div>
    </div>
  );
}
