import { useState } from 'react'
import type { FormEvent } from 'react'
import { contacts } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './LeadForm.css'

type FormState = {
  name: string
  contact: string
  comment: string
}

const initial: FormState = { name: '', contact: '', comment: '' }

export function LeadForm() {
  const ref = useReveal<HTMLElement>()
  const [form, setForm] = useState<FormState>(initial)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!form.name.trim()) {
      setError('Укажите имя')
      return
    }

    if (!form.contact.trim()) {
      setError('Укажите телефон или Telegram')
      return
    }

    setSent(true)
  }

  return (
    <section className="section lead" id="lead" ref={ref}>
      <div className="container lead__grid reveal">
        <div className="lead__copy">
          <p className="section__eyebrow">Заявка</p>
          <h2 className="section__title">Отдайте конструкторский отдел на аутсорс</h2>
          <p className="section__lead">
            Три поля — конструктор посмотрит задачу и вернётся с оценкой. Обычно
            отвечаем за 15–30 минут в рабочее время.
          </p>

          <ul className="lead__contacts">
            <li>
              <a href={contacts.phoneHref}>{contacts.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </li>
            <li>
              <a href={contacts.telegramHref} target="_blank" rel="noreferrer">
                Telegram {contacts.telegram}
              </a>
            </li>
          </ul>
        </div>

        <div className="lead__card">
          {sent ? (
            <div className="lead__success" role="status">
              <h3>Заявка принята</h3>
              <p>Ответим в течение 30 минут в рабочее время.</p>
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => {
                  setSent(false)
                  setForm(initial)
                }}
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <form className="lead__form" onSubmit={onSubmit} noValidate>
              <label>
                Имя
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => {
                    setError('')
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }}
                  placeholder="Как к вам обращаться"
                />
              </label>

              <label>
                Телефон или Telegram
                <input
                  name="contact"
                  autoComplete="tel"
                  value={form.contact}
                  onChange={(e) => {
                    setError('')
                    setForm((prev) => ({ ...prev, contact: e.target.value }))
                  }}
                  placeholder="+375… или @username"
                />
              </label>

              <label>
                Комментарий
                <textarea
                  name="comment"
                  rows={4}
                  value={form.comment}
                  onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
                  placeholder="Что за изделие, город, сроки"
                />
              </label>

              {error ? <p className="lead__error">{error}</p> : null}

              <button className="btn btn--primary" type="submit">
                Хочу расчёт проекта
              </button>

              <p className="lead__note">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                для связи по заявке.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
