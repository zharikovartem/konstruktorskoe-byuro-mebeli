import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__panel hero__panel--left" />
        <div className="hero__panel hero__panel--right" />
        <div className="hero__blueprint">
          <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="70" width="420" height="360" stroke="currentColor" strokeWidth="2" />
            <rect x="110" y="100" width="160" height="280" stroke="currentColor" strokeWidth="1.5" />
            <rect x="300" y="100" width="160" height="120" stroke="currentColor" strokeWidth="1.5" />
            <rect x="300" y="250" width="160" height="130" stroke="currentColor" strokeWidth="1.5" />
            <line x1="110" y1="180" x2="270" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="110" y1="280" x2="270" y2="280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="140" cy="140" r="5" fill="currentColor" />
            <circle cx="240" cy="140" r="5" fill="currentColor" />
            <circle cx="140" cy="320" r="5" fill="currentColor" />
            <circle cx="240" cy="320" r="5" fill="currentColor" />
            <path d="M560 120h140v280H560z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M580 150h100M580 200h100M580 250h100M580 300h100" stroke="currentColor" strokeWidth="1" />
            <text x="560" y="100" fill="currentColor" fontSize="14" fontFamily="IBM Plex Sans, sans-serif">
              КД · 1:20
            </text>
          </svg>
        </div>
        <div className="hero__glow" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand hero-animate">TECH7GROUP</p>
        <h1 id="hero-title" className="hero__title hero-animate hero-animate--delay-1">
          Конструкторское бюро для мебели на аутсорсе
        </h1>
        <p className="hero__lead hero-animate hero-animate--delay-2">
          Эскиз и замер превращаем в комплект КД, по которому цех пилит, кромит,
          сверлит и собирает без вопросов.
        </p>
        <div className="hero__actions hero-animate hero-animate--delay-3">
          <a className="btn btn--on-dark" href="#lead">
            Получить расчёт
          </a>
          <a className="btn btn--ghost-on-dark" href="#process">
            Как работаем
          </a>
        </div>
        <p className="hero__proof hero-animate hero-animate--delay-3">
          Более 4000 изделий с 2023 · Базис-Мебельщик 22/23 · 27+ производств
        </p>
      </div>
    </section>
  )
}
