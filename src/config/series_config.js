import _ from 'lodash';

export const config = {
  exclude: {
    hongda: {
      playCodes: [
        'Dragon_Tiger_10T_T_SSC',
        'Dragon_Tiger_10T_H_SSC',
        'Dragon_Tiger_10T_10_SSC',
        'Dragon_Tiger_10T_1_SSC',
        'Dragon_Tiger_T_H_SSC',
        'Dragon_Tiger_T_10_SSC',
        'Dragon_Tiger_T_1_SSC',
        'Dragon_Tiger_H_10_SSC',
        'Dragon_Tiger_H_1_SSC',
        'Dragon_Tiger_10_1_SSC',
      ],
    },
  },
};

export function isSupportSeriesSlider(merchant, playCode) {
  if (!config.exclude[merchant] || _.isEmpty(config.exclude[merchant])) {
    return true;
  }

  const notSupportSeriesSlider = _.find(config.exclude[merchant].playCodes, (o) => playCode === o);
  return _.isEmpty(notSupportSeriesSlider);
}

export function isSupportSeriesChange(merchant, playCode) {
  if (!config.exclude[merchant] || _.isEmpty(config.exclude[merchant])) {
    return true;
  }

  const notSupportSeriesChange = _.find(config.exclude[merchant].playCodes, (o) => playCode === o);
  return _.isEmpty(notSupportSeriesChange);
}