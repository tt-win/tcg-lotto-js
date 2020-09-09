import PlayMenu from '../EN/playmenu';

const LANG = {
  ...PlayMenu,
  orderStatus: {
    orderStatus_0: 'All',
    orderStatus_2: '베팅수락',
    orderStatus_4: '승리',
    orderStatus_5: '돈을 잃다',
    orderStatus_6: '취소',
    orderStatus_7: '취소',
    orderStatus_8: '취소',
    orderStatus_12: '취소',
    orderStatus_14: 'Incomlpete',
    orderStatus_16: '무승부',
    orderStatus_17: '취소',
    orderStatus_99: 'Invalid Order',
  },
  betDigit: {
    THOUSANDS: '수천',
    HUNDREDS: '백',
    TENS: '열',
    ONES: '단위',
    COM: '그룹',
  },
  // 全大小奇偶清
  pickRow: {
    all: '모두',
    big: '빅',
    small: '스몰',
    odd: '홀수',
    even: '짝수',
    clear: '지우다',
  },
  ball: {
    fishPrawnCrab: {
      fish: '물고기',
      prawn: '왕새우',
      crab: '대게',
    },
    BSOE: {
      big: '빅 베팅',
      small: '스몰 베팅',
      odd: '홀수 베팅',
      even: '짝수 베팅',
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
    BETTING_STAKES_IS_OVER_LIMIT_STAKES: '베팅 말뚝이 한도 초과',
  },
  drawFrequency: '추첨 빈도',
  chooseFile: '가져오려면',
  clearBallText: '삭제',
  filterRepeat: '중복 제거',
  betsNTotalAmount: '<div class="font-bold">%@</div>내기，총 베팅<div class="font-bold">%@</div>，',
  predictionAmount: '보너스<div class="red-words">%@</div>',
  filterResultMsg: '%@ 중복제거 %@ 무효',
  odds: '배당',
  amount: '금액',
  manualBetPlaceHolderSEA: '텍스트 파일을 가져오려면 파일을 열거나 외부 데이터 범위로 텍스트 파일을 가져올 수 있습니다. \n' +
      '갈라진사용 되는 가지 텍스트 파일 형식은 다음과 같습니다 TXT 파일.  참고:   차별 " , "  및 " ; "   및   "<우주 >" 열을 가져오거나 있습니다. \n' +
      '보기를 들어 설명하다：\n%@',
  detail: '베팅 정보',
  multiple: '배수',
  syncMultipleBets: '동기화',
  recentlyGames: '오픈베팅',
};

export default LANG;
