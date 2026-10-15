import { docsItems } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './DocsComposition.css'

export function DocsComposition() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section docs" id="docs" ref={ref}>
      <div className="container reveal">
        <p className="section__eyebrow">Состав КД</p>
        <h2 className="section__title">Документы связаны одной 3D-моделью</h2>
        <p className="section__lead">
          Поменяли высоту шкафа — деталировка, раскрой, присадка и спецификация
          пересчитались сами. Не бывает «чертёж обновили, а раскрой забыли».
        </p>

        <div className="docs__table-wrap" role="region" aria-label="Состав конструкторской документации">
          <table className="docs__table">
            <thead>
              <tr>
                <th>Документ</th>
                <th>Что описывает</th>
                <th>Кому нужен</th>
              </tr>
            </thead>
            <tbody>
              {docsItems.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.describes}</td>
                  <td>{item.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
