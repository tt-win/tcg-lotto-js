import PlayMenu from './playmenu';

const LANG = {
  ...PlayMenu,
  orderStatus: {
    orderStatus_0: 'All',
    orderStatus_2: 'Sukses',
    orderStatus_4: 'Menang',
    orderStatus_5: 'Kalah',
    orderStatus_6: 'Batal',
    orderStatus_7: 'Batal',
    orderStatus_8: 'Batal',
    orderStatus_12: 'Batal',
    orderStatus_14: 'Incomlpete',
    orderStatus_16: 'Tie',
    orderStatus_17: 'Batal',
    orderStatus_99: 'Invalid Order',
  },
  betDigit: {
    THOUSANDS: 'Ribuan',
    HUNDREDS: 'Ratusan',
    TENS: 'Puluhan',
    ONES: 'Satuan',
    COM: 'Group',
  },
  // 全大小奇偶清
  pickRow: {
    all: 'All',
    big: 'Big',
    small: 'Small',
    odd: 'Odd',
    even: 'Even',
    clear: 'Delete',
  },
  ball: {
    fishPrawnCrab: {
      fish: 'Fish',
      prawn: 'Prawn',
      crab: 'Crab',
    },
  },
  errorCode: {
    BETTING_STAKES_IS_OVER_LIMIT_STAKES: 'Taruhan Taruhan lebih dari batas taruhannya',
  },
  drawFrequency: 'Frekuensi the draw',
  chooseFile: 'unggah data',
  clearBallText: 'PASANG',
  filterRepeat: 'Hapus Nomor Gandakan',
  betsNTotalAmount: '<div class="font-bold">%@</div>Bet/s，TOTAL BET<div class="font-bold">%@</div>，',
  predictionAmount: 'akan menang<div class="red-words">%@</div>',
  filterResultMsg: 'Remove Duplicate%@ Invalid no.%@',
  amount: 'Stake',
  manualBetPlaceHolderSEA: 'Please type your bets here or upload a txt file. The format is per sample below :\n%@\nNOTE:  You can use "," or ";" or "<Space>" or new line to separate the numbers you are betting.',
  detail: 'Detil Bet',
};

export default LANG;
