import i18n from 'i18next';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import hi from './hi.json';
import mt from './mt.json';
import bg from './bg.json';
import pb from './pb.json';
import tl from './tl.json';
import gj from './gj.json';

i18next.init(
  {
    compatibilityJSON: 'v3',
  },
  (err, t) => {
    /* resources are loaded */
  },
);
i18n.use(initReactI18next).init({
  lng: 'hi',
  resources: {
    en: en,
    hi: hi,
    mt: mt,
    bg: bg,
    pb: pb,
    tl: tl,
    gj: gj,
  },
  supportedLngs: ['en', 'hi', 'mt', 'bg', 'pb', 'tl', 'gj'],
  fallbackLng: ['hi', 'en', 'gj', 'tl', 'pb', 'bg', 'mt'],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('loaded', () => {
  console.log('i18n initialized ', i18n.language);
});

export default i18n;
