const PlayMenu = {
  playId: {
    // Thai
    2056: 'ストレート', // 直选
    2058: 'ボックス', // 组选
    2061: 'ストレート', // 直选
    2063: 'ボックス', // 组选
    2065: 'ボーナス数字', // 直选加开
    2068: 'ランダム下３桁', // 后三不定位
    2055: 'ナンバーズ３', // 三数
    2057: '上３桁', // 上正三位数
    2059: '下３桁', // 上反三位数
    2060: 'ナンバーズ２', // 二数
    2062: '上２桁', // 上正二位数
    2064: '真中２桁', // 上反二位数
    2066: '下２桁', // 下正二位数
    2067: '追いかけ番号', // 跑数
    2069: 'ランダム上３桁', // 上跑三位数

    // vnc 越南彩
    2090: 'ナンバーズ4', // 四数
    2095: 'ナンバーズ３', // 三数
    2100: 'ナンバーズ２', // 二数
    2105: 'ランダム選択', // 跑数

    2092: '上４桁', // 上正四位数 Last_4_Straight_1st_VNC
    2094: '下４桁', // 上反四位数 Last_4_Combine_1st_VNC
    2097: '上３桁', // 上正三位数 Last_3_Straight_1st_VNC
    2099: '真中３桁', // 上反三位数 Last_3_Combine_1st_VNC
    2102: '上２桁', // 上正二位数 Last_2_Straight_1st_VNC
    2104: '下２桁', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'ランダム上２桁', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'ランダム下２桁', // 下跑两位数 Last_2_Any_2nd_VNC

    // LAO 老挝彩
    2127: 'ナンバーズ4', // 四数
    2132: 'ナンバーズ３', // 三数
    2137: 'ナンバーズ２', // 二数
    2142: 'ランダム選択', // 跑数

    2129: '上４桁', // 上正四位数 Last_4_Straight_LAO
    2131: '下４桁', // 上反四位数 Last_4_Combine_LAO
    2134: '上３桁', // 上正三位数 Last_3_Straight_LAO
    2136: '下３桁', // 上反三位数 Last_3_Combine_LAO
    2139: '上２桁', // 上正二位数 Last_2_Straight_LAO
    2141: '下２桁', // 下正二位数 First_2_Straight_LAO
    2144: 'ランダム上２桁', // 上跑两位数 Last_2_Any_LAO
    2146: 'ランダム下２桁', // 下跑两位数 First_2_Any_LAO

    // Keno

    // 一級選單

    2647: 'Pick', // 任選 - 一級選單 Any_KENO 
    2656: 'Combinations', // 趣味 - 一級選單 Fun_KENO

    // 二級選單

    2648: 'Pick', // 任選 - 二級選單 Any_L2_KENO
    2657: 'Big, Exact Score, Small', // 趣味 - 總和大小 Total_Sum_BST_KENO
    2658: 'Odd, Even', // 趣味 - 總和單雙 Total_Sum_OE_KENO
    2659: 'Parlay Big Small, Odd Even', // 趣味 - 總和過關 Total_Sum_PASS_KENO
    2660: 'Top, Tie, Bottom', // 趣味 - 上下盤 UpDown_KENO
    2661: 'Odds, Tie, Evens', // 趣味 - 奇偶盤 OddEven_KENO
    2662: 'Five Element', // 趣味 - 五行 WuXing_KENO

    // 三級選單

    2649: 'Pick 1', // 任選一 Any1_KENO
    2650: 'Pick 2', // 任選二 Any2_KENO
    2651: 'Pick 3', // 任選三 Any3_KENO
    2652: 'Pick 4', // 任選四 Any4_KENO
    2653: 'Pick 5', // 任選五 Any5_KENO
    2654: 'Pick 6', // 任選六 Any6_KENO
    2655: 'Pick 7', // 任選七 Any7_KENO

    // Wingo-Level:1

    3060: '実行回数', // SEA Wingo 跑数

    // Wingo-Level:2

    3061: '大きいか小さいかを予想する', // SEA Wingo 大小
    3063: '数字を予想する', // SEA Wingo 数字
    3065: '色を当てる', // SEA Wingo 顔色

    // Wingo-Level:3

    3062: '大きいか小さいかを予想する', // SEA Wingo 大小
    3064: '数字を予想する', // SEA Wingo 猜数字
    3066: '色を当てる', // SEA Wingo 猜紅色
    3067: '色を当てる', // SEA Wingo 猜綠色
    3068: '色を当てる', // SEA Wingo 猜紫色

    // 5D-Level:1

    3069: '統合', // SEA 5D 整合
    3077: '走る', // SEA 5D 跑數

    // 5D-Level:2

    3070: 'ダイレクト選択大小奇偶', // SEA 5D 大小单双
    3078: '番号選択', // SEA 5D 直选
    
    // 5D-Level:3
    
    3071: '合計大小奇偶', // SEA 5D 和值
    3072: '位置Aの大小奇偶', // SEA 5D 第一球
    3073: '位置Bの大小奇偶', // SEA 5D 第二球
    3074: '位置Cの大小奇偶', // SEA 5D 第三球
    3075: '位置Dの大小奇偶', // SEA 5D 第四球
    3076: '位置Eの大小奇偶', // SEA 5D 第五球
    3079: '位置Aの番号選択', // SEA 5D 第一球
    3080: '位置Bの番号選択', // SEA 5D 第二球
    3081: '位置Cの番号選択', // SEA 5D 第三球
    3082: '位置Dの番号選択', // SEA 5D 第四球
    3083: '位置Eの番号選択', // SEA 5D 第五球

    // SEAK3-Level:1

    3084: '統合', // SEA SEAK3 整合

    // SEAK3-Level:2

    3085: 'SUM', // SEA SEAK3 和值
    3088: '2 Same', // SEA SEAK3 2骰子
    3091: '3 Same', // SEA SEAK3 3骰子
    3094: 'Different', // SEA SEAK3 不同骰

    // SEAK3-Level:3

    3086: 'Total', // SEA SEAK3 和值
    3087: '合計大小奇偶', // SEA SEAK3 大小單雙
    3089: '2同号単選', // SEA SEAK3 2同号单选
    3090: '2同号複選', // SEA SEAK3 2同号复选
    3092: '3同号単選', // SEA SEAK3 3同号单选
    3093: '3同号通选', // SEA SEAK3 3同号通选
    3095: '連続', // SEA SEAK3 全順
    3096: '3つの異なるもの', // SEA SEAK3 3不同
    3097: '2つの異なるもの', // SEA SEAK3 2不同

    // SEAPK10-Level:1

    3100: 'ランキング', // SEA SEAPK10 第1-10名排名
    3101: '1-10 大小', // SEA SEAPK10 第1-10名大小
    3102: '1-10 奇偶', // SEA SEAPK10 第1-10名單雙

    // SEAPK10-Level:2

    3103: 'ランキング', // SEA SEAPK10 第1-10名排名
    3104: '1-10 大小', // SEA SEAPK10 第1-10名大小
    3105: '1-10 奇偶', // SEA SEAPK10 第1-10名單雙

    // SEAPK10-Level:3

    3106: 'ランキング', // SEA SEAPK10 排名
    3107: '大/小', // SEA SEAPK10 大小
    3108: '奇/偶', // SEA SEAPK10 單雙
  },
};

export default PlayMenu;
