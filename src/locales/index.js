import _property from 'lodash/property';
import ZH_CN from './zh_cn';

const lang = {
  ZH_CN,
};

const defaultLang = 'ZH_CN';

/**
 * Lang code( zh-cn / en-us...) will be replace - => _, and to be UPPER case,
 * i18n key support dot expression, ex: 'betDigit.Dollar'.
 * @param key key find i18n
 * @param args
 * @returns {*}
 */

 const findDefaultI18nKey = (key, ...args) => {
   return findByI18nKey(defaultLang,key,args);
 };

const findByI18nKey = (langKey,key, ...args) => {
  langKey = langKey ? langKey.toUpperCase().replace('-', '_') : langKey;
  const userLang = lang[langKey] ? lang[langKey] : lang[defaultLang];
  const val = _property(key)(userLang);
  if (!val) {
    return key;
  }

  if (args.length > 0) {
    let idx = 0; // the current index for non-numerical replacements
    return val.replace(/%@([0-9]+)?/g, (s, p1) => {
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

export const i18n = findDefaultI18nKey;
export default {};
