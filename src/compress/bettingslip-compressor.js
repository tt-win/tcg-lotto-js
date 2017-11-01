const FIVE_START_ARRAY_LENGTH = 12500;

const bitCodes = {
  0: 1, 1: 2, 2: 4, 3: 8, 4: 16, 5: 32, 6: 64, 7: 128,
};

const encodedBettingContent = (bettingContent) => {
  const stakesSegment = bettingContent.replace(/_/g, '');
  const stakes = stakesSegment.split(',');
  const stackCount = stakes.length;
  const bettingContentAsBytes = new Uint8Array(FIVE_START_ARRAY_LENGTH);

  for (let i = 0; i < stackCount; i += 1) {
    const bettingNumber = parseInt(stakes[i]);
    if (!bettingNumber) {
      bettingContentAsBytes[0] += 1;
    } else {
      const wholeNum = Math.floor(bettingNumber / 8);
      const remainder = bettingNumber % 8;
      bettingContentAsBytes[wholeNum] += bitCodes[remainder];
    }
  }
  return bettingContentAsBytes;
};

const generateEncodedSlip = (originalSlip) => {
  const bettingContent = originalSlip.split('~')[0].replace(/^\{.*"/, '');
  return {
    bettingContentAsBytes: encodedBettingContent(bettingContent),
    briefBettingSlip: originalSlip.replace(/:".*?~/, ''),
  };
};

export const compressBettingSlip = (bettingSlip) => generateEncodedSlip(bettingSlip);

export default { compressBettingSlip };
