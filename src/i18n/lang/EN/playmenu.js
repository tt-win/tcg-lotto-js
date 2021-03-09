const PlayMenu = {
  playId: {
    // Thai
    2056: 'EXACT', // 上正
    2058: 'ANY', // 上反
    2061: 'EXACT', // 上正
    2063: 'ANY', // 上反
    2065: 'Bonus digit', // 直选加开
    2068: 'Random Back 3 Digits', // 后三不定位
    2055: '3D', // 三数
    2057: 'EXACT 3D-1st', // 上正三位数
    2059: 'ANY 3D-1st', // 上反三位数
    2060: '2D', // 二数
    2062: 'EXACT 2D-1st', // 上正二位数
    2064: 'ANY 2D-1st', // 上反二位数
    2066: 'EXACT 2D-Special ', // 下正二位数
    2067: '1D', // 跑数
    2069: 'ANY 1D-1st', // 上跑三位数

    2480: 'Norm EXACT 2D-Special ',
    2481: 'Manual Enter EXACT 2D-Special ',
    2482: 'Norm ANY 2D-1st',
    2483: 'Norm EXACT 2D-1st',
    2484: 'Manual Enter  EXACT 2D-1st',
    2485: 'Norm EXACT 3D-1st',
    2486: 'Manual Enter EXACT 3D-1st',
    2487: 'Norm ANY 3D-1st',

    2297: 'FishPrawnCrab', // 魚蝦蟹
    2298: 'FishPrawnCrab', // 魚蝦蟹
    2299: 'FishPrawnCrab', // 魚蝦蟹
    2497: 'FanTan', // 番摊
    2498: 'Fan',
    2499: 'Fan',
    2500: 'Kwok',
    2501: 'Kwok',
    2502: 'Nim',
    2503: 'Nim',
    2504: 'BSOE',
    2505: 'BSOE',

    // vnc 越南彩

    // 一級選單

    2090: '4D', // 四数
    2095: '3D', // 三数
    2100: '2D', // 二数
    2105: '1D', // 跑数

    2515: 'AnyRoll', // 包膽 北部
    2528: 'AnyRoll', // 包膽 中南部

    2550: 'FailParlay', // 北部 逆向 - 一級選單
    2560: 'FailParlay', // 南部 逆向 - 一級選單

    2598: 'Parlay', // 北部 串组 - 一級選單
    2608: 'Parlay', // 中南部 串组 - 一級選單

    2300: 'FishPrawnCrab', // 魚蝦蟹
    2488: 'FanTan', // 番摊

    2618: 'Sic Bo Fast3', // 骰寶快三

    // 二級選單

    2091: 'EXACT', // 四数 上正
    2093: 'ANY', // 四数 上反
    2096: 'EXACT', // 三数 上正
    2098: 'ANY', // 三数 上反
    2101: 'EXACT', // 二数 上正
    2103: 'EXACT', // 二数 下正

    2301: 'FishPrawnCrab', // 魚蝦蟹

    2489: 'Fan', // 番
    2491: 'Kwok', // 角
    2493: 'Nim', // 念
    2495: 'BSOE', // 大小单双

    2619: 'Single Dice Bet', // 骰寶快三 - 单骰
    2620: 'Three Dice Total', // 骰寶快三 - 和值
    2621: 'Triple', // 骰寶快三 - 围骰
    2622: 'Any Triple ', // 骰寶快三 - 全围
    2623: 'BSOE', // 骰寶快三 - 大小单双

    2516: 'Last 2D of AnyResult', // 北部 后二包胆
    2520: 'Last 3D of AnyResult', // 北部 后三包胆
    2524: 'Last 4D of AnyResult', // 北部 后四包胆

    2551: 'FailParlay 4', // 北部 - 四不中 - 二級選單
    2554: 'FailParlay 8', // 北部 - 八不中 - 二級選單
    2557: 'FailParlay 10', // 北部 - 十不中 - 二級選單

    2599: 'Parlay 2', // 北部 - 串2组 - 二級選單
    2602: 'Parlay 3', // 北部 - 串3组 - 二級選單
    2605: 'Parlay 4', // 北部 - 串4组 - 二級選單

    2584: 'Head 2D & Special', // 北部 - 二数头尾 - 二級選單

    2529: 'Last 2D of AnyResult', // 中南部 后二包胆
    2533: 'Last 3D of AnyResult', // 中南部 后三包胆
    2537: 'Last 4D of AnyResult', // 中南部 后四包胆

    2561: 'FailParlay 4 ',  // 中南部 - 四不中 - 二級選單
    2564: 'FailParlay 8',  // 中南部 - 八不中 - 二級選單
    2567: 'FailParlay 10',  // 中南部 - 十不中 - 二級選單

    2609: 'Parlay 2', // 中南部 - 串2组 - 二級選單
    2612: 'Parlay 3', // 中南部 - 串3组 - 二級選單
    2615: 'Parlay 4', // 中南部 - 串4组 - 二級選單

    2591: 'Head 2D & Special', // 中南部 - 二数头尾 - 二級選單

    // 跑數二級選單目前不會使用到
    2106: '一等二星不定位', // 跑數二級選單
    2108: '二等二星不定位', // 跑數二級選單

    2579: '特等二星不定位', // 特等一等 - 十位個位 - 跑數 - 二級選單

    // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
    2092: 'EXACT 4D-Special', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'ANY 4D-Special', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'EXACT 3D-Special', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'ANY 3D-Special', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'EXACT 2D-Special', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'EXACT 2D-1st', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'ANY 1D-Special', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'ANY 1D-1st', // 下跑两位数 Last_2_Any_2nd_VNC

    2601: 'Parlay 2', // 北部 串2组 Bunch_2_North_VNC
    2604: 'Parlay 3', // 北部 串3组 Bunch_3_North_VNC
    2607: 'Parlay 4', // 北部 串4组 Bunch_4_North_VNC
    2611: 'Parlay 2', // 中南部 串2组 Bunch_2_South_VNC
    2614: 'Parlay 3', // 中南部 串3组 Bunch_3_South_VNC
    2617: 'Parlay 4', // 中南部 串4组 Bunch_4_South_VNC

    2552: 'FailParlay 4', // 北部 - 四不中
    2555: 'FailParlay 8', // 北部 - 八不中
    2558: 'FailParlay 10', // 北部 - 十不中
    2562: 'FailParlay 4', // 中南部 - 四不中
    2565: 'FailParlay 8', // 中南部 - 八不中
    2568: 'FailParlay 10', // 中南部 - 十不中

    2517: 'Last 2D of AnyResult', // 北部 后二包胆
    2521: 'Last 3D of AnyResult', // 北部 后三包胆
    2525: 'Last 4D of AnyResult', // 北部 后四包胆
    2530: 'Last 2D of AnyResult', // 中南部 后二包胆
    2534: 'Last 3D of AnyResult', // 中南部 后三包胆
    2538: 'Last 4D of AnyResult', // 中南部 后四包胆

    2586: 'Head 2D & Special', // 北部 二数头尾 Last_2_1st_7th_North_VNC
    2589: 'Head 2D', // 北部 二数头 Last_2_7th_North_VNC
    2593: 'Head 2D & Special', // 中南部 二数头尾 Last_2_1st_8th_South_VNC
    2596: 'Head 2D', // 中南部 二数头 Last_2_8th_South_VNC

    2580: 'Tens-Special', // 特等十位 Ten_Digit_1st_VNC
    2581: 'Ones-Special', // 特等个位 Unit_Digit_1st_VNC
    2582: 'Tens-1st', // 一等十位 Ten_Digit_2nd_VNC
    2583: 'Ones-1st', // 一等个位 Unit_Digit_2nd_VNC

    2302: 'FishPrawnCrab', // 魚蝦蟹

    2490: 'Fan', // 番
    2492: 'Kwok', // 角
    2494: 'Nim', // 念
    2496: 'BSOE', // 大小单双

    // 三級選單

    // 北部
    2518: 'Norm Last 2D of AnyResult', // 北部 后二包胆(复式)
    2519: 'Manual Last 2D of AnyResult', // 北部 后二包胆(单式)
    2522: 'Norm Last 3D of AnyResult', // 北部 后三包胆（复式）
    2523: 'Manual Last 3D of AnyResult', // 北部 后三包胆（单式）
    2526: 'Norm Last 4D of AnyResult', // 北部 后四包胆（复式）
    2527: 'Manual Last 4D of AnyResult', // 北部 后四包胆（单式）

    2553: 'Manual FailParlay 4', // 北部 - 四不中(单式) - 三級選單
    2556: 'Manual FailParlay 8', // 北部 - 八不中(单式) - 三級選單
    2559: 'Manual FailParlay 10', // 北部 - 十不中(单式) - 三級選單

    2587: 'Norm Head 2D & Special', // 北部 二数头尾（复式) Last_2_1st_7th_North_VNC_Multi
    2590: 'Norm Head 2D', // 北部 二数头（复式) Last_2_7th_North_VNC_Multi

    // 中南部
    2531: 'Norm Last 2D of AnyResult', // 中南部 后二包胆(复式)
    2532: 'Manual Last 2D of AnyResult', // 中南部 后二包胆(单式)
    2535: 'Norm Last 3D of AnyResult', // 中南部 后三包胆（复式）
    2536: 'Manual Last 3D of AnyResult', // 中南部 后三包胆（单式）
    2539: 'Norm Last 4D of AnyResult', // 中南部 后四包胆（复式）
    2540: 'Manual Last 4D of AnyResult', // 中南部 后四包胆（单式）

    2563: 'Manual FailParlay 4', // 中南部 - 四不中(单式) - 三級選單
    2566: 'Manual FailParlay 8', // 中南部 - 八不中(单式) - 三級選單
    2569: 'Manual FailParlay 10', // 中南部 - 十不中(单式) - 三級選單

    2594: 'Norm Head 2D & Special', // 中南部 二数头尾（复式) Last_2_1st_8th_South_VNC_Multi
    2597: 'Norm Head 2D', // 中南部 二数头(复式) Last_2_8th_South_VNC_Multi

    // 以下不分南北部
    2286: 'Norm EXACT 4D-Special', // 上正四位数（复式）Last_4_Straight_1st_VNC_Multi
    2287: 'Manual EXACT 4D-Special', // 上正四位数（单式）Last_4_Straight_1st_VNC_Single

    2284: 'Norm EXACT 3D-Special', // 上正三位数（复式）Last_3_Straight_1st_VNC_Multi
    2285: 'Manual EXACT 3D-Special', // 上正三位数（单式）Last_3_Straight_1st_VNC_Single
    2283: 'Norm ANY 3D-Special', // 上反三位数（复式）Last_3_Combine_1st_VNC_Multi

    2279: 'Norm EXACT 2D-Special', // 上正二位数(复式) Last_2_Straight_1st_VNC_Multi
    2280: 'Manual Enter EXACT 2D-Special', // 上正二位数（单式）Last_2_Straight_1st_VNC_Single
    2281: 'Norm EXACT 2D-1st', // 下正二位数（复式）Last_2_Straight_2nd_VNC_Multi
    2282: 'Manual Enter EXACT 2D-1st', // 下正二位数（单式）Last_2_Straight_2nd_VNC_Single

    // LAO 老挝彩
    2127: '4D', // 四数
    2132: '3D', // 三数
    2137: '2D', // 二数
    2142: '1D', // 跑数

    2128: 'EXACT', // 上正
    2130: 'ANY', // 上反
    2133: 'EXACT', // 上正
    2135: 'ANY', // 上反
    2138: 'EXACT', // 上正
    2140: 'EXACT', // 下正

    2129: 'EXACT 4D', // 上正四位数 Last_4_Straight_LAO
    2131: 'ANY 4D', // 上反四位数 Last_4_Combine_LAO
    2134: 'EXACT 3D', // 上正三位数 Last_3_Straight_LAO
    2136: 'ANY 3D', // 上反三位数 Last_3_Combine_LAO
    2139: 'EXACT 2D-last', // 上正二位数 Last_2_Straight_LAO
    2141: 'EXACT 2D-first', // 下正二位数 First_2_Straight_LAO
    2144: 'ANY 1D-last', // 上跑两位数 Last_2_Any_LAO
    2146: 'ANY 1D-first', // 下跑两位数 First_2_Any_LAO

    2288: 'Norm EXACT 2D-last', // Last_2_Straight_LAO_Multi
    2289: 'Manual Enter EXACT 2D-last', // Last_2_Straight_LAO_Single
    2290: 'Norm EXACT 2D-first', // First_2_Straight_LAO_Multi
    2291: 'Manual Enter EXACT 2D-first', // First_2_Straight_LAO_Single
    2292: 'Norm ANY 3D', // Last_3_Combine_LAO_Multi
    2293: 'Norm EXACT 3D', // Last_3_Straight_LAO_Multi
    2294: 'Manual Enter EXACT 3D', // Last_3_Straight_LAO_Single
    2295: 'Norm EXACT 4D', // Last_4_Straight_LAO_Multi
    2296: 'Manual Enter EXACT 4D', // Last_4_Straight_LAO_Single

    2303: 'FishPrawnCrab', // 魚蝦蟹
    2304: 'FishPrawnCrab', // 魚蝦蟹
    2305: 'FishPrawnCrab', // 魚蝦蟹
    2506: 'FanTan', // 番摊
    2507: 'Fan',
    2508: 'Fan',
    2509: 'Kwok',
    2510: 'Kwok',
    2511: 'Nim',
    2512: 'Nim',
    2513: 'BSOE',
    2514: 'BSOE',
  },
};

export default PlayMenu;
