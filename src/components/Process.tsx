import { processSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Process.css'

export function Process() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section process" id="process" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Что делает КБ</p>
        <h2 className="section__title">Снимаем инженерную неопределённость с производства</h2>
        <p className="section__lead">
          Дизайнер приходит с картинкой. Цех умеет пилить и собирать. Между ними — бюро,
          которое считает каждую деталь, кромку и присадку.
        </p>

        <ol className="process__list">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`process__item reveal reveal-delay-${Math.min(index, 3)}`}
            >
              <span className="process__num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
