import { contacts, navLinks } from '../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            TECH<span>7</span>GROUP
          </a>
          <p>Внешнее конструкторское бюро для мебельных производств.</p>
        </div>

        <nav className="footer__nav" aria-label="Навигация в подвале">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#lead">Заявка</a>
        </nav>

        <div className="footer__meta">
          <p>{contacts.legal}</p>
          <p>© 2023–2026 TECH7GROUP</p>
        </div>
      </div>
    </footer>
  )
}
