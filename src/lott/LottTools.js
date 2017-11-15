import NumberFormat from 'NumberFormat';

export const calculatePrize = (
  {
    singleBetPrice,
    bonus,
    series,
    unit,
    standardBonus,
  },
) => {

  const formatPrize = _.partialRight(NumberFormat.formatDecimal, 4);
  const prize = formatPrize((singleBetPrice * bonus * series * unit) / standardBonus);

};

