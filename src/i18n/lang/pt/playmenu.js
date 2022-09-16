const PlayMenu = {
  playId: {
    // VTX
    2675: 'Tài Xỉu',
    2676: 'Grande Pequeno',

    // VXD
    2677: 'Xoc Dia',
    2678: 'Grande Pequeno',
    2679: 'Ímpar Mesmo',
    2680: 'Tudo vermelho',
    2681: 'Tudo branco',
    2682: '3 branco + 1 vermelho',
    2683: '3 vermelho + 1 branco',

    // SEA SEA V2 TL(天龍)

    // 一級選單

    // TL2D

    2735: '1 Digit', // sea tl2d 一星
    2741: '2 Digits', // SEA TL2D 二星
    2746: 'Combinations', // SEA TL2D 趣味

    // TL3D

    2684: '2 Digits', // SEA TL3D 二數
    2689: '3 Digits', // SEA TL3D 三數
    2694: '1 Digit', // SEA TL3D 跑數
    2750: 'Combinations', // SEA TL3D 趣味

    // TL4D

    2697: '2 Digits', // SEA TL4D 二數
    2702: '3 Digits', // SEA TL4D 三數
    2707: '4 Digits', // SEA TL4D 四數
    2712: '1 Digit', // SEA TL4D 跑數
    2755: 'Combinations', // SEA TL4D 趣味

    // TL6D

    2715: '2 Digits', // SEA TL6D 二數
    2720: '3 Digits', // SEA TL6D 三數
    2725: '4 Digits', // SEA TL6D 四數
    2730: '1 Digit', // SEA TL6D 跑數
    2761: 'Combinations', // SEA TL6D 趣味

    // 二級選單


    // TL2D

    2736: 'EXACT 1D', // SEA TL2D 定位胆
    2739: 'Any One', // SEA TL2D 任选
    2742: 'EXACT 2D', // SEA TL2D 二星直选
    2744: 'ANY 2D',  // SEA TL2D 二星组选
    2747: 'BSOE' ,// SEA TL2D 大小单双

    // TL3D

    2685: 'EXACT', // SEA TL3D 後二直選(上正 二數)
    2687: 'ANY', // SEA TL3D 後二組選(上反 二數)
    2690: 'EXACT', // SEA TL3D 後三直選(上正 三數)
    2692: 'ANY', // SEA TL3D 後三組選(上反 三數)
    2695: 'Random', // SEA TL3D 后二不定位
    2751: 'BSOE' ,// SEA TL3D 大小单双
    2776: 'EXACT 1D', // SEA TL3D 定位胆

    // TL4D

    2698: 'EXACT', // SEA TL4D 後二直選(上正 二數)
    2700: 'ANY', // SEA TL4D 後二組選(上反 二數)
    2703: 'EXACT', // SEA TL4D 後三直選(上正 三數)
    2705: 'ANY', // SEA TL4D 後三組選(上反 三數)
    2708: 'EXACT', // SEA TL4D 後四直選(上正 四數)
    2710: 'ANY', // SEA TL4D 後四組選(上反 四數)
    2713: 'Random', // SEA TL4D 后二不定位
    2756: 'BSOE' ,// SEA TL4D 大小单双
    2780: 'EXACT 1D', // SEA TL4D 定位胆

    // TL6D

    2716: 'EXACT', // SEA TL6D 後二直選(上正 二數)
    2718: 'ANY', // SEA TL6D 後二組選(上反 二數)
    2721: 'EXACT', // SEA TL6D 後三直選(上正 三數)
    2723: 'ANY', // SEA TL6D 後三組選(上反 三數)
    2726: 'EXACT', // SEA TL6D 後四直選(上正 四數)
    2728: 'ANY', // SEA TL6D 後四組選(上反 四數)
    2731: 'Random', // SEA TL6D 后二不定位
    2762: 'BSOE' ,// SEA TL6D 大小单双
    2785: 'EXACT 1D', // SEA TL6D 定位胆

    // 三級選單

    // TL2D

    2737: 'EXACT 1D 1st', // SEA TL2D 定位胆第一球
    2738: 'EXACT 1D 2nd',  // SEA TL2D 定位胆第二球
    2740: 'Any One', // SEA TL2D 任选一

    2743: 'EXACT 2D', // SEA TL2D 二星直选
    2745: 'ANY 2D',  // SEA TL2D 二星组选

    2748: 'BSOE 1st', // SEA TL2D BSOE第一球
    2749: 'BSOE 2nd', // SEA TL2D BSOE第二球

    // TL3D

    2686: 'EXACT 2D', // SEA TL3D 上正二位数
    2688: 'ANY 2D', // SEA TL3D 上反二位数
    2691: 'EXACT 3D', // SEA TL3D 上正三位数
    2693: 'ANY 3D', // SEA TL3D 上反三位数
    2696: 'ANY 1 of last 2D', // SEA TL3D 上跑两位数
    2754: 'BSOE' ,// SEA TL3D 大小单双

    2752: 'BSOE 1st', // SEA TL3D BSOE第一球
    2753: 'BSOE 2nd', // SEA TL3D BSOE第二球
    2754: 'BSOE 3rd', // SEA TL3D BSOE第三球

    2777: 'EXACT 1D 1st', // SEA TL3D 定位胆第一球
    2778: 'EXACT 1D 2nd',  // SEA TL3D 定位胆第二球
    2779: 'EXACT 1D 2rd',  // SEA TL3D 定位胆第3球

    // TL4D

    2699: 'EXACT 2D', // SEA TL4D 上正二位数
    2701: 'ANY 2D', // SEA TL4D 上反二位数
    2704: 'EXACT 3D', // SEA TL4D 上正三位数
    2706: 'ANY 3D', // SEA TL4D 上反三位数
    2709: 'EXACT 4D', // SEA TL4D 上正四位数
    2711: 'ANY 4D', // SEA TL4D 上反四位数
    2714: 'ANY 1 of last 2D', // SEA TL4D 上跑两位数
    2756: 'BSOE' ,// SEA TL4D 大小单双

    2757: 'BSOE 1st', // SEA TL3D BSOE第一球
    2758: 'BSOE 2nd', // SEA TL3D BSOE第二球
    2759: 'BSOE 3rd', // SEA TL3D BSOE第三球
    2760: 'BSOE 4th', // SEA TL3D BSOE第4球

    2781: 'EXACT 1D 1st', // SEA TL4D 定位胆第一球
    2782: 'EXACT 1D 2nd', // SEA TL4D 定位胆第二球
    2783: 'EXACT 1D 3rd', // SEA TL4D 定位胆第三球
    2784: 'EXACT 1D 4th', // SEA TL4D 定位胆第4球

    // TL6D

    2717: 'EXACT 2D', // SEA TL6D 上正二位数
    2719: 'ANY 2D', // SEA TL6D 上反二位数
    2722: 'EXACT 3D', // SEA TL6D 上正三位数
    2724: 'ANY 3D', // SEA TL6D 上反三位数
    2727: 'EXACT 4D', // SEA TL6D 上正四位数
    2729: 'ANY 4D', // SEA TL6D 上反四位数
    2732: 'ANY 1 of last 2D', // SEA TL6D 上跑两位数
    2762: 'BSOE' ,// SEA TL6D 大小单双

    2763: 'BSOE 1st', // SEA TL3D BSOE第一球
    2764: 'BSOE 2nd', // SEA TL3D BSOE第二球
    2765: 'BSOE 3rd', // SEA TL3D BSOE第三球
    2766: 'BSOE 4th', // SEA TL3D BSOE第4球
    2767: 'BSOE 5th', // SEA TL3D BSOE第5球
    2768: 'BSOE 6th', // SEA TL3D BSOE第6球

    2786: 'EXACT 1D 1st', // SEA TL6D 定位胆第一球
    2787: 'EXACT 1D 2nd', // SEA TL6D 定位胆第二球
    2788: 'EXACT 1D 3rd', // SEA TL6D 定位胆第三球
    2789: 'EXACT 1D 4th', // SEA TL6D 定位胆第4球
    2790: 'EXACT 1D 5th', // SEA TL6D 定位胆第5球
    2791: 'EXACT 1D 6th', // SEA TL6D 定位胆第6球

    // Thai

    // 一級選單

    2060: '2D', // 二数
    2055: '3D', // 三数
    2067: '1D', // 跑数
    2297: 'FPC', // 魚蝦蟹
    2497: 'FanTan', // 番摊

    // 二級選單

    2056: 'EXACT', // 上正
    2058: 'QUALQUER', // 上反
    2061: 'EXACT', // 上正
    2063: 'QUALQUER', // 上反
    2643: 'Segundo prêmio', // 二等
    2644: 'Segundo especial', // 二特
    2065: 'Bonus digit', // 直选加开
    2068: 'Random Back 3 Digits', // 后三不定位

    2298: 'FPC', // 魚蝦蟹
    2498: 'Ventilador',
    2500: 'Kwok',
    2502: 'Nim',
    2504: 'BSOE',

    // 三級選單

    2062: 'EXACT 2D-1o', // 上正二位数
    2064: 'QUALQUER 2D-1o', // 上反二位数
    2066: 'EXACT 2D-Special ', // 下正二位数
    2480: 'Norm EXACT 2D-Special ',
    2481: 'Manual Enter EXACT 2D-Special ',
    2482: 'Norm ANY 2D-1o',
    2483: 'Norm EXACT 2D-1o',
    2484: 'Manual Enter  EXACT 2D-1o',

    2057: 'EXACT 3D-1o', // 上正三位数
    2059: 'QUALQUER 3D-1o', // 上反三位数
    2645: 'EXACT 3D-2nd', // 二等三位数
    2646: 'EXACT 3D-2nd Special', // 二特三位数
    2069: 'QUALQUER 1D-1o', // 上跑三位数
    // no longer used
    2485: 'Norm EXACT 3D-1o',
    2486: 'Manual Enter EXACT 3D-1o',
    2487: 'Norm ANY 3D-1o',

    2299: 'FPC', // 魚蝦蟹
    
    2499: 'Ventilador',
    2501: 'Kwok',
    2503: 'Nim',
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
    2608: 'ParlaSegundo especialy', // 中南部 串组 - 一級選單

    2300: 'FPC', // 魚蝦蟹
    2488: 'FanTan', // 番摊

    2618: 'Super SicBo', // 骰寶快三

    2624: 'Classificação 1-10', // 极速PK10 - 第1-10名排名
    2627: 'Soma de 1ª e 2ª', // 极速PK10 - 冠亚和值
    2630: 'Dragão e tigre', // 极速PK10 - 龙虎斗

    // 二級選單

    2091: 'EXACT', // 四数 上正
    2093: 'QUALQUER', // 四数 上反
    2096: 'EXACT', // 三数 上正
    2098: 'QUALQUER', // 三数 上反
    2101: 'EXACT', // 二数 上正
    2103: 'EXACT', // 二数 下正

    2301: 'FPC', // 魚蝦蟹

    2489: 'Ventilador', // 番
    2491: 'Kwok', // 角
    2493: 'Nim', // 念
    2495: 'BSOE', // 大小单双

    2619: 'Aposta de dados simples', // 骰寶快三 - 单骰
    2620: 'Três dados no total', // 骰寶快三 - 和值
    2621: 'Triplo', // 骰寶快三 - 围骰
    2622: 'Qualquer triplo', // 骰寶快三 - 全围
    2623: 'BSOE', // 骰寶快三 - 大小单双

    2625: 'Classificação 1-10', // 极速PK10 - 第1-10名排名-二級選單
    2626: '1-10 BSOE', // 极速PK10 - 第1-10名-大小单双
    2628: 'Soma de 1ª e 2ª', // 极速PK10 - 冠亚和值-二級選單
    2629: 'BSOE1 e 2 da soma', // 极速PK10 - 冠亚和值-大小单双
    2631: 'Dragão e tigre', // 极速PK10 - 龙虎斗-二級選單

    2516: 'Último 2D of AnyResult', // 北部 后二包胆
    2520: 'Último 3D of AnyResult', // 北部 后三包胆
    2524: 'Último 4D of AnyResult', // 北部 后四包胆

    2551: 'FailParlay 4', // 北部 - 四不中 - 二級選單
    2554: 'FailParlay 8', // 北部 - 八不中 - 二級選單
    2557: 'FailParlay 10', // 北部 - 十不中 - 二級選單

    2599: 'Parlay 2', // 北部 - 串2组 - 二級選單
    2602: 'Parlay 3', // 北部 - 串3组 - 二級選單
    2605: 'Parlay 4', // 北部 - 串4组 - 二級選單

    2584: 'Cabeça 2D e especial', // 北部 - 二数头尾 - 二級選單

    2529: 'Último 2D of AnyResult', // 中南部 后二包胆
    2533: 'Último 3D of AnyResult', // 中南部 后三包胆
    2537: 'Último 4D of AnyResult', // 中南部 后四包胆

    2561: 'FailParlay 4 ', // 中南部 - 四不中 - 二級選單
    2564: 'FailParlay 8', // 中南部 - 八不中 - 二級選單
    2567: 'FailParlay 10', // 中南部 - 十不中 - 二級選單

    2609: 'Parlay 2', // 中南部 - 串2组 - 二級選單
    2612: 'Parlay 3', // 中南部 - 串3组 - 二級選單
    2615: 'Parlay 4', // 中南部 - 串4组 - 二級選單

    2591: 'Cabeça 2D e especial', // 中南部 - 二数头尾 - 二級選單

    2106: 'Random', // 跑數二級選單
    2108: 'Random', // 跑數二級選單

    2579: 'Random', // 特等一等 - 十位個位 - 跑數 - 二級選單

    // 以下在東南亞彩是屬於三級選單直選，在越南彩才是屬於二級選單
    2092: 'EXACT 4D-Special', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'QUALQUER 4D-Special', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'EXACT 3D-Special', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'QUALQUER 3D-Special', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'EXACT 2D-Special', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'EXACT 2D-1o', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'QUALQUER 1D-Special', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'QUALQUER 1D-1o', // 下跑两位数 Last_2_Any_2nd_VNC

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

    2517: 'Último 2D de AnyResult', // 北部 后二包胆
    2521: 'Último 3D de AnyResult', // 北部 后三包胆
    2525: 'Último 4D de AnyResult', // 北部 后四包胆
    2530: 'Último 2D de AnyResult', // 中南部 后二包胆
    2534: 'Último 3D de AnyResult', // 中南部 后三包胆
    2538: 'Último 4D de AnyResult', // 中南部 后四包胆

    2641: 'Último 2D 1K de AnyResult', // 北部 后二包胆 1K
    2642: 'Último 2D 1K de AnyResult', // 中南部 后二包胆 1K

    2586: 'Cabeça 2D e especial', // 北部 二数头尾 Last_2_1st_7th_North_VNC
    2589: 'Cabeça 2D', // 北部 二数头 Last_2_7th_North_VNC
    2593: 'Cabeça 2D e especial', // 中南部 二数头尾 Last_2_1st_8th_South_VNC
    2596: 'Cabeça 2D', // 中南部 二数头 Last_2_8th_South_VNC

    2580: 'Dez-Special', // 特等十位 Ten_Digit_1st_VNC
    2581: 'Um-Special', // 特等个位 Unit_Digit_1st_VNC
    2582: 'Dez-1o', // 一等十位 Ten_Digit_2nd_VNC
    2583: 'Um-1o', // 一等个位 Unit_Digit_2nd_VNC

    2302: 'FPC', // 魚蝦蟹

    2490: 'Ventilador', // 番
    2492: 'Kwok', // 角
    2494: 'Nim', // 念
    2496: 'BSOE', // 大小单双

    263700: 'Posição', // VNC 4D 一数 Fixed_Place_4D_VNC

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

    // 一數為特例(不算三級又像三級選單)
    2637: 'Posição (uns)', // VNC 4D 一数 (個位) Fixed_Place_4D_Unit_VNC
    2638: 'Posição (Dezenas)', // VNC 4D 一数 (十位) Fixed_Place_4D_Ten_VNC
    2639: 'Posição (Centenas)', // VNC 4D 一数 (百位) Fixed_Place_4D_hundred_VNC
    2640: 'Posição (Milhares)', // VNC 4D 一数 (千位) Fixed_Place_4D_Thousand_VNC

    // LAO 老挝彩

    // 一級選單

    2127: '4D', // 四数
    2132: '3D', // 三数
    2137: '2D', // 二数
    2142: '1D', // 跑数

    2303: 'FPC', // 魚蝦蟹

    2506: 'FanTan', // 番摊

    // 二級選單

    2128: 'EXACT', // 上正
    2130: 'QUALQUER', // 上反
    2133: 'EXACT', // 上正
    2135: 'QUALQUER', // 上反
    2138: 'EXACT', // 上正
    2140: 'EXACT', // 下正
    2129: 'EXACT 4D', // 上正四位数 Last_4_Straight_LAO
    2131: 'QUALQUER 4D', // 上反四位数 Last_4_Combine_LAO
    2134: 'EXACT 3D', // 上正三位数 Last_3_Straight_LAO
    2136: 'QUALQUER 3D', // 上反三位数 Last_3_Combine_LAO
    2139: 'EXACT 2D-último', // 上正二位数 Last_2_Straight_LAO
    2141: 'EXACT 2D-primeiro', // 下正二位数 First_2_Straight_LAO
    2143: 'Random', // 跑數二級選單
    2145: 'Random', // 跑數二級選單

    2304: 'FPC', // 魚蝦蟹

    2507: 'Ventilador',
    2509: 'Kwok',
    2511: 'Nim',
    2513: 'BSOE',

    2632: 'Posição', // SEA 4D 一数 Fixed_Place_4D

    // 三級選單

    // 一數為特例(不算三級又像三級選單)
    2633: 'Posição (uns)', // SEA 4D 一数 (個位) Fixed_Place_4D_Unit
    2634: 'Posição (Dezenas)', // SEA 4D 一数 (十位) Fixed_Place_4D_Ten
    2635: 'Posição (Centenas)', // SEA 4D 一数 (百位) Fixed_Place_4D_hundred
    2636: 'Posição (Milhares)', // SEA 4D 一数 (千位) Fixed_Place_4D_Thousand

    2288: 'Norm EXACT 2D-last', // Last_2_Straight_LAO_Multi
    2289: 'Manual Enter EXACT 2D-last', // Last_2_Straight_LAO_Single
    2290: 'Norm EXACT 2D-first', // First_2_Straight_LAO_Multi
    2291: 'Manual Enter EXACT 2D-first', // First_2_Straight_LAO_Single
    2292: 'Norm ANY 3D', // Last_3_Combine_LAO_Multi
    2293: 'Norm EXACT 3D', // Last_3_Straight_LAO_Multi
    2294: 'Manual Enter EXACT 3D', // Last_3_Straight_LAO_Single
    2295: 'Norm EXACT 4D', // Last_4_Straight_LAO_Multi
    2296: 'Manual Enter EXACT 4D', // Last_4_Straight_LAO_Single
    2144: 'QUALQUER 1D-último', // 上跑两位数 Last_2_Any_LAO
    2146: 'QUALQUER 1D-primeiro', // 下跑两位数 First_2_Any_LAO

    2305: 'FPC', // 魚蝦蟹

    2508: 'Ventilador',
    2510: 'Kwok',
    2512: 'Nim',
    2514: 'BSOE',

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
