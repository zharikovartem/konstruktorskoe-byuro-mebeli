import { useId, useState } from 'react'
import { faqItems } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Faq.css'

export function Faq() {
  const ref = useReveal<HTMLElement>()
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Частые вопросы</p>
        <h2 className="section__title">Коротко о том, что спрашивают чаще всего</h2>

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="faq__panel"
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
