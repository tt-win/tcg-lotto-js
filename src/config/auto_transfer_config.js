import _ from 'lodash';

export const config = {
  support: [
    'fenghuangcai',
    'caihong',
    '500cai',
    'deleasia',
    'tcgdemo',
    'haocai',
    'hccdemo',
    'hongda',
    'cxstar',
    'xinying',
    'wbcity',
  ],
};

export function isSupportAutoTransfer(merchant) {
  const supportMerchant = _.find(config.support, (o) => merchant.startsWith(o));
  return !_.isEmpty(supportMerchant);
}

// 4 = 彩票錢包
export const accountTypeId = 4;
