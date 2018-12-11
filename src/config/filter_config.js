// selectMode:
// single:單選, duplicate:多選

const pair = {
  subFilterNameGroup: ['pair', 'nonPair'],
  selectMode: 'single',
};

export const FilterConfig = {
  pair,
};

// 過濾工具的玩法對照表，在List上才會開啟過濾工具
export const filterPlayMenuList = {
  // 時時彩
  First2Straight: 'First2Straight_Single',
  Last2Straight: 'Last2Straight_Single',
  // All5Straight: 'All5Straight_Single',
  // All5All: 'All5All_Single',
  // All5Join: 'All5Join_Single',
  // First4Straight: 'First4Straight_Single',
  // First4Join: 'First4Join_Single',
  // Last4Straight: 'Last4Straight_Single',
  // Last4Join: 'Last4Join_Single',
  // First3Straight: 'First3Straight_Single',
  // First3Join: 'First3Join_Single',
  // Middle3Straight: 'Middle3Straight_Single',
  // Middle3Join: 'Middle3Join_Single',
  // Last3Straight: 'Last3Straight_Single',
  // Last3Join: 'Last3Join_Single',
  // First2Join: 'First2Join_Single',
  // Last2Join: 'Last2Join_Single',
  // Any2: 'Any2_Single',
  // Any3: 'Any3_Single',
  // Any4: 'Any4_Single',
  // Any2Com_SSC: 'Any2Com_SSC_Single',
};
