const PlayMenu = {
  playId: {
    // Thai
    2056: 'Chính Xác', // 上正
    2058: 'Bất Kỳ', // 上反
    2061: 'Chính Xác', // 上正
    2063: 'Bất Kỳ', // 上反
    2065: 'chọn ngay thêm mở',
    2068: 'sau 3 không định vị',
    2055: '3 số', // 三数
    2057: 'trên ngay 3 chữ số',
    2059: 'trên ngược 3 chữ số',
    2060: '2 số', // 二数
    2062: 'trên ngay 2 chữ số',
    2064: 'trên ngược 2 chữ số',
    2066: 'dưới ngay 2 chữ số',
    2067: 'chạy số', // 跑数
    2069: 'trên chạy 3 chữ số',
    2480: 'Chọn Số Hai chữ số chính xác - Giải Số Đặc Biệt',
    2481: 'Nhập Số Hai chữ số chính xác - Giải Số Đặc Biệt',
    2482: 'Chọn Số Hai chữ số bất kỳ',
    2483: 'Chọn Số Hai chữ số chính xác',
    2484: 'Nhập Số Hai chữ số chính xác',
    2485: 'Chọn Số Ba chữ số đầu chính xác',
    2486: 'Nhập Số Ba chữ số đầu chính xác',
    2487: 'Chọn Số Ba chữ số bất kỳ',

    2297: 'cược Bầu Cua', // 魚蝦蟹
    2298: 'cược Bầu Cua', // 魚蝦蟹
    2299: 'cược Bầu Cua', // 魚蝦蟹
    2497: 'FanTan', //番摊
    2498: 'Fan',
    2499: 'Fan',
    2500: 'Kwok',
    2501: 'Kwok',
    2502: 'Nim',
    2503: 'Nim',
    2504: 'TàiXỉuLẻChẵn',
    2505: 'TàiXỉuLẻChẵn',

    // vnc 越南彩
    2090: '4 số', // 四数
    2095: '3 số', // 三数
    2100: '2 số', // 二数
    2105: '1 số', // 跑数

    2091: 'Chính Xác', // 上正
    2093: 'Bất Kỳ', // 上反
    2096: 'Chính Xác', // 上正
    2098: 'Bất Kỳ', // 上反
    2101: 'Chính Xác', // 上正
    2103: 'Chính Xác', // 下正

    2092: '4 Số Đuôi', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'Đảo 4 Số Đuôi', // 上反四位数 Last_4_Combine_1st_VNC
    2097: '3 Số Đuôi', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'Đảo 3 Số Đuôi', // 上反三位数 Last_3_Combine_1st_VNC
    2102: '2 Đuôi Giải Đặc Biệt', // 上正二位数 Last_2_Straight_1st_VNC
    2104: '2 Đuôi Giải Nhất', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'Bao 2 Số Cuối Giải Đăc Biệt', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'Bao 2 Số Cuối Giải Nhất', // 下跑两位数 Last_2_Any_2nd_VNC

    2286: '4 Số Đuôi-Chọn Số', // Last_4_Straight_1st_VNC_Multi
    2287: '4 Số Đuôi-Nhập Số', // Last_4_Straight_1st_VNC_Single
    2285: '3 Số Đuôi-Nhập Số', // Last_3_Straight_1st_VNC_Single
    2284: '3 Số Đuôi-Chọn Số', // Last_3_Straight_1st_VNC_Multi
    2283: 'Đảo 3 Số Đuôi-Chọn Số', // Last_3_Combine_1st_VNC_Multi
    2280: '2 Đuôi Giải Đặc Biệt-Nhập Số', // Last_2_Straight_1st_VNC_Single
    2279: '2 Đuôi Giải Đặc Biệt-Chọn Số', // Last_2_Straight_1st_VNC_Multi
    2282: '2 Đuôi Giải Nhất-Nhập Số', // Last_2_Straight_2nd_VNC_Single
    2281: '2 Đuôi Giải Nhất-Chọn Số', // Last_2_Straight_2nd_VNC_Multi

    2300: 'cược Bầu Cua', // 魚蝦蟹
    2301: 'cược Bầu Cua', // 魚蝦蟹
    2302: 'cược Bầu Cua', // 魚蝦蟹
    2488: 'FanTan', //番摊
    2489: 'Fan',
    2490: 'Fan',
    2491: 'Kwok',
    2492: 'Kwok',
    2493: 'Nim',
    2494: 'Nim',
    2495: 'TàiXỉuLẻChẵn',
    2496: 'TàiXỉuLẻChẵn',

    // 北部
    2515: 'Bao Lô', // 包膽
    2517: 'Lô 2 Số', // 后二包胆
    2518: 'Lô 2 Chọn Số', // 后二包胆(复式)
    2519: 'Lô 2 Nhập Số', // 后二包胆(单式)
    2521: 'Lô 3 Số', // 后三包胆
    2522: 'Lô 3 Chọn Số', // 后三包胆（复式）
    2523: 'Lô 3 Nhập Số', // 后三包胆（单式）
    2525: 'Lô 4 Số', // 后四包胆
    2526: 'Lô 4 Chọn Số', // 后四包胆（复式）
    2527: 'Lô 4 Nhập Số', // 后四包胆（单式）
    2550: 'Lô Trượt', // 北部 逆向 - 一級選單
    2551: 'Trượt Xiên 4',  // 北部 - 四不中 - 二級選單
    2554: 'Trượt Xiên 8',  // 北部 - 八不中 - 二級選單
    2557: 'Trượt Xiên 10',  // 北部 - 十不中 - 二級選單
    2552: 'Xiên 4',  // 北部 - 四不中 - 三級選單
    2553: 'Xiên 4 Nhập Số', //北部 - 四不中(单式) - 三級選單
    2555: 'Xiên 8', // 北部 - 八不中 - 三級選單
    2556: 'Xiên 8 Nhập Số', // 北部 - 八不中(单式) - 三級選單
    2558: 'Xiên 10', // 北部 - 十不中 - 三級選單
    2559: 'Xiên 10 Nhập Số', // 北部 - 十不中(单式) - 三級選單
    // 中南部
    2528: 'Bao Lô', // 包膽
    2530: 'Lô 2 Số', // 后二包胆
    2531: 'Lô 2 Chọn Số', // 后二包胆(复式)
    2532: 'Lô 2 Nhập Số', // 后二包胆(单式)
    2534: 'Lô 3 Số', // 后三包胆
    2535: 'Lô 3 Chọn Số', // 后三包胆（复式）
    2536: 'Lô 3 Nhập Số', // 后三包胆（单式）
    2538: 'Lô 4 Số', // 后四包胆
    2539: 'Lô 4 Chọn Số', // 后四包胆（复式）
    2540: 'Lô 4 Nhập Số', // 后四包胆（单式）
    2560: 'Lô Trượt', // 南部 逆向 - 一級選單
    2561: 'Trượt Xiên 4',  // 南部 - 四不中 - 二級選單
    2564: 'Trượt Xiên 8',  // 南部 - 八不中 - 二級選單
    2567: 'Trượt Xiên 10',  // 南部 - 十不中 - 二級選單
    2562: 'Xiên 4',  // 南部 - 四不中 - 三級選單
    2563: 'Xiên 4 Nhập Số', //南部 - 四不中(单式) - 三級選單
    2565: 'Xiên 8', // 南部 - 八不中 - 三級選單
    2566: 'Xiên 8 Nhập Số', // 南部 - 八不中(单式) - 三級選單
    2568: 'Xiên 10', // 南部 - 十不中 - 三級選單
    2569: 'Xiên 10 Nhập Số', // 南部 - 十不中(单式) - 三級選單

    // LAO 老挝彩
    2127: '4 số', // 四数
    2132: '3 số', // 三数
    2137: '2 số', // 二数
    2142: 'chạy số', // 跑数

    2128: 'Chính Xác', // 上正
    2130: 'Bất Kỳ', // 上反
    2133: 'Chính Xác', // 上正
    2135: 'Bất Kỳ', // 上反
    2138: 'Chính Xác', // 上正
    2140: 'Chính Xác', // 下正

    2129: 'trên ngay 4 chữ số', // 上正四位数 Last_4_Straight_LAO
    2131: 'trên ngược 4 chữ số', // 上反四位数 Last_4_Combine_LAO
    2134: 'trên ngay 3 chữ số', // 上正三位数 Last_3_Straight_LAO
    2136: 'trên ngược 3 chữ số', // 上反三位数 Last_3_Combine_LAO
    2139: 'trên ngay 2 chữ số', // 上正二位数 Last_2_Straight_LAO
    2141: 'dưới ngay 2 chữ số', // 下正二位数 First_2_Straight_LAO
    2144: 'trên chạy 2 chữ số', // 上跑两位数 Last_2_Any_LAO
    2146: 'dưới chạy 2 chữ số', // 下跑两位数 First_2_Any_LAO

    2288: 'Chọn Số Hai chữ số chính xác', // Last_2_Straight_LAO_Multi
    2289: 'Nhập Số Hai chữ số chính xác', // Last_2_Straight_LAO_Single
    2290: 'Chọn Số Hai chữ số chính xác', // First_2_Straight_LAO_Multi
    2291: 'Nhập Số Hai chữ số chính xác', // First_2_Straight_LAO_Single
    2292: 'Chọn Số Ba chữ số bất kỳ', // Last_3_Combine_LAO_Multi
    2293: 'Chọn Số Ba chữ số đầu chính xác', // Last_3_Straight_LAO_Multi
    2294: 'Nhập Số Ba chữ số đầu chính xác', // Last_3_Straight_LAO_Single
    2295: 'Chọn Số Bốn chữ số chính xác', // Last_4_Straight_LAO_Multi
    2296: 'Nhập Số Bốn chữ số chính xác', // Last_4_Straight_LAO_Single

    2303: 'cược Bầu Cua', // 魚蝦蟹
    2304: 'cược Bầu Cua', // 魚蝦蟹
    2305: 'cược Bầu Cua', // 魚蝦蟹
    2506: 'FanTan', //番摊
    2507: 'Fan',
    2508: 'Fan',
    2509: 'Kwok',
    2510: 'Kwok',
    2511: 'Nim',
    2512: 'Nim',
    2513: 'TàiXỉuLẻChẵn',
    2514: 'TàiXỉuLẻChẵn',
  },
};

export default PlayMenu;
