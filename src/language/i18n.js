import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import alb from './alb';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'ENGLISH',
  resources: {
    ENGLISH: en,
    ALBANIAN: alb,
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
