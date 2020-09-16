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
    2497: 'FanTan', //番摊
    2498: 'Fan',
    2499: 'Fan',
    2500: 'Kwok',
    2501: 'Kwok',
    2502: 'Nim',
    2503: 'Nim',
    2504: 'BesarKecilGanjilLLGenap',
    2505: 'BesarKecilGanjilLLGenap',

    // vnc 越南彩
    2090: 'Empat digit',
    2095: 'Tiga digit',
    2100: 'Dua digit',
    2105: 'Satu digit',

    2091: 'TEPAT', // 上正
    2093: 'ANY', // 上反
    2096: 'TEPAT', // 上正
    2098: 'ANY', // 上反
    2101: 'TEPAT', // 上正
    2103: 'TEPAT', // 下正

    2092: 'Empat digit berurutan - 1st', // Last_4_Straight_1st_VNC
    2094: 'Empat digit tanpa urutan - 1st', // Last_4_Combine_1st_VNC
    2097: 'Tiga digit berurutan - 1st', // Last_3_Straight_1st_VNC
    2099: 'Tiga digit tanpa urutan - 1st', // Last_3_Combine_1st_VNC开奖号码
    2102: 'Dua digit berurutan - 1st', // Last_2_Straight_1st_VNC
    2104: 'Tiga digit tanpa urutan - 2nd', // Last_2_Straight_2nd_VNC
    2107: 'Satu digit tanpa urutan - 1st', // Last_2_Any_1st_VNC
    2109: 'Satu digit tanpa urutan - 2nd', // Last_2_Any_2nd_VNC

    2286: 'Norma Empat digit berurutan - 1st', // Last_4_Straight_1st_VNC_Multi
    2287: 'Manual Empat digit berurutan - 1st', // Last_4_Straight_1st_VNC_Single
    2285: 'Manual  Tiga digit berurutan - 1st', // Last_3_Straight_1st_VNC_Single
    2284: 'Norma Tiga digit berurutan - 1st', // Last_3_Straight_1st_VNC_Multi
    2283: 'Norma Tiga digit tanpa urutan - 1st', // Last_3_Combine_1st_VNC_Multi
    2280: 'Manual Dua digit berurutan - 1st', // Last_2_Straight_1st_VNC_Single
    2279: 'Norm EXACT 2D-1st', // Last_2_Straight_1st_VNC_Multi
    2282: 'Manual Tiga digit tanpa urutan - 2nd', // Last_2_Straight_2nd_VNC_Single
    2281: 'Norma Tiga digit tanpa urutan - 2nd', // Last_2_Straight_2nd_VNC_Multi

    2300: 'FishPrawnCrab', // 魚蝦蟹
    2301: 'FishPrawnCrab', // 魚蝦蟹
    2302: 'FishPrawnCrab', // 魚蝦蟹
    2488: 'FanTan', //番摊
    2489: 'Fan',
    2490: 'Fan',
    2491: 'Kwok',
    2492: 'Kwok',
    2493: 'Nim',
    2494: 'Nim',
    2495: 'BesarKecilGanjilLLGenap',
    2496: 'BesarKecilGanjilLLGenap',

    // 北部
    2515: 'AnyRoll', // 包膽
    2516: 'Last 2D of AnyResult', // 后二包胆
    2517: 'Last 2D of AnyResult', // 后二包胆
    2518: 'Norm Last 2D of AnyResult', // 后二包胆(复式)
    2519: 'Manual Last 2D of AnyResult', // 后二包胆(单式)
    2520: 'Last 3D of AnyResult', // 后三包胆
    2521: 'Last 3D of AnyResult', // 后三包胆
    2522: 'Norm Last 3D of AnyResult', // 后三包胆（复式）
    2523: 'Manual Last 3D of AnyResult', // 后三包胆（单式）
    2524: 'Last 4D of AnyResult', // 后四包胆
    2525: 'Last 4D of AnyResult', // 后四包胆
    2526: 'Norm Last 4D of AnyResult', // 后四包胆（复式）
    2527: 'Manual Last 4D of AnyResult', // 后四包胆（单式）
    2550: 'KegagalanParlay', // 北部 逆向 - 一級選單
    2551: 'KegagalanParlay 4',  // 北部 - 四不中 - 二級選單
    2554: 'KegagalanParlay 8',  // 北部 - 八不中 - 二級選單
    2557: 'KegagalanParlay 10',  // 北部 - 十不中 - 二級選單
    2552: 'KegagalanParlay 4',  // 北部 - 四不中 - 三級選單
    2553: 'Manual Kegagalan Parlay 4', //北部 - 四不中(单式) - 三級選單
    2555: 'KegagalanParlay 8', // 北部 - 八不中 - 三級選單
    2556: 'Manual Kegagalan Parlay 8', // 北部 - 八不中(单式) - 三級選單
    2558: 'KegagalanParlay 10', // 北部 - 十不中 - 三級選單
    2559: 'Manual Kegagalan Parlay 10', // 北部 - 十不中(单式) - 三級選單
    // 中南部
    2528: 'AnyRoll', // 包膽
    2529: 'Last 2D of AnyResult', // 后二包胆
    2530: 'Last 2D of AnyResult', // 后二包胆
    2531: 'Norm Last 2D of AnyResult', // 后二包胆(复式)
    2532: 'Manual Last 2D of AnyResult', // 后二包胆(单式)
    2533: 'Last 3D of AnyResult', // 后三包胆
    2534: 'Last 3D of AnyResult', // 后三包胆
    2535: 'Norm Last 3D of AnyResult', // 后三包胆（复式）
    2536: 'Manual Last 3D of AnyResult', // 后三包胆（单式）
    2537: 'Last 4D of AnyResult', // 后四包胆
    2538: 'Last 4D of AnyResult', // 后四包胆
    2539: 'Norm Last 4D of AnyResult', // 后四包胆（复式）
    2540: 'Manual Last 4D of AnyResult', // 后四包胆（单式）
    2560: 'KegagalanParlay', // 南部 逆向 - 一級選單
    2561: 'KegagalanParlay 4 ',  // 南部 - 四不中 - 二級選單
    2564: 'KegagalanParlay 8',  // 南部 - 八不中 - 二級選單
    2567: 'KegagalanParlay 10',  // 南部 - 十不中 - 二級選單
    2562: 'KegagalanParlay 4', // 南部 - 四不中 - 三級選單
    2563: 'Manual Kegagalan Parlay 4', // 南部 - 四不中(单式) - 三級選單
    2565: 'KegagalanParlay 8', // 南部 - 八不中 - 三級選單
    2566: 'Manual Kegagalan Parlay 8', // 南部 - 八不中(单式) - 三級選單
    2568: 'KegagalanParlay 8', // 南部 - 十不中 - 三級選單
    2569: 'Manual Kegagalan Parlay 10', // 南部 - 十不中(单式) - 三級選單

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
    2506: 'FanTan', //番摊
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
