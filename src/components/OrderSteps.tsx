import { useState } from 'react'
import { timelines, workPlanLayers } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './OrderSteps.css'

export function OrderSteps() {
  const ref = useReveal<HTMLElement>()
  const [active, setActive] = useState(0)
  const layer = workPlanLayers[active]

  return (
    <section className="section order" id="order" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">План работ для заказчика</p>
        <h2 className="section__title">От эскиза до запуска в цех</h2>
        <p className="section__lead">
          Четыре слоя одного проекта. Нажмите этап — увидите, что происходит и что
          вы получаете на выходе.
        </p>

        <div className="order__plan">
          <div className="order__active" aria-live="polite">
            <p className="order__active-meta">
              ACTIVE LAYER / {String(active + 1).padStart(2, '0')} / {layer.tag}
            </p>
            <p className="order__active-text">{layer.text}</p>
          </div>

          <div className="order__grid">
            {workPlanLayers.map((item, index) => {
              const selected = index === active
              return (
                <button
                  key={item.tag}
                  type="button"
                  aria-pressed={selected}
                  className={`order__cell${selected ? ' is-active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <span className="order__cell-tag">{item.tag}</span>
                  <span className="order__cell-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="order__cell-title">{item.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="order__timelines">
          {timelines.map((item) => (
            <div key={item.label} className="order__timeline">
              <p className="order__timeline-value">{item.value}</p>
              <p className="order__timeline-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
