"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

/* ===== 步骤定义 ===== */
type TravelPreferences = {
  entryCity: string;
  duration: number;
  budget: "budget" | "economic" | "comfortable" | "luxury";
  companions: "solo" | "couple" | "friends" | "family_kids" | "family_elderly";
  firstTime: boolean;
  appFamiliarity: number; // 1-5
  preferences: string[];
  pace: "packed" | "balanced" | "relaxed";
  diet: string[];
  specialNeeds: string;
};

const entryCities = [
  { value: "beijing_capital", label: "北京首都 (PEK)" },
  { value: "beijing_daxing", label: "北京大兴 (PKX)" },
  { value: "shanghai_pudong", label: "上海浦东 (PVG)" },
  { value: "shanghai_hongqiao", label: "上海虹桥 (SHA)" },
  { value: "guangzhou_baiyun", label: "广州白云 (CAN)" },
  { value: "chengdu_tianfu", label: "成都天府 (TFU)" },
  { value: "xian_xianyang", label: "西安咸阳 (XIY)" },
  { value: "chongqing_jiangbei", label: "重庆江北 (CKG)" },
];

const preferenceOptions = [
  { id: "history", label: "历史文化", emoji: "🏛️", desc: "名胜古迹、博物馆、古城" },
  { id: "nature", label: "自然风光", emoji: "⛰️", desc: "山川、湖泊、国家公园" },
  { id: "urban", label: "摩登都市", emoji: "🌃", desc: "天际线、购物、夜生活" },
  { id: "food", label: "美食探索", emoji: "🍜", desc: "街头小吃、当地菜系" },
  { id: "tech", label: "科技与创新", emoji: "🔬", desc: "科技园区、现代化设施" },
  { id: "culture", label: "民俗体验", emoji: "🎭", desc: "少数民族文化、手工艺" },
  { id: "relax", label: "休闲度假", emoji: "♨️", desc: "温泉、度假村、慢节奏" },
  { id: "adventure", label: "户外探险", emoji: "🧗", desc: "徒步、骑行、极限运动" },
];

const dietOptions = [
  { id: "none", label: "无限制" },
  { id: "vegetarian", label: "素食 / Vegan" },
  { id: "halal", label: "清真 (Halal)" },
  { id: "no_spicy", label: "无辣" },
];

export default function PlanPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const [form, setForm] = useState<TravelPreferences>({
    entryCity: "",
    duration: 5,
    budget: "comfortable",
    companions: "solo",
    firstTime: true,
    appFamiliarity: 2,
    preferences: [],
    pace: "balanced",
    diet: [],
    specialNeeds: "",
  });

  const update = (key: keyof TravelPreferences, value: unknown) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const togglePreference = (id: string) => {
    setForm((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(id)
        ? prev.preferences.filter((p) => p !== id)
        : [...prev.preferences, id].slice(0, 3),
    }));
  };

  const toggleDiet = (id: string) => {
    setForm((prev) => ({
      ...prev,
      diet: prev.diet.includes(id)
        ? prev.diet.filter((d) => d !== id)
        : [...prev.diet, id],
    }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // 模拟 AI 生成延迟
    setTimeout(() => {
      setIsGenerating(false);
      router.push("/plan/result/demo");
    }, 3000);
  };

  const canProceed = () => {
    if (step === 1) return form.entryCity !== "";
    if (step === 2) return form.preferences.length > 0;
    return true;
  };

  // 加载状态
  if (isGenerating) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
        <div className="text-center animate-fade-in">
          {/* 加载动画 */}
          <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-celadon/20" />
            <div className="absolute inset-2 rounded-full bg-celadon/30" />
            <Sparkles size={28} className="relative text-celadon" />
          </div>
          <p className="text-lg font-medium">Crafting your personalized itinerary</p>
          <p className="mt-2 text-sm text-stone">
            Analyzing preferences, matching cities, planning routes...
          </p>
          <div className="mx-auto mt-8 h-1 w-48 overflow-hidden rounded-full bg-celadon/10">
            <div className="h-full w-1/2 animate-[slide_1.5s_ease-in-out_infinite] rounded-full bg-celadon/40" />
          </div>
        </div>
        <style jsx>{`
          @keyframes slide {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(200%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
      {/* 步骤指示器 */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                  s === step
                    ? "bg-celadon text-paper"
                    : s < step
                      ? "bg-celadon/20 text-celadon"
                      : "bg-black/5 text-stone/40"
                }`}
              >
                {s < step ? "✓" : s}
              </div>
              {s < 3 && (
                <div
                  className={`h-px w-8 transition-colors duration-300 ${
                    s < step ? "bg-celadon/40" : "bg-black/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-medium tracking-[3px] text-stone/60 uppercase">
          {step === 1 && "Basic Info"}
          {step === 2 && "Preferences"}
          {step === 3 && "Details"}
        </p>
      </div>

      {/* Step 1: 基础信息 */}
      {step === 1 && (
        <div className="animate-fade-in space-y-6">
          <h2 className="text-2xl font-[450]">Where and when?</h2>

          {/* 入境城市 */}
          <div>
            <label className="mb-2 block text-sm font-medium">Entry Airport</label>
            <select
              value={form.entryCity}
              onChange={(e) => update("entryCity", e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-celadon focus:ring-1 focus:ring-celadon/20"
            >
              <option value="">Select your entry city...</option>
              {entryCities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          {/* 停留天数 */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Duration: <span className="text-celadon">{form.duration} days</span>
            </label>
            <input
              type="range"
              min={1}
              max={30}
              value={form.duration}
              onChange={(e) => update("duration", Number(e.target.value))}
              className="w-full accent-celadon"
            />
            <div className="mt-1 flex justify-between text-xs text-stone/50">
              <span>1 day</span>
              <span>30 days</span>
            </div>
          </div>

          {/* 预算 */}
          <div>
            <label className="mb-2 block text-sm font-medium">Budget</label>
            <div className="grid grid-cols-4 gap-2">
              {(["budget", "economic", "comfortable", "luxury"] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => update("budget", b)}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                    form.budget === b
                      ? "border-celadon bg-celadon/10 text-celadon"
                      : "border-black/5 bg-white/40 text-stone hover:border-black/10"
                  }`}
                >
                  {b === "budget" && "🎒 穷游"}
                  {b === "economic" && "💰 经济"}
                  {b === "comfortable" && "🌟 舒适"}
                  {b === "luxury" && "👑 豪华"}
                </button>
              ))}
            </div>
          </div>

          {/* 同行人 */}
          <div>
            <label className="mb-2 block text-sm font-medium">Traveling with</label>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {([
                { value: "solo", label: "独自" },
                { value: "couple", label: "情侣" },
                { value: "friends", label: "朋友" },
                { value: "family_kids", label: "家庭（有小孩）" },
                { value: "family_elderly", label: "家庭（有老人）" },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("companions", opt.value)}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                    form.companions === opt.value
                      ? "border-celadon bg-celadon/10 text-celadon"
                      : "border-black/5 bg-white/40 text-stone hover:border-black/10"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 是否首次来 + App熟悉度 */}
          <div className="flex flex-col gap-4 rounded-xl bg-white/30 p-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 sm:flex-1">
              <span className="text-sm">首次来中国?</span>
              <button
                onClick={() => update("firstTime", true)}
                className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  form.firstTime
                    ? "bg-celadon text-paper"
                    : "bg-black/5 text-stone"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => update("firstTime", false)}
                className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  !form.firstTime
                    ? "bg-celadon text-paper"
                    : "bg-black/5 text-stone"
                }`}
              >
                No
              </button>
            </div>
            <div className="sm:flex-1">
              <span className="text-sm">
                Chinese Apps familiarity:{" "}
                <span className="text-celadon">
                  {["None", "A little", "Some", "Quite", "Pro"][
                    form.appFamiliarity - 1
                  ]}
                </span>
              </span>
              <input
                type="range"
                min={1}
                max={5}
                value={form.appFamiliarity}
                onChange={(e) =>
                  update("appFamiliarity", Number(e.target.value))
                }
                className="mt-1 w-full accent-celadon"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: 旅游偏好 */}
      {step === 2 && (
        <div className="animate-fade-in space-y-6">
          <h2 className="text-2xl font-[450]">What do you love?</h2>
          <p className="text-sm text-stone">Choose up to 3 preferences</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {preferenceOptions.map((opt) => {
              const selected = form.preferences.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => togglePreference(opt.id)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    selected
                      ? "border-celadon bg-celadon/5"
                      : "border-black/5 bg-white/30 hover:border-black/10"
                  }`}
                >
                  <span className="text-lg">{opt.emoji} {opt.label}</span>
                  <p className="mt-1 text-xs text-stone">{opt.desc}</p>
                </button>
              );
            })}
          </div>

          {/* 行程节奏 */}
          <div>
            <label className="mb-2 block text-sm font-medium">Pace</label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { value: "packed", label: "紧凑充实", desc: "每天排满" },
                { value: "balanced", label: "适中平衡", desc: "劳逸结合" },
                { value: "relaxed", label: "悠闲放松", desc: "慢慢逛" },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("pace", opt.value)}
                  className={`rounded-xl border p-3 text-center transition-all ${
                    form.pace === opt.value
                      ? "border-celadon bg-celadon/10 text-celadon"
                      : "border-black/5 bg-white/40 text-stone hover:border-black/10"
                  }`}
                >
                  <span className="text-sm font-medium">{opt.label}</span>
                  <p className="mt-0.5 text-xs opacity-60">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: 细节 */}
      {step === 3 && (
        <div className="animate-fade-in space-y-6">
          <h2 className="text-2xl font-[450]">Any restrictions?</h2>

          <div>
            <label className="mb-2 block text-sm font-medium">Dietary</label>
            <div className="flex flex-wrap gap-2">
              {dietOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => toggleDiet(opt.id)}
                  className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all ${
                    form.diet.includes(opt.id)
                      ? "border-celadon bg-celadon/10 text-celadon"
                      : "border-black/5 bg-white/40 text-stone hover:border-black/10"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Special needs <span className="text-stone/50">(optional)</span>
            </label>
            <textarea
              value={form.specialNeeds}
              onChange={(e) => update("specialNeeds", e.target.value)}
              placeholder="e.g. wheelchair accessible, allergies, afraid of heights..."
              className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-celadon focus:ring-1 focus:ring-celadon/20"
              rows={3}
            />
          </div>

          <div className="rounded-xl border border-osmanthus/20 bg-osmanthus/5 p-4">
            <p className="text-xs font-medium text-osmanthus">
              💡 AI Assistant
            </p>
            <p className="mt-1 text-sm text-stone">
              You can also chat with our AI to refine your itinerary after
              generation.
            </p>
          </div>
        </div>
      )}

      {/* 底部按钮 */}
      <div className="mt-10 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="btn-secondary text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className={`btn-primary text-sm ${
              !canProceed() && "pointer-events-none opacity-40"
            }`}
          >
            Next
            <ArrowRight size={16} />
          </button>
        ) : (
          <button onClick={handleGenerate} className="btn-primary text-sm">
            <Sparkles size={16} />
            Generate My Guide
          </button>
        )}
      </div>
    </div>
  );
}
