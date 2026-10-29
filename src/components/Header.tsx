import { useEffect, useState } from 'react'
import { contacts, navLinks } from '../data/content'
import { Logo } from './Logo'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#top" onClick={close}>
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary header__cta" href="#lead">
          Обсудить проект
        </a>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`header__drawer ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Мобильная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#lead" onClick={close}>
            Обсудить проект
          </a>
          <a href={contacts.telegramHref} target="_blank" rel="noreferrer" onClick={close}>
            Telegram {contacts.telegram}
          </a>
        </nav>
      </div>
    </header>
  )
}
