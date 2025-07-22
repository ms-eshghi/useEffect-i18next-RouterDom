import { useTranslation } from 'react-i18next';
import '../styles/header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <h1>{t('title')}</h1>
      <nav>
        <ul>
          <li><a href="/">{t('home')}</a></li>
          <li><a href="/about">{t('about')}</a></li>
          <li><button id="fi" onClick={() => i18n.changeLanguage('fi')}>FI</button></li>
          <li><button id="en" onClick={() => i18n.changeLanguage('en')}>EN</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
