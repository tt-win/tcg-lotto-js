const PlayMenu = {
  playId: {
    // VTX
    2675: 'Tài Xỉu',
    2676: 'Big Small',
    // VXD
    2677: 'Xoc Dia',
    2678: 'Big Small',
    2679: 'Odd Even',
    2680: 'All Red',
    2681: 'All White',
    2682: '3 White+1 Red',
    2683: '3 Red+1 White',

    // VBC 魚蝦蟹
    2733: 'Fish Prawn Crab',
    2734: 'Fish Prawn Crab',

    // CLR
    3058: 'Color',
    3059: 'Color',

    // SEA SEA V2 TL(天龍)

    // 一級選單

    // TL2D

    2735: '1 Digit', // SEA TL2D 一星
    2741: '2 Digits', // SEA TL2D 二星
    2746: 'Combinations', // SEA TL2D 趣味

    // TL3D

    2684: '2 Digits', // SEA TL3D 二数
    2689: '3 Digits', // SEA TL3D 三数
    2694: '1 Digit', // SEA TL3D 跑数
    2750: 'Combinations', // SEA TL3D 趣味

    // TL4D

    2697: '2 Digits', // SEA TL4D 二数
    2702: '3 Digits', // SEA TL4D 三数
    2707: '4 Digits', // SEA TL4D 四数
    2712: '1 Digit', // SEA TL4D 跑数
    2755: 'Combinations', // SEA TL4D 趣味

    // TL6D

    2715: '2 Digits', // SEA TL6D 二数
    2720: '3 Digits', // SEA TL6D 三数
    2725: '4 Digits', // SEA TL6D 四数
    2730: '1 Digit', // SEA TL6D 跑数
    2761: 'Combinations', // SEA TL6D 趣味

    // TL642

    2894: '3 Digits', // SEA TL642 Lucky Pick
    2901: '2 Digits', // SEA TL642 3D
    2908: '1 Digit', // SEA TL642 2D
    3034: 'Lucky Pick', // SEA TL642 1D

    // TL645

    2918: 'Lucky Pick', // SEA TL645 Lucky Pick
    2923: '3 Digits', // SEA TL645 3D
    2930: '2 Digits', // SEA TL645 2D
    2937: '1 Digit', // SEA TL645 1D

    // TL649

    2947: 'Lucky Pick', // SEA TL649 Lucky Pick
    2952: '3 Digits', // SEA TL649 3D
    2959: '2 Digits', // SEA TL649 2D
    2966: '1 Digit', // SEA TL649 1D

    // TL655

    2976: 'Lucky Pick', // SEA TL655 Lucky Pick
    2981: '3 Digits', // SEA TL655 3D
    2988: '2 Digits', // SEA TL655 2D
    2995: '1 Digit', // SEA TL655 1D

    // TL658

    3005: 'Lucky Pick', // SEA TL658 Lucky Pick
    3010: '3 Digits', // SEA TL658 3D
    3017: '2 Digits', // SEA TL658 2D
    3024: '1 Digit', // SEA TL658 1D

    // TL2D37

    3039: '1 Digit', // SEA TL2D37 一星
    3045: '2 Digits', // SEA TL2D37 二星
    3050: 'Combinations', // SEA TL2D37 趣味

    // 二級選單

    // TL2D

    2736: 'EXACT 1D', // SEA TL2D 定位胆
    2739: 'Any One', // SEA TL2D 任选
    2742: 'EXACT', // SEA TL2D 二星直选
    2744: 'ANY', // SEA TL2D 二星组选
    2747: 'BSOE', // SEA TL2D 大小单双

    // TL3D

    2685: 'EXACT', // SEA TL3D 后二直选
    2687: 'ANY', // SEA TL3D 后二组选
    2690: 'EXACT', // SEA TL3D 后三直选
    2692: 'ANY', // SEA TL3D 后三组选
    2695: 'ANY', // SEA TL3D 后二不定位
    2751: 'BSOE', // SEA TL3D 大小单双
    2776: 'EXACT 1D', // SEA TL3D 定位胆

    // TL4D

    2698: 'EXACT', // SEA TL4D 后二直选
    2700: 'ANY', // SEA TL4D 后二组选
    2703: 'EXACT', // SEA TL4D 后三直选
    2705: 'ANY', // SEA TL4D 后三组选
    2708: 'EXACT', // SEA TL4D 后四直选
    2710: 'ANY', // SEA TL4D 后四组选
    2713: 'ANY', // SEA TL4D 后二不定位
    2756: 'BSOE', // SEA TL4D 大小单双
    2780: 'EXACT 1D', // SEA TL4D 定位胆

    // TL6D

    2716: 'EXACT', // SEA TL6D 后二直选
    2718: 'ANY', // SEA TL6D 后二组选
    2721: 'EXACT', // SEA TL6D 后三直选
    2723: 'ANY', // SEA TL6D 后三组选
    2726: 'EXACT', // SEA TL6D 后四直选
    2728: 'ANY', // SEA TL6D 后四组选
    2731: 'ANY', // SEA TL6D 后二不定位
    2762: 'BSOE', // SEA TL6D 大小单双
    2785: 'EXACT 1D', // SEA TL6D 定位胆

    // TL642

    2895: 'Straight', // SEA TL642 Lucky Pick 3
    2898: 'Rambolito', // SEA TL642 Lucky Pick 12
    2902: 'Straight', // SEA TL642 Straight
    2905: 'Rambolito', // SEA TL642 Any
    2909: 'Position', // SEA TL642 Straight
    2916: 'Any', // SEA TL642 Any
    3035: 'Lucky Pick 3', // SEA TL642 Fixed Position
    3037: 'Lucky Pick 12', // SEA TL642 Any

    // TL645
    
    2919: 'Lucky Pick 3', // SEA TL645 Lucky Pick 3
    2921: 'Lucky Pick 12', // SEA TL645 Lucky Pick 12
    2924: 'Straight', // SEA TL645 Straight
    2927: 'Rambolito', // SEA TL645 Any
    2931: 'Straight', // SEA TL645 Straight
    2934: 'Rambolito', // SEA TL645 Any
    2938: 'Position', // SEA TL645 Fixed Position
    2945: 'Any', // SEA TL645 Any

    // TL649

    2948: 'Lucky Pick 3', // SEA TL649 Lucky Pick 3
    2950: 'Lucky Pick 12', // SEA TL649 Lucky Pick 12
    2953: 'Straight', // SEA TL649 Straight
    2956: 'Rambolito', // SEA TL649 Any
    2960: 'Straight', // SEA TL649 Straight
    2963: 'Rambolito', // SEA TL649 Any
    2967: 'Position', // SEA TL649 Fixed Position
    2974: 'Any', // SEA TL649 Any

    // TL655

    2977: 'Lucky Pick 3', // SEA TL655 Lucky Pick 3
    2979: 'Lucky Pick 12', // SEA TL655 Lucky Pick 12
    2982: 'Straight', // SEA TL655 Straight
    2985: 'Rambolito', // SEA TL655 Any
    2989: 'Straight', // SEA TL655 Straight
    2992: 'Rambolito', // SEA TL655 Any
    2996: 'Position', // SEA TL655 Fixed Position
    3003: 'Any', // SEA TL655 Any

    // TL658

    3006: 'Lucky Pick 3', // SEA TL658 Lucky Pick 3
    3008: 'Lucky Pick 12', // SEA TL658 Lucky Pick 12
    3011: 'Straight', // SEA TL658 Straight
    3014: 'Rambolito', // SEA TL658 Any
    3018: 'Straight', // SEA TL658 Straight
    3021: 'Rambolito', // SEA TL658 Any
    3025: 'Position', // SEA TL658 Fixed Position
    3032: 'Any', // SEA TL658 Any

    // TL2D37

    3040: 'EXACT 1D', // SEA TL2D37 定位胆
    3043: 'Any One', // SEA TL2D37 任选
    3046: 'EXACT', // SEA TL2D37 二星直选
    3048: 'ANY', // SEA TL2D37 二星组选
    3051: 'BSOE', // SEA TL2D37 大小单双

    // 三級選單

    // TL2D

    2737: 'EXACT 1D 1st', // SEA TL2D 第一球
    2738: 'EXACT 1D 2nd', // SEA TL2D 第二球
    2740: 'Any One', // SEA TL2D 任选一
    2743: 'EXACT 2D', // SEA TL2D 二星直选
    2745: 'ANY 2D', // SEA TL2D 二星组选
    2748: 'BSOE 1st', // SEA TL2D 第一球
    2749: 'BSOE 2nd', // SEA TL2D 第二球

    // TL3D

    2686: 'EXACT Last 2D', // SEA TL3D 上正二位数
    2688: 'ANY Last 2D', // SEA TL3D 上反二位数
    2691: 'EXACT 3D', // SEA TL3D 上正三位数
    2693: 'ANY 3D', // SEA TL3D 上反三位数
    2696: 'ANY 1 of last 2D', // SEA TL3D 上跑两位数
    2752: 'BSOE 1st', // SEA TL3D 第一球
    2753: 'BSOE 2nd', // SEA TL3D 第二球
    2754: 'BSOE 3rd', // SEA TL3D 第三球
    2777: 'EXACT 1D 1st', // SEA TL3D 第一位
    2778: 'EXACT 1D 2nd', // SEA TL3D 第二位
    2779: 'EXACT 1D 3rd', // SEA TL3D 第三位
    2863: 'Rambolito3', // SEA TL3D 三星組3
    2864: 'Rambolito6', // SEA TL3D 三星組6

    // TL4D

    2699: 'EXACT Last 2D', // SEA TL4D 上正二位数
    2701: 'ANY Last 2D', // SEA TL4D 上反二位数
    2704: 'EXACT Last 3D', // SEA TL4D 上正三位数
    2706: 'ANY Last 3D', // SEA TL4D 上反三位数
    2709: 'EXACT 4D', // SEA TL4D 上正四位数
    2711: 'ANY 4D', // SEA TL4D 上反四位数
    2714: 'ANY 1 of last 2D', // SEA TL4D 上跑两位数
    2757: 'BSOE 1st', // SEA TL4D 第一球
    2758: 'BSOE 2nd', // SEA TL4D 第二球
    2759: 'BSOE 3rd', // SEA TL4D 第三球
    2760: 'BSOE 4th', // SEA TL4D 第四球
    2781: 'EXACT 1D 1st', // SEA TL4D 第一位
    2782: 'EXACT 1D 2nd', // SEA TL4D 第二位
    2783: 'EXACT 1D 3rd', // SEA TL4D 第三位
    2784: 'EXACT 1D 4th', // SEA TL4D 第四位
    2865: 'Rambolito3 Last 3D', // SEA TL4D 三星組3
    2866: 'Rambolito6 Last 3D', // SEA TL4D 三星組6
    2869: 'PERM4 4D', // SEA TL4D 四星組選4
    2870: 'PERM6 4D', // SEA TL4D 四星組選6
    2871: 'PERM12 4D', // SEA TL4D 四星組選12
    2872: 'PERM24 4D', // SEA TL4D 四星組選24

    // TL6D

    2717: 'EXACT Last 2D', // SEA TL6D 上正二位数
    2719: 'ANY Last 2D', // SEA TL6D 上反二位数
    2722: 'EXACT Last 3D', // SEA TL6D 上正三位数
    2724: 'ANY Last 3D', // SEA TL6D 上反三位数
    2727: 'EXACT Last 4D', // SEA TL6D 上正四位数
    2729: 'ANY Last 4D', // SEA TL6D 上反四位数
    2732: 'ANY 1 of last 2D', // SEA TL6D 上跑两位数
    2763: 'BSOE 1st', // SEA TL6D 第一球
    2764: 'BSOE 2nd', // SEA TL6D 第二球
    2765: 'BSOE 3rd', // SEA TL6D 第三球
    2766: 'BSOE 4th', // SEA TL6D 第四球
    2767: 'BSOE 5th', // SEA TL6D 第五球
    2768: 'BSOE 6th', // SEA TL6D 第六球
    2786: 'EXACT 1D 1st', // SEA TL6D 第一位
    2787: 'EXACT 1D 2nd', // SEA TL6D 第二位
    2788: 'EXACT 1D 3rd', // SEA TL6D 第三位
    2789: 'EXACT 1D 4th', // SEA TL6D 第四位
    2790: 'EXACT 1D 5th', // SEA TL6D 第五位
    2791: 'EXACT 1D 6th', // SEA TL6D 第六位
    2867: 'Rambolito3 Last 3D', // SEA TL6D 三星組3
    2868: 'Rambolito6 Last 3D', // SEA TL6D 三星組6
    2873: 'PERM4 Last 4D', // SEA TL6D 四星組選4
    2874: 'PERM6 Last 4D', // SEA TL6D 四星組選6
    2875: 'PERM12 Last 4D', // SEA TL6D 四星組選12
    2876: 'PERM24 Last 4D', // SEA TL6D 四星組選24

    // TL642

    2896: 'First 3 Straight', // SEA TL642 Lucky Pick 3
    2897: 'Last 3 Straight', // SEA TL642 Lucky Pick 12
    2899: 'First 3 Rambolito', // SEA TL642 First 3 Straight
    2900: 'Last 3 Rambolito', // SEA TL642 Last 3 Straight
    2903: 'First 2 Straight', // SEA TL642 First 3 Any
    2904: 'Last 2 Straight', // SEA TL642 Last 3 Any
    2906: 'First 2 Rambolito', // SEA TL642 First 2 Straight
    2907: 'Last 2 Rambolito', // SEA TL642 Last 2 Straight
    2910: 'Position 1st', // SEA TL642 First 2 Any
    2911: 'Position 2nd', // SEA TL642 Last 2 Any
    2912: 'Position 3rd', // SEA TL642 1st
    2913: 'Position 4th', // SEA TL642 2nd
    2914: 'Position 5th', // SEA TL642 3rd
    2915: 'Position 6th', // SEA TL642 4th
    2917: 'Any', // SEA TL642 5th
    3036: 'Lucky Pick 3', // SEA TL642 6th
    3038: 'Lucky Pick 12', // SEA TL642 Any

    // TL645

    2920: 'Lucky Pick 3', // SEA TL645 Lucky Pick 3
    2922: 'Lucky Pick 12', // SEA TL645 Lucky Pick 12
    2925: 'First 3 Straight', // SEA TL645 First 3 Straight
    2926: 'Last 3 Straight', // SEA TL645 Last 3 Straight
    2928: 'First 3 Rambolito', // SEA TL645 First 3 Any
    2929: 'Last 3 Rambolito', // SEA TL645 Last 3 Any
    2932: 'First 2 Straight', // SEA TL645 First 2 Straight
    2933: 'Last 2 Straight', // SEA TL645 Last 2 Straight
    2935: 'First 2 Rambolito', // SEA TL645 First 2 Any
    2936: 'Last 2 Rambolito', // SEA TL645 Last 2 Any
    2939: 'Position 1st', // SEA TL645 1st
    2940: 'Position 2nd', // SEA TL645 2nd
    2941: 'Position 3rd', // SEA TL645 3rd
    2942: 'Position 4th', // SEA TL645 4th
    2943: 'Position 5th', // SEA TL645 5th
    2944: 'Position 6th', // SEA TL645 6th
    2946: 'Any', // SEA TL645 Any

    // TL649

    2949: 'Lucky Pick 3', // SEA TL649 Lucky Pick 3
    2951: 'Lucky Pick 12', // SEA TL649 Lucky Pick 12
    2954: 'First 3 Straight', // SEA TL649 First 3 Straight
    2955: 'Last 3 Straight', // SEA TL649 Last 3 Straight
    2957: 'First 3 Rambolito', // SEA TL649 First 3 Any
    2958: 'Last 3 Rambolito', // SEA TL649 Last 3 Any
    2961: 'First 2 Straight', // SEA TL649 First 2 Straight
    2962: 'Last 2 Straight', // SEA TL649 Last 2 Straight
    2964: 'First 2 Rambolito', // SEA TL649 First 2 Any
    2965: 'Last 2 Rambolito', // SEA TL649 Last 2 Any
    2968: 'Position 1st', // SEA TL649 1st
    2969: 'Position 2nd', // SEA TL649 2nd
    2970: 'Position 3rd', // SEA TL649 3rd
    2971: 'Position 4th', // SEA TL649 4th
    2972: 'Position 5th', // SEA TL649 5th
    2973: 'Position 6th', // SEA TL649 6th
    2975: 'Any', // SEA TL649 Any

    // TL655

    2978: 'Lucky Pick 3', // SEA TL655 Lucky Pick 3
    2980: 'Lucky Pick 12', // SEA TL655 Lucky Pick 12
    2983: 'First 3 Straight', // SEA TL655 First 3 Straight
    2984: 'Last 3 Straight', // SEA TL655 Last 3 Straight
    2986: 'First 3 Rambolito', // SEA TL655 First 3 Any
    2987: 'Last 3 Rambolito', // SEA TL655 Last 3 Any
    2990: 'First 2 Straight', // SEA TL655 First 2 Straight
    2991: 'Last 2 Straight', // SEA TL655 Last 2 Straight
    2993: 'First 2 Rambolito', // SEA TL655 First 2 Any
    2994: 'Last 2 Rambolito', // SEA TL655 Last 2 Any
    2997: 'Position 1st', // SEA TL655 1st
    2998: 'Position 2nd', // SEA TL655 2nd
    2999: 'Position 3rd', // SEA TL655 3rd
    3000: 'Position 4th', // SEA TL655 4th
    3001: 'Position 5th', // SEA TL655 5th
    3002: 'Position 6th', // SEA TL655 6th
    3004: 'Any', // SEA TL655 Any

    // TL658

    3007: 'Lucky Pick 3', // SEA TL658 Lucky Pick 3
    3009: 'Lucky Pick 12', // SEA TL658 Lucky Pick 12
    3012: 'First 3 Straight', // SEA TL658 First 3 Straight
    3013: 'Last 3 Straight', // SEA TL658 Last 3 Straight
    3015: 'First 3 Rambolito', // SEA TL658 First 3 Any
    3016: 'Last 3 Rambolito', // SEA TL658 Last 3 Any
    3019: 'First 2 Straight', // SEA TL658 First 2 Straight
    3020: 'Last 2 Straight', // SEA TL658 Last 2 Straight
    3022: 'First 2 Rambolito', // SEA TL658 First 2 Any
    3023: 'Last 2 Rambolito', // SEA TL658 Last 2 Any
    3026: 'Position 1st', // SEA TL658 1st
    3027: 'Position 2nd', // SEA TL658 2nd
    3028: 'Position 3rd', // SEA TL658 3rd
    3029: 'Position 4th', // SEA TL658 4th
    3030: 'Position 5th', // SEA TL658 5th
    3031: 'Position 6th', // SEA TL658 6th
    3033: 'Any', // SEA TL658 Any

    // TL2D37

    3041: 'EXACT 1D 1st', // SEA TL2D37 第一球
    3042: 'EXACT 1D 2nd', // SEA TL2D37 第二球
    3044: 'Any One', // SEA TL2D37 任选一
    3047: 'EXACT 2D', // SEA TL2D37 二星直选
    3049: 'ANY 2D', // SEA TL2D37 二星组选
    3052: 'BSOE 1st', // SEA TL2D37 第一球
    3053: 'BSOE 2nd', // SEA TL2D37 第二球

    // Thai

    // 一級選單

    2060: '2D', // 二数
    2055: '3D', // 三数
    2067: '1D', // 跑数

    2297: 'FishPrawnCrab', // 魚蝦蟹
    2497: 'FanTan', // 番摊

    // 二級選單

    2056: 'EXACT', // 上正
    2058: 'ANY', // 上反
    2061: 'EXACT', // 上正
    2063: 'ANY', // 上反
    2643: 'Second Prize', // 二等
    2644: 'Second Special', // 二特
    2065: 'Bonus digit', // 直选加开
    2068: 'Random Back 3 Digits', // 后三不定位

    2298: 'FishPrawnCrab', // 魚蝦蟹

    2498: 'Fan',
    2500: 'Kwok',
    2502: 'Nim',
    2504: 'BSOE',

    // 三級選單

    2062: 'EXACT 2D-1st', // 上正二位数
    2064: 'ANY 2D-1st', // 上反二位数
    2066: 'EXACT 2D-Special ', // 下正二位数
    2480: 'Norm EXACT 2D-Special ',
    2481: 'Manual Enter EXACT 2D-Special ',
    2482: 'Norm ANY 2D-1st',
    2483: 'Norm EXACT 2D-1st',
    2484: 'Manual Enter  EXACT 2D-1st',

    2057: 'EXACT 3D-1st', // 上正三位数
    2059: 'ANY 3D-1st', // 上反三位数
    2645: 'EXACT 3D-2nd', // 二等三位数
    2646: 'EXACT 3D-2nd Special', // 二特三位数
    2069: 'ANY 1D-1st', // 上跑三位数
    2485: 'Norm EXACT 3D-1st',
    2486: 'Manual Enter EXACT 3D-1st',
    2487: 'Norm ANY 3D-1st',

    2299: 'FishPrawnCrab', // 魚蝦蟹

    2499: 'Fan',
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
    2608: 'Parlay', // 中南部 串组 - 一級選單

    2300: 'FishPrawnCrab', // 魚蝦蟹
    2488: 'FanTan', // 番摊

    2618: 'Sic Bo Fast3', // 骰寶快三

    2624: 'Ranking', // 极速PK10 - 第1-10名排名
    2627: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值
    2630: 'Dragon&Tiger', // 极速PK10 - 龙虎斗

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

    2625: 'Ranking', // 极速PK10 - 第1-10名排名-二級選單
    2626: '1-10 BSOE', // 极速PK10 - 第1-10名-大小单双
    2628: 'Sum of 1st & 2nd', // 极速PK10 - 冠亚和值-二級選單
    2629: 'BSOE1&2 of Sum', // 极速PK10 - 冠亚和值-大小单双
    2631: 'Dragon&Tiger', // 极速PK10 - 龙虎斗-二級選單

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

    2641: 'Last 2D 1K of AnyResult', // 北部 后二包胆 1K
    2642: 'Last 2D 1K of AnyResult', // 中南部 后二包胆 1K

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

    263700: 'Position', // VNC 4D 一数 Fixed_Place_4D_VNC

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
    2637: 'Position (Ones)', // VNC 4D 一数 (個位) Fixed_Place_4D_Unit_VNC
    2638: 'Position (Tens)', // VNC 4D 一数 (十位) Fixed_Place_4D_Ten_VNC
    2639: 'Position (Hundreds)', // VNC 4D 一数 (百位) Fixed_Place_4D_hundred_VNC
    2640: 'Position (Thousands)', // VNC 4D 一数 (千位) Fixed_Place_4D_Thousand_VNC

    2863: 'Rambolito3', // 三星組3
    2864: 'Rambolito6', // 三星組6
    2865: 'Rambolito3 Last 3D', // 三星組3
    2866: 'Rambolito6 Last 3D', // 三星組6
    2867: 'Rambolito3 Last 3D', // 三星組3
    2868: 'Rambolito6 Last 3D', // 三星組6
    // LAO 老挝彩

    // 一級選單

    2127: '4D', // 四数
    2132: '3D', // 三数
    2137: '2D', // 二数
    2142: '1D', // 跑数

    2303: 'FishPrawnCrab', // 魚蝦蟹

    2506: 'FanTan', // 番摊

    // 二級選單

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
    2143: 'Random', // 跑數二級選單
    2145: 'Random', // 跑數二級選單

    2304: 'FishPrawnCrab', // 魚蝦蟹

    2507: 'Fan',
    2509: 'Kwok',
    2511: 'Nim',
    2513: 'BSOE',

    2632: 'Position', // SEA 4D 一数 Fixed_Place_4D

    // 三級選單

    // 一數為特例(不算三級又像三級選單)
    2633: 'Position (Ones)', // SEA 4D 一数 (個位) Fixed_Place_4D_Unit
    2634: 'Position (Tens)', // SEA 4D 一数 (十位) Fixed_Place_4D_Ten
    2635: 'Position (Hundreds)', // SEA 4D 一数 (百位) Fixed_Place_4D_hundred
    2636: 'Position (Thousands)', // SEA 4D 一数 (千位) Fixed_Place_4D_Thousand

    2288: 'Norm EXACT 2D-last', // Last_2_Straight_LAO_Multi
    2289: 'Manual Enter EXACT 2D-last', // Last_2_Straight_LAO_Single
    2290: 'Norm EXACT 2D-first', // First_2_Straight_LAO_Multi
    2291: 'Manual Enter EXACT 2D-first', // First_2_Straight_LAO_Single
    2292: 'Norm ANY 3D', // Last_3_Combine_LAO_Multi
    2293: 'Norm EXACT 3D', // Last_3_Straight_LAO_Multi
    2294: 'Manual Enter EXACT 3D', // Last_3_Straight_LAO_Single
    2295: 'Norm EXACT 4D', // Last_4_Straight_LAO_Multi
    2296: 'Manual Enter EXACT 4D', // Last_4_Straight_LAO_Single
    2144: 'ANY 1D-last', // 上跑两位数 Last_2_Any_LAO
    2146: 'ANY 1D-first', // 下跑两位数 First_2_Any_LAO

    2305: 'FishPrawnCrab', // 魚蝦蟹

    2508: 'Fan',
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

    // BCR
    2889: 'Baccarat',
    2890: 'Banker & Player & Tie',
    2891: 'Banker Pair',
    2892: 'Player Pair',
    2893: 'Super Six',

    // PCSO play group
    2858: 'Straight',
    2860: 'Rambolito',
    2852: 'Straight',
    2854: 'Rambolito3',
    2856: 'Rambolito6',
    2844: 'Standard',
    2846: 'PERM',
    2848: 'ROLL1',
    2850: 'ROLL4',
    2842: 'Standard',
    2792: 'Standard',
    2794: 'System',
    2802: 'Standard',
    2804: 'System',
    2812: 'Standard',
    2814: 'System',
    2822: 'Standard',
    2824: 'System',
    2832: 'Standard',
    2834: 'System',

    // PCSO play menu
    2859: 'Straight',
    2861: 'Rambolito',
    2853: 'Straight',
    2855: 'Rambolito3',
    2857: 'Rambolito6',
    2845: 'Standard',
    2847: 'PERM',
    2849: 'ROLL1',
    2851: 'ROLL4',
    2843: 'Standard',
    2793: 'Standard',
    2795: '5-Roll',
    2796: 'SYS7',
    2797: 'SYS8',
    2798: 'SYS9',
    2799: 'SYS10',
    2800: 'SYS11',
    2801: 'SYS12',
    2803: 'Standard',
    2805: '5-Roll',
    2806: 'SYS7',
    2807: 'SYS8',
    2808: 'SYS9',
    2809: 'SYS10',
    2810: 'SYS11',
    2811: 'SYS12',
    2813: 'Standard',
    2815: '5-Roll',
    2816: 'SYS7',
    2817: 'SYS8',
    2818: 'SYS9',
    2819: 'SYS10',
    2820: 'SYS11',
    2821: 'SYS12',
    2823: 'Standard',
    2825: '5-Roll',
    2826: 'SYS7',
    2827: 'SYS8',
    2828: 'SYS9',
    2829: 'SYS10',
    2830: 'SYS11',
    2831: 'SYS12',
    2833: 'Standard',
    2835: '5-Roll',
    2836: 'SYS7',
    2837: 'SYS8',
    2838: 'SYS9',
    2839: 'SYS10',
    2840: 'SYS11',
    2841: 'SYS12',

    // Wingo-Level:1

    3060: 'Run numbers', // SEA Wingo 跑数

    // Wingo-Level:2

    3061: 'Guess the size', // SEA Wingo 大小
    3063: 'Guess the number', // SEA Wingo 数字
    3065: 'Guess the color', // SEA Wingo 顔色

    // Wingo-Level:3

    3062: 'Guess the size', // SEA Wingo 大小
    3064: 'Guess the number', // SEA Wingo 猜数字
    3066: 'Guess the color', // SEA Wingo 猜顔色

    // 5D-Level:1

    3069: 'Integration', // SEA 5D 整合
    3077: 'Run numbers', // SEA 5D 跑數

    // 5D-Level:2

    3070: 'Big/Small,Odd/Even', // SEA 5D 大小单双
    3078: 'Number Selection', // SEA 5D 直选

    // 5D-Level:3

    3071: 'SUM', // SEA 5D 和值
    3072: 'A', // SEA 5D 第一球
    3073: 'B', // SEA 5D 第二球
    3074: 'C', // SEA 5D 第三球
    3075: 'D', // SEA 5D 第四球
    3076: 'E', // SEA 5D 第五球
    3079: 'A', // SEA 5D 第一球
    3080: 'B', // SEA 5D 第二球
    3081: 'C', // SEA 5D 第三球
    3082: 'D', // SEA 5D 第四球
    3083: 'E', // SEA 5D 第五球
  },
};

export default PlayMenu;
