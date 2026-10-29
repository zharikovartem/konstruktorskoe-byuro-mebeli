import './Logo.css'

type LogoProps = {
  className?: string
  markOnly?: boolean
}

/** Знак: чертёжный крест + дуга + два блока (как в выбранном wordmark). */
export function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`logo ${className}`.trim()} aria-label="Wood Construction">
      <svg
        className="logo__mark"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 24a14 14 0 0 1 14-14"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M24 6v36M8 24h32"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="26.5" y="27" width="9" height="5.5" rx="0.6" fill="currentColor" />
        <rect x="29.5" y="34" width="9" height="5.5" rx="0.6" fill="currentColor" />
      </svg>
      {!markOnly && (
        <span className="logo__text">
          WOOD <span className="logo__text-soft">CONSTRUCTION</span>
        </span>
      )}
    </span>
  )
}
