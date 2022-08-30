import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { English, Vietnamese } from './locales';

const resources = {
  eng: {
    translation: English,
  },
  vie: {
    translation: Vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng          : 'eng',
  keySeparator : false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export { resources };
