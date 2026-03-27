import { LogIn } from "lucide-react"
import type { UI } from "../i18n"

interface Props {
  onClick?: () => void
  t: UI
}

export default function LoginButton({ onClick, t }: Props) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer bg-accent/12 text-accent border border-accent/30"
      >
        <LogIn size={16} />
        {t.loginButton}
      </button>
    </div>
  )
}
