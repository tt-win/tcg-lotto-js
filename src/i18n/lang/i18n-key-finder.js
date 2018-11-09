import _compact from 'lodash/compact';
import _fromPairs from 'lodash/fromPairs';
import _property from 'lodash/property';
import _replace from 'lodash/replace';
import ZH_CN from './zh_cn';
import TH_TH from './th_th';

export const lang = {
  ZH_CN,
  TH_TH,
};

const defaultLang = 'ZH_CN';

const getLang = () => {
  let langKey = window.localStorage.lang;
  langKey = langKey ? langKey.toUpperCase().replace('-', '_') : langKey;
  console.log(langKey);
  return lang[langKey] ? lang[langKey] : lang[defaultLang];
};


/**
 * Lang code( zh-cn / en-us...) will be replace - => _, and to be UPPER case,
 * i18n key support dot expression, ex: 'betDigit.Dollar'.
 * @param key key find i18n
 * @param args
 * @returns {*}
 */
const findByI18nKey = (key, ...args) => {
  const userLang = getLang();
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
export default {};
