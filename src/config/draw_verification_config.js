const PK10 = {
  type: 'PK10',
};

const SSC = {
  type: 'SSC',
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
};

export default VERIFICATION;
