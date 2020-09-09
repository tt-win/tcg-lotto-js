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
    BSOE: {
      big: 'Besar',
      small: 'Kecil',
      odd: 'GanjilLL',
      even: 'Genap',
    },
    fanTanFan: {
      1: '1 Fan',
      2: '2 Fan',
      3: '3 Fan',
      4: '4 Fan',
    },
    fanTanJiao: {
      '1_2': '1-2 Kwok',
      '1_4': '1-4 Kwok',
      '2_3': '2-3 Kwok',
      '3_4': '3-4 Kwok',
    },
    fanTanNian: {
      '1_2': '1 Nim 2',
      '1_3': '1 Nim 3',
      '1_4': '1 Nim 4',
      '2_1': '2 Nim 1',
      '2_3': '2 Nim 3',
      '2_4': '2 Nim 4',
      '3_1': '3 Nim 1',
      '3_2': '3 Nim 2',
      '3_4': '3 Nim 4',
      '4_1': '4 Nim 1',
      '4_2': '4 Nim 2',
      '4_3': '4 Nim 3',
    }
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
  odds: 'Peluang',
  amount: 'Stake',
  manualBetPlaceHolderSEA: 'Please type your bets here or upload a txt file. The format is per sample below :\n%@\nNOTE:  You can use "," or ";" or "<Space>" or new line to separate the numbers you are betting.',
  detail: 'Detil Bet',
  multiple: 'Banyak',
  syncMultipleBets: 'Sync Multiple Bets',
};

export default LANG;
