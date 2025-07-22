import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "My Website",
          home: "Home",
          about: "About",
          homepageText: "This is the front page"
        }
      },
      fi: {
        translation: {
          title: "Verkkosivuni",
          home: "Etusivu",
          about: "Tietoa Meistä",
          homepageText: "Tämä on etusivu"
        }
      }
    }
  });

export default i18n;
