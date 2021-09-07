const PlayMenu = {
  playId: {
    // Thai
    2056: 'TEPAT', // 上正
    2058: 'ANY', // 上反
    2061: 'TEPAT', // 上正
    2063: 'ANY', // 上反
    2065: '直选加开',
    2068: '后三不定位',
    2055: 'Tiga digit',
    2057: 'Tiga digit berurutan - 1st',
    2059: 'Tiga digit tanpa urutan - 1st',
    2643: 'Hadiah Kedua', // 三数 二等
    2644: 'Spesial Kedua', // 三数 二特
    2645: 'Tiga digit tanpa urutan - 2nd', // 二等三位数
    2646: 'Tiga digit tanpa urutan - Spesial Kedua', // 二特三位数

    2060: 'Dua digit',
    2062: 'Dua digit berurutan - 1st',
    2064: 'Dua digit tanpa urutan - 1st',
    2066: 'Dua digit spesial berurutan',
    2067: 'Satu digit',
    2069: 'Satu digit tanpa urutan - 1st',
    2480: 'Norma Dua digit spesial berurutan',
    2481: 'Manual Dua digit spesial berurutan',
    2482: 'Norma Dua digit tanpa urutan - 1st',
    2483: 'Norma Dua digit berurutan - 1st',
    2484: 'Manual  Dua digit berurutan - 1st',
    2485: 'Norma Tiga digit berurutan - 1st',
    2486: 'Manual Tiga digit berurutan - 1st',
    2487: 'Norma Tiga digit tanpa urutan - 1st',
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
    2504: 'BesarKecilGanjilLLGenap',
    2505: 'BesarKecilGanjilLLGenap',

    // vnc 越南彩

    // 一級選單

    2090: 'Empat digit', // 四数
    2095: 'Tiga digit', // 三数
    2100: 'Dua digit', // 二数
    2105: 'Satu digit', // 跑数

    2515: 'AnyRoll', // 包膽 北部
    2528: 'AnyRoll', // 包膽 中南部

    2550: 'Kegagalan Parlay', // 北部 逆向 - 一級選單
    2560: 'Kegagalan Parlay', // 中南部 逆向 - 一級選單

    2598: 'Parlay', // 北部 串组 - 一級選單
    2608: 'Parlay', // 中南部 串组 - 一級選單

    2300: 'FishPrawnCrab', // 魚蝦蟹
    2488: 'FanTan', // 番摊

    2618: 'Sic Bo Fast3', // 骰寶快三

    2624: 'Ranking', // 极速PK10 - 第1-10名排名
    2627: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值
    2630: 'Dragon&Tiger', // 极速PK10 - 龙虎斗

    // 二級選單

    2091: 'TEPAT', // 四数 上正
    2093: 'ANY', // 四数 上反
    2096: 'TEPAT', // 三数 上正
    2098: 'ANY', // 三数 上反
    2101: 'TEPAT', // 二数 上正
    2103: 'TEPAT', // 二数 下正

    2301: 'FishPrawnCrab', // 魚蝦蟹

    2489: 'Fan', // 番
    2491: 'Kwok', // 角
    2493: 'Nim', // 念
    2495: 'BesarKecilGanjilLLGenap', // 大小单双

    2619: 'Single Dice Bet', // 骰寶快三 - 单骰
    2620: 'Three Dice Total', // 骰寶快三 - 和值
    2621: 'Specific Triples', // 骰寶快三 - 围骰
    2622: 'Any Triple ', // 骰寶快三 - 全围
    2623: 'BesarKecilGanjilLLGenap', // 骰寶快三 - 大小单双

    2625: 'Ranking', // 极速PK10 - 第1-10名排名-二級選單
    2626: '1-10 BSOE', // 极速PK10 - 第1-10名-大小单双
    2628: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值-二級選單
    2629: 'BSOE1&2 of Sum', // 极速PK10 - 冠亚和值-大小单双
    2631: 'Dragon&Tiger', // 极速PK10 - 龙虎斗-二級選單

    2516: 'Last 2D of AnyResult', // 北部 后二包胆
    2520: 'Last 3D of AnyResult', // 北部 后三包胆
    2524: 'Last 4D of AnyResult', // 北部 后四包胆

    2551: 'Kegagalan Parlay 4', // 北部 - 四不中 - 二級選單
    2554: 'Kegagalan Parlay 8', // 北部 - 八不中 - 二級選單
    2557: 'Kegagalan Parlay 10', // 北部 - 十不中 - 二級選單

    2599: 'Parlay 2', // 北部 - 串2组 - 二級選單
    2602: 'Parlay 3', // 北部 - 串3组 - 二級選單
    2605: 'Parlay 4', // 北部 - 串4组 - 二級選單

    2584: 'Head 2D & Special', // 北部 - 二数头尾 - 二級選單

    2529: 'Last 2D of AnyResult', // 中南部 后二包胆
    2533: 'Last 3D of AnyResult', // 中南部 后三包胆
    2537: 'Last 4D of AnyResult', // 中南部 后四包胆

    2561: 'Kegagalan Parlay 4 ', // 中南部 - 四不中 - 二級選單
    2564: 'Kegagalan Parlay 8', // 中南部 - 八不中 - 二級選單
    2567: 'Kegagalan Parlay 10', // 中南部 - 十不中 - 二級選單

    2609: 'Parlay 2', // 中南部 - 串2组 - 二級選單
    2612: 'Parlay 3', // 中南部 - 串3组 - 二級選單
    2615: 'Parlay 4', // 中南部 - 串4组 - 二級選單

    2591: 'Head 2D & Special', // 中南部 - 二数头尾 - 二級選單

    // 跑數二級選單目前不會使用到
    2106: '一等二星不定位', // 跑數二級選單
    2108: '二等二星不定位', // 跑數二級選單

    2579: '特等二星不定位', // 特等一等 - 十位個位 - 跑數 - 二級選單

    // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
    2092: 'Empat digit berurutan - 1st', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'Empat digit tanpa urutan - 1st', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'Tiga digit berurutan - 1st', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'Tiga digit tanpa urutan - 1st', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'Dua digit berurutan - 1st', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'EXACT 2D-1st', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'Satu digit tanpa urutan - 1st', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'Satu digit tanpa urutan - 2nd', // 下跑两位数 Last_2_Any_2nd_VNC

    2601: 'Xiên 2 - Nhanh', // 北部 串2组 Bunch_2_North_VNC
    2604: 'Xiên 3 - Nhanh', // 北部 串3组 Bunch_3_North_VNC
    2607: 'Xiên 4 - Nhanh', // 北部 串4组 Bunch_4_North_VNC
    2611: 'Xiên 2 - Nhanh', // 中南部 串2组 Bunch_2_South_VNC
    2614: 'Xiên 3 - Nhanh', // 中南部 串3组 Bunch_3_South_VNC
    2617: 'Xiên 4 - Nhanh', // 中南部 串4组 Bunch_4_South_VNC

    2552: 'Kegagalan Parlay 4', // 北部 - 四不中
    2555: 'KegagalanParlay 8', // 北部 - 八不中
    2558: 'KegagalanParlay 10', // 北部 - 十不中
    2562: 'Kegagalan Parlay 4', // 中南部 - 四不中
    2565: 'KegagalanParlay 8', // 中南部 - 八不中
    2568: 'KegagalanParlay 10', // 中南部 - 十不中

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

    2580: 'Puluhan-Special', // 特等十位 Ten_Digit_1st_VNC
    2581: 'Satuan-Special', // 特等个位 Unit_Digit_1st_VNC
    2582: 'Puluhan-1st', // 一等十位 Ten_Digit_2nd_VNC
    2583: 'Satuan-1st', // 一等个位 Unit_Digit_2nd_VNC

    2302: 'FishPrawnCrab', // 魚蝦蟹

    2490: 'Fan', // 番
    2492: 'Kwok', // 角
    2494: 'Nim', // 念
    2496: 'BesarKecilGanjilLLGenap', // 大小单双

    // 三級選單

    // 北部
    2518: 'Norm Last 2D of AnyResult', // 北部 后二包胆(复式)
    2519: 'Manual Last 2D of AnyResult', // 北部 后二包胆(单式)
    2522: 'Norm Last 3D of AnyResult', // 北部 后三包胆（复式）
    2523: 'Manual Last 3D of AnyResult', // 北部 后三包胆（单式）
    2526: 'Norm Last 4D of AnyResult', // 北部 后四包胆（复式）
    2527: 'Manual Last 4D of AnyResult', // 北部 后四包胆（单式）

    2553: 'Manual Kegagalan Parlay 4', // 北部 - 四不中(单式) - 三級選單
    2556: 'Manual Kegagalan Parlay 8', // 北部 - 八不中(单式) - 三級選單
    2559: 'Manual Kegagalan Parlay 10', // 北部 - 十不中(单式) - 三級選單

    2587: 'Norm Head 2D & Special', // 北部 二数头尾（复式) Last_2_1st_7th_North_VNC_Multi
    2590: 'Norm Head 2D', // 北部 二数头（复式) Last_2_7th_North_VNC_Multi

    // 中南部
    2531: 'Norm Last 2D of AnyResult', // 中南部 后二包胆(复式)
    2532: 'Manual Last 2D of AnyResult', // 中南部 后二包胆(单式)
    2535: 'Norm Last 3D of AnyResult', // 中南部 后三包胆（复式）
    2536: 'Manual Last 3D of AnyResult', // 中南部 后三包胆（单式）
    2539: 'Norm Last 4D of AnyResult', // 中南部 后四包胆（复式）
    2540: 'Manual Last 4D of AnyResult', // 中南部 后四包胆（单式）

    2563: 'Manual Kegagalan Parlay 4', // 中南部 - 四不中(单式) - 三級選單
    2566: 'Manual Kegagalan Parlay 8', // 中南部 - 八不中(单式) - 三級選單
    2569: 'Manual Kegagalan Parlay 10', // 中南部 - 十不中(单式) - 三級選單

    2594: 'Norm Head 2D & Special', // 中南部 二数头尾（复式) Last_2_1st_8th_South_VNC_Multi
    2597: 'Norm Head 2D', // 中南部 二数头(复式) Last_2_8th_South_VNC_Multi

    // 以下不分南北部
    2286: 'Norma Empat digit berurutan - 1st', // 上正四位数（复式）Last_4_Straight_1st_VNC_Multi
    2287: 'Manual Empat digit berurutan - 1st', // 上正四位数（单式）Last_4_Straight_1st_VNC_Single

    2284: 'Norma Tiga digit berurutan - 1st', // 上正三位数（复式）Last_3_Straight_1st_VNC_Multi
    2285: 'Manual  Tiga digit berurutan - 1st', // 上正三位数（单式）Last_3_Straight_1st_VNC_Single
    2283: 'Norma Tiga digit tanpa urutan - 1st', // 上反三位数（复式）Last_3_Combine_1st_VNC_Multi

    2279: 'Norm EXACT 2D-1st', // 上正二位数(复式) Last_2_Straight_1st_VNC_Multi
    2280: 'Manual Dua digit berurutan - 1st', // 上正二位数（单式）Last_2_Straight_1st_VNC_Single
    2281: 'Norm EXACT 2D-1st', // 下正二位数（复式）Last_2_Straight_2nd_VNC_Multi
    2282: 'Manual Enter EXACT 2D-1st', // 下正二位数（单式）Last_2_Straight_2nd_VNC_Single

    // LAO 老挝彩
    2127: 'Empat digit',
    2132: 'Tiga digit',
    2137: 'Dua digit',
    2142: 'Satu digit',

    2128: 'TEPAT', // 上正
    2130: 'ANY', // 上反
    2133: 'TEPAT', // 上正
    2135: 'ANY', // 上反
    2138: 'TEPAT', // 上正
    2140: 'TEPAT', // 下正

    2129: 'Empat digit berurutan', // Last_4_Straight_LAO
    2131: 'Empat digit tanpa urutan', // Last_4_Combine_LAO
    2134: 'Tiga digit berurutan', // Last_3_Straight_LAO
    2136: 'Tiga digit tanpa urutan', // Last_3_Combine_LAO
    2139: 'Dua digit berurutan - Terakhir', // Last_2_Straight_LAO
    2141: 'Dua digit berurutan - Pertama', // First_2_Straight_LAO
    2144: 'Satu digit tanpa urutan - Terakhir', // Last_2_Any_LAO
    2146: 'Satu digit tanpa urutan - Pertama', // First_2_Any_LAO

    2632: 'Position', // SEA 4D 一数 Fixed_Place_4D
    2633: 'Position (Satuan)', // SEA 4D 一数 (個位) Fixed_Place_4D_Unit
    2634: 'Position (Puluhan)', // SEA 4D 一数 (十位) Fixed_Place_4D_Ten
    2635: 'Position (Ratusan)', // SEA 4D 一数 (百位) Fixed_Place_4D_hundred
    2636: 'Position (Ribuan)', // SEA 4D 一数 (千位) Fixed_Place_4D_Thousand

    263700: 'Position', // VNC 4D 一数 Fixed_Place_4D_VNC
    2637: 'Position (Satuan)', // VNC 4D 一数 (個位) Fixed_Place_4D_Unit_VNC
    2638: 'Position (Puluhan)', // VNC 4D 一数 (十位) Fixed_Place_4D_Ten_VNC
    2639: 'Position (Ratusan)', // VNC 4D 一数 (百位) Fixed_Place_4D_hundred_VNC
    2640: 'Position (Ribuan)', // VNC 4D 一数 (千位) Fixed_Place_4D_Thousand_VNC

    2288: 'Norma Dua digit berurutan - Terakhir', // Last_2_Straight_LAO_Multi
    2289: 'Manual Dua digit berurutan - Terakhir', // Last_2_Straight_LAO_Single
    2290: 'Norma Dua digit berurutan - Pertama', // First_2_Straight_LAO_Multi
    2291: 'Manual Dua digit berurutan - Pertama', // First_2_Straight_LAO_Single
    2292: 'Norma Tiga digit tanpa urutan', // Last_3_Combine_LAO_Multi
    2293: 'Norma Tiga digit berurutan', // Last_3_Straight_LAO_Multi
    2294: 'Manual Tiga digit berurutan', // Last_3_Straight_LAO_Single
    2295: 'Norma Empat digit berurutan', // Last_4_Straight_LAO_Multi
    2296: 'Manual Empat digit berurutan', // Last_4_Straight_LAO_Single

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
    2513: 'BesarKecilGanjilLLGenap',
    2514: 'BesarKecilGanjilLLGenap',
  },
};

export default PlayMenu;
