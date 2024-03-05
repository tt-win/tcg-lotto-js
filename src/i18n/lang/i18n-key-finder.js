import _property from 'lodash/property';
import _replace from 'lodash/replace';
import ZH_CN from './zh_cn';
import TH from './th';
import VI from './vi';
import KM from './KM';
import EN from './EN';
import JA from './JA';
import ID from './ID';
import KO from './KO';
import TW from './tw';
import PT from './pt';
import PH from './ph';

export const lang = {
  ZH_CN,
  TH,
  VI,
  KM,
  EN,
  JA,
  ID,
  KO,
  TW,
  PT,
  PH,
};

const defaultLang = 'ZH_CN';

export const getLang = (targetLangKey) => {
  // Force to use specific lang if targetLangKey passed
  const targetLang = lang[targetLangKey];
  if (targetLangKey && targetLang) { return targetLang; }

  // no window obj
  if (!window || typeof window === 'undefined') return lang[defaultLang];

  // force cn
  const { location: { pathname } } = window;

  let langKey = window.localStorage.lang;
  /*eslint camelcase: ["error", {allow: ["forceZH_CN"]}]*/
  const isCNLott = pathname.indexOf('/lotto/') !== -1 || pathname.indexOf('/lotto-h5/') !== -1;
  if (isCNLott) {
    switch (langKey) {
      case 'TW':
        return lang[langKey];
      default:
        return lang[defaultLang];
    }
  };

  if (!langKey) {
    return lang[defaultLang];
  }

  if (lang[langKey]) {
    return lang[langKey];
  }

  langKey = langKey.toUpperCase().replace('-', '_');
  if (lang[langKey]) {
    return lang[langKey];
  }

  return lang[defaultLang];
};


/**
 * Lang code( zh-cn / en-us...) will be replace - => _, and to be UPPER case,
 * i18n key support dot expression, ex: 'betDigit.Dollar'.
 * @param key key find i18n
 * @param args
 * @returns {*}
 */
const findByI18nKey = (key, ...args) => {
  return findByI18nKeyWithLang(undefined, key, ...args);
};

const findByI18nKeyWithLang = (langKey, key, ...args) => {
  const userLang = getLang(langKey);
  const val = _property(key)(userLang);
  if (!val) {
    // console.warn(`Can\'t find i18n key ${key}`)
    return key;
  }

  if (args.length > 0) {
    let idx = 0; // the current index for non-numerical replacements
    return _replace(val, /%@([0-9]+)?/g, (s, p1) => {
      const argIndex = (p1) ? parseInt(p1) - 1 : idx;

      idx += 1;
      const str = args[argIndex];
      if (str === null) {
        return '(null)';
      } else if (str === undefined) {
        return '';
      }
      return str;
    });
  }
  return val;
};

export const i18n = findByI18nKey;
export const i18nWithLang = findByI18nKeyWithLang;
export default {};
