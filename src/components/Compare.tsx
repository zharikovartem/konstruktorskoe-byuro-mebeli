import { compareRows, pricing } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Compare.css'

export function Compare() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section compare" id="compare" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Аутсорс vs штат</p>
        <h2 className="section__title">Платите за работу, а не за простой</h2>
        <p className="section__lead">
          Штатный конструктор оправдан при стабильном полном потоке. При неровной
          загрузке внешнее бюро масштабируется под объём.
        </p>

        <div className="compare__pricing">
          {pricing.map((item) => (
            <div key={item.title} className="compare__price">
              <p className="compare__price-label">{item.title}</p>
              <p className="compare__price-value">{item.price}</p>
              <p className="compare__price-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="compare__table-wrap">
          <table className="compare__table">
            <thead>
              <tr>
                <th>Фактор</th>
                <th>Штатный конструктор</th>
                <th>Внешнее КБ</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.factor}>
                  <td>{row.factor}</td>
                  <td>{row.staff}</td>
                  <td>{row.outsource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
