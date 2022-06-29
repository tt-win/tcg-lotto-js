const PlayMenu = {
  playId: {
    // VTX
    2675: 'Tài Xỉu',
    2676: 'Big Small',

    // VXD
    2677: 'Xoc Dia',
    2678: 'ធំ តូច',
    2679: 'លេខសេស សូម្បីតែ',
    2680: '4 ក្រហម',
    2681: '4 ពណ៌ស',
    2682: '3 ពណ៌ស + 1 ក្រហម',
    2683: '3 ក្រហម + 1 ពណ៌ស',

    // VBC 魚蝦蟹
    2733: 'Caranguejo Camarão Peixe',
    2734: 'Caranguejo Camarão Peixe',
    // SEA SEA V2 TL(天龍)

    // 一級選單

    // TL3D

    2684: '2 Digits', // SEA TL3D 二數
    2689: '3 Digits', // SEA TL3D 三數
    2694: '1 Digits', // SEA TL3D 跑數

    // TL4D

    2697: '2 Digits', // SEA TL4D 二數
    2702: '3 Digits', // SEA TL4D 三數
    2707: '4 Digits', // SEA TL4D 四數
    2712: '1 Digits', // SEA TL4D 跑數

    // TL6D

    2715: '2 Digits', // SEA TL6D 二數
    2720: '3 Digits', // SEA TL6D 三數
    2725: '4 Digits', // SEA TL6D 四數
    2730: '1 Digits', // SEA TL6D 跑數

    // 二級選單

    // TL3D

    2685: 'EXACT', // SEA TL3D 後二直選(上正 二數)
    2687: 'ANY', // SEA TL3D 後二組選(上反 二數)
    2690: 'EXACT', // SEA TL3D 後三直選(上正 三數)
    2692: 'ANY', // SEA TL3D 後三組選(上反 三數)
    2695: 'Random', // SEA TL3D 后二不定位

    // TL4D

    2698: 'EXACT', // SEA TL4D 後二直選(上正 二數)
    2700: 'ANY', // SEA TL4D 後二組選(上反 二數)
    2703: 'EXACT', // SEA TL4D 後三直選(上正 三數)
    2705: 'ANY', // SEA TL4D 後三組選(上反 三數)
    2708: 'EXACT', // SEA TL4D 後四直選(上正 四數)
    2710: 'ANY', // SEA TL4D 後四組選(上反 四數)
    2713: 'Random', // SEA TL4D 后二不定位

    // TL6D

    2716: 'EXACT', // SEA TL6D 後二直選(上正 二數)
    2718: 'ANY', // SEA TL6D 後二組選(上反 二數)
    2721: 'EXACT', // SEA TL6D 後三直選(上正 三數)
    2723: 'ANY', // SEA TL6D 後三組選(上反 三數)
    2726: 'EXACT', // SEA TL6D 後四直選(上正 四數)
    2728: 'ANY', // SEA TL6D 後四組選(上反 四數)
    2731: 'Random', // SEA TL6D 后二不定位

    // 三級選單

    // TL3D

    2686: 'EXACT 2D', // SEA TL3D 上正二位数
    2688: 'ANY 2D', // SEA TL3D 上反二位数
    2691: 'EXACT 3D', // SEA TL3D 上正三位数
    2693: 'ANY 3D', // SEA TL3D 上反三位数
    2696: 'ANY 1 of last 2D', // SEA TL3D 上跑两位数

    // TL4D

    2699: 'EXACT 2D', // SEA TL4D 上正二位数
    2701: 'ANY 2D', // SEA TL4D 上反二位数
    2704: 'EXACT 3D', // SEA TL4D 上正三位数
    2706: 'ANY 3D', // SEA TL4D 上反三位数
    2709: 'EXACT 4D', // SEA TL4D 上正四位数
    2711: 'ANY 4D', // SEA TL4D 上反四位数
    2714: 'ANY 1 of last 2D', // SEA TL4D 上跑两位数

    // TL6D

    2717: 'EXACT 2D', // SEA TL6D 上正二位数
    2719: 'ANY 2D', // SEA TL6D 上反二位数
    2722: 'EXACT 3D', // SEA TL6D 上正三位数
    2724: 'ANY 3D', // SEA TL6D 上反三位数
    2727: 'EXACT 4D', // SEA TL6D 上正四位数
    2729: 'ANY 4D', // SEA TL6D 上反四位数
    2732: 'ANY 1 of last 2D', // SEA TL6D 上跑两位数

    // Thai

    // 一級選單

    2060: '2D', // 二数
    2055: '3D', // 三数
    2067: '1D', // 跑数

    2297: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2497: 'ហ្វានតាន់', // 番摊

    // 二級選單

    2056: 'ជាក់ស្តែង', // 上正
    2058: 'ក្រុម', // 上反
    2061: 'ជាក់ស្តែង', // 上正
    2063: 'ក្រុម', // 上反
    2643: 'Second Prize', // 三数 二等
    2644: 'Second Special', // 三数 二特
    2065: 'ការបោះឆ្នោតដោយផ្ទាល់', // 直选加开
    2068: 'បីចុងក្រោយមិនត្រូវបានដាក់', // 后三不定位

    2298: 'ត្រីនិងក្តាម', // 魚蝦蟹,

    2498: 'Fan',
    2500: 'Nim',
    2502: 'Kwok',
    2504: 'ធំតូចសេសគូ',

    // 三級選單

    2062: 'តួលេខពីខ្ទង់', // 上正二位数
    2064: 'លេខពីរខ្ទង់លើ', // 上反二位数
    2066: 'អវិជ្ជមានលេខពីរខ្ទង់', // 下正二位数
    2480: 'Norm EXACT 2D-Special ', // 下正二位数（复式）
    2481: 'Manual Enter EXACT 2D-Special ', // 下正二位数（单式）
    2482: 'Norm ANY 2D-1st', // 上反二位數
    2483: 'Norm EXACT 2D-1st', // 上正二位数(复式)
    2484: 'Manual Enter  EXACT 2D-1st', // 上正二位数（单式）

    2057: 'តួលេខបីខ្ទង់', // 上正三位数
    2059: 'លេខបីខ្ទង់លើ', // 上反三位数
    2645: 'EXACT 3D-2nd', // 二等三位数
    2646: 'EXACT 3D-2nd Special', // 二特三位数
    2069: 'រត់បីខ្ទង់', // 上跑三位数

    2485: 'Norm EXACT 3D-1st', // 上正三位数（复式）
    2486: 'Manual Enter EXACT 3D-1st', // 上正三位数（单式）
    2487: 'Norm ANY 3D-1st', // 上反三位数（复式）

    2299: 'ត្រីនិងក្តាម', // 魚蝦蟹,

    2499: 'Fan',
    2501: 'Nim',
    2503: 'Kwok',
    2505: 'ធំតូចសេសគូ',

    // vnc 越南彩
    2090: '4D', // 四数
    2095: '3D', // 三数
    2100: '2D', // 二数
    2105: '1D', // 跑数

    2515: 'AnyRoll', // 包膽 北部
    2528: 'AnyRoll', // 包膽 中南部

    2550: 'FailParlay', // 北部 逆向 - 一級選單
    2560: 'FailParlay', // 中南部 逆向 - 一級選單

    2598: 'Parlay', // 北部 串组 - 一級選單
    2608: 'Parlay', // 中南部 串组 - 一級選單

    2300: 'ត្រីនិងក្តាម', // 魚蝦蟹
    2488: 'ហ្វានតាន់', // 番摊

    2618: 'Sic Bo Fast3', // 骰寶快三

    2624: 'Ranking', // 极速PK10 - 第1-10名排名
    2627: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值
    2630: 'Dragon&Tiger', // 极速PK10 - 龙虎斗

    // 二級選單

    2091: 'ជាក់ស្តែង', // 四数 上正
    2093: 'ក្រុម', // 四数 上反
    2096: 'ជាក់ស្តែង', // 三数 上正
    2098: 'ក្រុម', // 三数 上反
    2101: 'ជាក់ស្តែង', // 二数 上正
    2103: 'ជាក់ស្តែង', // 二数 下正

    2301: 'ត្រីនិងក្តាម', // 魚蝦蟹

    2489: 'Fan', // 番
    2491: 'Nim', // 角
    2493: 'Kwok', // 念
    2495: 'ធំតូចសេសគូ', // 大小单双

    2619: 'Single Dice Bet', // 骰寶快三 - 单骰
    2620: 'Three Dice Total', // 骰寶快三 - 和值
    2621: 'Specific Triples', // 骰寶快三 - 围骰
    2622: 'Any Triple ', // 骰寶快三 - 全围
    2623: 'ធំតូចសេសគូ', // 骰寶快三 - 大小单双

    2625: 'Ranking', // 极速PK10 - 第1-10名排名 - 二級選單
    2626: '1-10 BSOE', // 极速PK10 - 第1-10名 - 大小单双
    2628: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值 - 二級選單
    2629: 'BSOE1&2 of Sum', // 极速PK10 - 冠亚和值 - 大小单双
    2631: 'Dragon&Tiger', // 极速PK10 - 龙虎斗 - 二級選單

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

    2561: 'FailParlay 4 ', // 中南部 - 四不中 - 二級選單
    2564: 'FailParlay 8', // 中南部 - 八不中 - 二級選單
    2567: 'FailParlay 10', // 中南部 - 十不中 - 二級選單

    2609: 'Parlay 2', // 中南部 - 串2组 - 二級選單
    2612: 'Parlay 3', // 中南部 - 串3组 - 二級選單
    2615: 'Parlay 4', // 中南部 - 串4组 - 二級選單

    2591: 'Head 2D & Special', // 中南部 - 二数头尾 - 二級選單

    2106: 'Random', // 跑數二級選單
    2108: 'Random', // 跑數二級選單

    2579: 'Random', // 特等一等 - 十位個位 - 跑數 - 二級選單

    // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
    2092: 'តួលេខពបួនខ្ទង់', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'លេខបួនខ្ទង់លើ', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'តួលេខបីខ្ទង់', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'លេខបីខ្ទង់លើ', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'តួលេខពីរខ្ទង់', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'EXACT 2D-1st', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'រត់ពីរខ្ទង់', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'រត់ពីរខ្ទង់ខាងក្រោម', // 下跑两位数 Last_2_Any_2nd_VNC

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

    2641: 'Last 2D 1K of AnyResult', // 北部 后二包胆 1K
    2642: 'Last 2D 1K of AnyResult', // 中南部 后二包胆 1K

    2586: 'Head 2D & Special', // 北部 二数头尾 Last_2_1st_7th_North_VNC
    2589: 'Head 2D', // 北部 二数头 Last_2_7th_North_VNC
    2593: 'Head 2D & Special', // 中南部 二数头尾 Last_2_1st_8th_South_VNC
    2596: 'Head 2D', // 中南部 二数头 Last_2_8th_South_VNC

    2580: 'Tens-Special', // 特等十位 Ten_Digit_1st_VNC
    2581: 'Ones-Special', // 特等个位 Unit_Digit_1st_VNC
    2582: 'Tens-Special', // 一等十位 Ten_Digit_2nd_VNC
    2583: 'Ones-Special', // 一等个位 Unit_Digit_2nd_VNC

    2302: 'ត្រីនិងក្តាម', // 魚蝦蟹

    2490: 'Fan', // 番
    2492: 'Nim', // 角
    2494: 'Kwok', // 念
    2496: 'ធំតូចសេសគូ', // 大小单双

    263700: 'ចំនាត់ថ្នាក់', // VNC 4D 一数 Fixed_Place_4D_VNC

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
    2286: 'Norm EXACT 4D-1st', // 上正四位数（复式）Last_4_Straight_1st_VNC_Multi
    2287: 'Manual Enter EXACT 4D-1st', // 上正四位数（单式）Last_4_Straight_1st_VNC_Single

    2284: 'Norm EXACT 3D-1st', // 上正三位数（复式）Last_3_Straight_1st_VNC_Multi
    2285: 'Manual Enter EXACT 3D-1st', // 上正三位数（单式）Last_3_Straight_1st_VNC_Single
    2283: 'Norm ANY 3D-1st', // 上反三位数（复式）Last_3_Combine_1st_VNC_Multi

    2279: 'Norm EXACT 2D-1st', // 上正二位数(复式) Last_2_Straight_1st_VNC_Multi
    2280: 'Manual Enter EXACT 2D-1st', // 上正二位数（单式）Last_2_Straight_1st_VNC_Single
    2281: 'Norm EXACT 2D-1st', // 下正二位数（复式）Last_2_Straight_2nd_VNC_Multi
    2282: 'Manual Enter EXACT 2D-1st', // 下正二位数（单式）Last_2_Straight_2nd_VNC_Single

    // 一數為特例(不算三級又像三級選單)
    2637: 'ចំនាត់ថ្នាក់ (ឯក)', // VNC 4D 一数 (個位) Fixed_Place_4D_Unit_VNC
    2638: 'ចំនាត់ថ្នាក់ (ដប់)', // VNC 4D 一数 (十位) Fixed_Place_4D_Ten_VNC
    2639: 'ចំនាត់ថ្នាក់ (រយ)', // VNC 4D 一数 (百位) Fixed_Place_4D_hundred_VNC
    2640: 'ចំនាត់ថ្នាក់ (ពាន់)', // VNC 4D 一数 (千位) Fixed_Place_4D_Thousand_VNC

    // LAO 老挝彩
    2127: '4D', // 四数
    2132: '3D', // 三数
    2137: '2D', // 二数
    2142: '1D', // 跑数

    2303: 'ត្រីនិងក្តាម', // 魚蝦蟹,

    2506: 'ហ្វានតាន់', // 番摊

    // 二級選單

    2128: 'ជាក់ស្តែង', // 上正
    2130: 'ក្រុម', // 上反
    2133: 'ជាក់ស្តែង', // 上正
    2135: 'ក្រុម', // 上反
    2138: 'ជាក់ស្តែង', // 上正
    2140: 'ជាក់ស្តែង', // 下正
    2129: 'តួលេខពបួនខ្ទង់', // 上正四位数 Last_4_Straight_LAO
    2131: 'លេខបួនខ្ទង់លើ', // 上反四位数 Last_4_Combine_LAO
    2134: 'តួលេខបីខ្ទង់', // 上正三位数 Last_3_Straight_LAO
    2136: 'លេខបីខ្ទង់លើ', // 上反三位数 Last_3_Combine_LAO
    2139: 'តួលេខពីខ្ទង់', // 上正二位数 Last_2_Straight_LAO
    2141: 'លេខពីរខ្ទង់ក្រោម', // 下正二位数 First_2_Straight_LAO
    2144: 'រត់ពីរខ្ទង់ខាងលើ', // 上跑两位数 Last_2_Any_LAO
    2146: 'រត់ពីរខ្ទង់ខាងក្រោម', // 下跑两位数 First_2_Any_LAO

    2304: 'ត្រីនិងក្តាម', // 魚蝦蟹,

    2507: 'Fan',
    2509: 'Nim',
    2511: 'Kwok',
    2513: 'ធំតូចសេសគូ',

    2632: 'ចំនាត់ថ្នាក់', // SEA 4D 一数 Fixed_Place_4D

    // 三級選單

    // 一數為特例(不算三級又像三級選單)
    2633: 'ចំនាត់ថ្នាក់ (ឯក)', // SEA 4D 一数 (個位) Fixed_Place_4D_Unit
    2634: 'ចំនាត់ថ្នាក់ (ដប់)', // SEA 4D 一数 (十位) Fixed_Place_4D_Ten
    2635: 'ចំនាត់ថ្នាក់ (រយ)', // SEA 4D 一数 (百位) Fixed_Place_4D_hundred
    2636: 'ចំនាត់ថ្នាក់ (ពាន់)', // SEA 4D 一数 (千位) Fixed_Place_4D_Thousand

    2288: 'Norm EXACT 2D-last', // Last_2_Straight_LAO_Multi
    2289: 'Manual Enter EXACT 2D-last', // Last_2_Straight_LAO_Single
    2290: 'Norm EXACT 2D-first', // First_2_Straight_LAO_Multi
    2291: 'Manual Enter EXACT 2D-first', // First_2_Straight_LAO_Single
    2292: 'Norm ANY 3D', // Last_3_Combine_LAO_Multi
    2293: 'Norm EXACT 3D', // Last_3_Straight_LAO_Multi
    2294: 'Manual Enter EXACT 3D', // Last_3_Straight_LAO_Single
    2295: 'Norm EXACT 4D', // Last_4_Straight_LAO_Multi
    2296: 'Manual Enter EXACT 4D', // Last_4_Straight_LAO_Single

    2305: 'ត្រីនិងក្តាម', // 魚蝦蟹,

    2508: 'Fan',
    2510: 'Nim',
    2512: 'Kwok',
    2514: 'ធំតូចសេសគូ',

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
  },
};

export default PlayMenu;
