const PK10 = {
  type: 'PK10',
};

const SSC = {
  type: 'SSC',
};
// 波场哈希验证
const BCHS = {
  type: 'BCHS',
};
// 币安比特币验证
const BABTB = {
  type: 'BABTB',
};

export const VERIFICATION = {
  // PK10
  BCPK10: { ...PK10 },
  TWBPK10: { ...PK10 },
  FCPK10: { ...PK10 },
  WCPK10: { ...PK10 },
  NZLPK10: { ...PK10 },
  SKPK10: { ...PK10 },
  GRPK10: { ...PK10 },

  // SSC
  BCSSC: { ...SSC },
  TWBSSC: { ...SSC },
  FCSSC: { ...SSC },
  WCSSC: { ...SSC },
  NZLSSC: { ...SSC },
  SKSSC: { ...SSC },
  GRSSC: { ...SSC },
  // 波场哈希
  BCHSFFC: { ...BCHS }, // 波场哈希分分彩
  BCHS3FC: { ...BCHS }, // 波场哈希3分彩
  BCHS5FC: { ...BCHS }, // 波场哈希5分彩
  // 币安比特币
  BABTBFFC: { ...BABTB }, // 币安比特币分分彩
  BABTB3FC: { ...BABTB }, // 币安比特币3分彩
  BABTB5FC: { ...BABTB }, // 币安比特币5分彩
};

export default VERIFICATION;
