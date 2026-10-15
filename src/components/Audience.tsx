import { audiences } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Audience.css'

export function Audience() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section audience" id="audience" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Кому подходит</p>
        <h2 className="section__title">Типовые ситуации, которые закрываем</h2>
        <p className="section__lead">
          От старта производства без конструктора до пиковых месяцев, когда свой
          отдел не успевает.
        </p>

        <ul className="audience__list">
          {audiences.map((item, index) => (
            <li
              key={item.title}
              className={`audience__item reveal reveal-delay-${Math.min(index % 4, 3)}`}
            >
              <span className="audience__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
