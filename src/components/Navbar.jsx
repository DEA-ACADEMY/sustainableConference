import { NavLink } from 'react-router-dom';
import { Globe2, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../i18n/useI18n.js';
import { useTheme } from '../theme/useTheme.js';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'programs', to: '/programs' },
  { key: 'speakers', to: '/speakers' },
  { key: 'registration', to: '/registration' },
  { key: 'contact', to: '/contact' },
];

export function Navbar() {
  const { dir, language, setLanguage, t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nextLanguage = language === 'en' ? 'ar' : 'en';
  const isDark = theme === 'dark';

  return (
    <header className="navbar" dir={dir}>
      <NavLink className="navbar__brand" to="/" aria-label={t('brand.name')}>
        <span className="navbar__logo" aria-hidden="true">
          <span />
        </span>
        <span className="navbar__brand-text">
          <strong>{t('brand.name')}</strong>
          <small>{t('brand.subtitle')}</small>
        </span>
      </NavLink>

      <button className="menu-button" type="button" onClick={() => setIsMenuOpen((current) => !current)} aria-label={t('nav.primary')} aria-expanded={isMenuOpen}>
        {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      <nav className={isMenuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'} aria-label={t('nav.primary')}>
        {navItems.map((item) => (
          <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')} to={item.to} onClick={() => setIsMenuOpen(false)} key={item.key}>
            {t(`nav.${item.key}`)}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__actions" aria-label={t('nav.controls')}>
        <button
          className="language-button"
          type="button"
          onClick={() => setLanguage(nextLanguage)}
          aria-label={t('nav.switchLanguage')}
          title={t('nav.switchLanguage')}
        >
          <Globe2 size={18} aria-hidden="true" />
          <span>{t('language.current')}</span>
        </button>

        <button
          className="icon-button icon-button--square"
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? t('theme.useLight') : t('theme.useDark')}
          title={isDark ? t('theme.useLight') : t('theme.useDark')}
        >
          {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
