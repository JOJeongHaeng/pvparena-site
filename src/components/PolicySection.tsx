import { Check } from "lucide-react"
import type { Section, UI } from "../i18n"

interface Props {
  section: Section
  index: number
  t: UI
}

export default function PolicySection({ section: s, index, t }: Props) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold text-accent opacity-50">
          0{index + 1}
        </span>
        <h2 className="text-lg font-bold text-white m-0">{s.title}</h2>
      </div>

      {s.content && (
        <p className="text-sm leading-7 text-gray-400">{s.content}</p>
      )}

      {s.table && (
        <div className="mt-2 rounded-xl overflow-hidden border border-surface-7 bg-surface-2 divide-y divide-surface-6">
          {s.table.map((r, ri) => (
            <div key={ri} className="flex flex-wrap gap-2 px-5 py-3.5">
              <span className="min-w-[100px] text-xs font-semibold text-accent">
                {r.label}
              </span>
              <span className="text-sm text-gray-400 flex-1">{r.value}</span>
            </div>
          ))}
        </div>
      )}

      {s.list && (
        <div className="mt-3 space-y-2.5">
          {s.list.map((item, li) => (
            <div key={li} className="flex items-start gap-2.5">
              <Check size={16} className="shrink-0 mt-0.5 text-accent" />
              <p className="text-sm text-gray-400 m-0">
                <span className="font-semibold text-gray-200">{item.label}</span>
                <span className="text-gray-500"> — {item.desc}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {s.contact && (
        <div className="mt-2 rounded-xl p-5 border border-surface-7 bg-surface-2">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
            <div>
              <span className="text-xs font-semibold block mb-1 text-accent">{t.department}</span>
              <span className="text-sm text-gray-300">{s.contact.name}</span>
            </div>
            <div>
              <span className="text-xs font-semibold block mb-1 text-accent">{t.email}</span>
              <a href={`mailto:${s.contact.email}`} className="text-sm underline text-accent">
                {s.contact.email}
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 m-0">{s.contact.note}</p>
        </div>
      )}

      {s.date && (
        <div className="inline-block mt-3 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 bg-surface-4 border border-surface-7">
          {s.date}
        </div>
      )}
    </section>
  )
}
