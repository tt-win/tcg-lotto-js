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
    orderStatus_16: 'Tie',
    orderStatus_17: '취소',
    orderStatus_99: 'Invalid Order',
  },
  betDigit: {
    THOUSANDS: '수천',
    HUNDREDS: '백',
    TENS: '열',
    ONES: '단위',
    COM: '组选', // TODO 組選待翻譯
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
  drawFrequency: '추첨 빈도',
  chooseFile: '가져오려면',
  clearBallText: '삭제',
  filterRepeat: '중복 제거',
  betsNTotalAmount: '<div class="font-bold">%@</div>내기，총 베팅<div class="font-bold">%@</div>，',
  predictionAmount: '보너스<div class="red-words">%@</div>',
  filterResultMsg: '%@ 중복제거 %@ 무효',
  amount: '금액',
  manualBetPlaceHolderSEA: '텍스트 파일을 가져오려면 파일을 열거나 외부 데이터 범위로 텍스트 파일을 가져올 수 있습니다. \n' +
      '갈라진사용 되는 가지 텍스트 파일 형식은 다음과 같습니다 TXT 파일.  참고:   차별 " , "  및 " ; "   및   "<우주 >" 열을 가져오거나 있습니다. \n' +
      '보기를 들어 설명하다：\n%@',
};

export default LANG;
