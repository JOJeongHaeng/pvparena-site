import { useState } from "react"
import { Shield } from "lucide-react"
import { type Lang, sections, ui } from "./i18n"
import PolicySection from "./components/PolicySection"
import LoginButton from "./components/LoginButton"

export default function App() {
  const [lang, setLang] = useState<Lang>("ko")
  const t = ui[lang]

  const toggleLang = () => setLang(lang === "ko" ? "en" : "ko")

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans">
      <div className="bg-glow fixed inset-0 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 py-12">
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer bg-surface-5 text-accent border border-accent/20"
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
        </div>

        <header className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-accent/30 bg-accent/8 text-accent mb-5">
            <Shield size={20} /> {t.badge}
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            <span className="text-accent">PVPARENA</span> {t.heading}
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="accent-line w-16 h-0.5 mx-auto mt-6 rounded-full" />
        </header>

        <div className="space-y-10">
          {sections[lang].map((s, i) => (
            <PolicySection key={s.id} section={s} index={i} t={t} />
          ))}
        </div>

        <div className="divider-glow my-12 h-px" />

        <LoginButton t={t} />

        <p className="text-center text-xs text-gray-600 mt-8">
          {t.copyright}
        </p>
      </div>
    </div>
  )
}
