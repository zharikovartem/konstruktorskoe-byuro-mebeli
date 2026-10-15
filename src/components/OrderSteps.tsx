import { orderSteps, timelines } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './OrderSteps.css'

export function OrderSteps() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section order" id="order" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Как заказать</p>
        <h2 className="section__title">Без чёрного ящика: видно каждый этап</h2>
        <p className="section__lead">
          Работаем в лицензионном Базис-Мебельщик 22/23. Отдаём геометрию и
          присадку — УП под ваш станок пишет ваш оператор.
        </p>

        <ol className="order__steps">
          {orderSteps.map((step, index) => (
            <li key={step.title} className="order__step">
              <span className="order__step-num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

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
