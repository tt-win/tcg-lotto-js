const PlayMenu = {
  playId: {
    // Thai
    2056: 'ការបោះដោយផ្ទាល់',
    2058: 'ការជ្រើសរើសក្រុម',
    2061: 'ការបោះដោយផ្ទាល់',
    2063: 'ការជ្រើសរើសក្រុម',
    2065: 'ការបោះឆ្នោតដោយផ្ទាល់',
    2068: 'បីចុងក្រោយមិនត្រូវបានដាក់',
    2055: '3D', // 三数
    2057: 'តួលេខបីខ្ទង់',
    2059: 'លេខបីខ្ទង់លើ',
    2060: '2D', // 二数
    2062: 'តួលេខពីខ្ទង់',
    2064: 'លេខពីរខ្ទង់លើ',
    2066: 'អវិជ្ជមានលេខពីរខ្ទង់',
    2067: '1D', // 跑数
    2069: 'រត់បីខ្ទង់',
    2480: 'Norm EXACT 2D-Special ',
    2481: 'Manual Enter EXACT 2D-Special ',
    2482: 'Norm ANY 2D-1st',
    2483: 'Norm EXACT 2D-1st',
    2484: 'Manual Enter  EXACT 2D-1st',
    2485: 'Norm EXACT 3D-1st',
    2486: 'Manual Enter EXACT 3D-1st',
    2487: 'Norm ANY 3D-1st',
    2297: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2298: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2299: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2497: 'ហ្វានតាន់', //番摊
    2498: 'Fan',
    2499: 'Fan',
    2500: 'Nim',
    2501: 'Nim',
    2502: 'Kwok',
    2503: 'Kwok',
    2504: 'ធំតូចសេសគូ',
    2505: 'ធំតូចសេសគូ',

    // vnc 越南彩
    2090: '4D', // 四数
    2095: '3D', // 三数
    2100: '2D', // 二数
    2105: '1D', // 跑数

    2092: 'តួលេខពបួនខ្ទង់', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'លេខបួនខ្ទង់លើ', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'តួលេខបីខ្ទង់', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'លេខបីខ្ទង់លើ', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'តួលេខពីរខ្ទង់', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'អវិជ្ជមានលេខពីរខ្ទង់', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'រត់ពីរខ្ទង់', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'រត់ពីរខ្ទង់ខាងក្រោម', // 下跑两位数 Last_2_Any_2nd_VNC

    2286: 'Norm EXACT 4D-1st', // Last_4_Straight_1st_VNC_Multi
    2287: 'Manual Enter EXACT 4D-1st', // Last_4_Straight_1st_VNC_Single
    2285: 'Manual Enter EXACT 3D-1st', // Last_3_Straight_1st_VNC_Single
    2284: 'Norm EXACT 3D-1st', // Last_3_Straight_1st_VNC_Multi
    2283: 'Norm ANY 3D-1st', // Last_3_Combine_1st_VNC_Multi
    2280: 'Manual Enter EXACT 2D-1st', // Last_2_Straight_1st_VNC_Single
    2279: 'Norm EXACT 2D-1st', // Last_2_Straight_1st_VNC_Multi
    2282: 'Manual Enter ANY 3D-2nd', // Last_2_Straight_2nd_VNC_Single
    2281: 'Norm ANY 3D-2nd', // Last_2_Straight_2nd_VNC_Multi

    2300: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2301: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2302: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2488: 'ហ្វានតាន់', //番摊
    2489: 'Fan',
    2490: 'Fan',
    2491: 'Nim',
    2492: 'Nim',
    2493: 'Kwok',
    2494: 'Kwok',
    2495: 'ធំតូចសេសគូ',
    2496: 'ធំតូចសេសគូ',

    // 北部
    2515: 'AnyRoll', // 包膽
    2517: 'Last 2D of AnyResult', // 后二包胆
    2518: 'Norm Last 2D of AnyResult', // 后二包胆(复式)
    2519: 'Manual Last 2D of AnyResult', // 后二包胆(单式)
    2521: 'Last 3D of AnyResult', // 后三包胆
    2522: 'Norm Last 3D of AnyResult', // 后三包胆（复式）
    2523: 'Manual Last 3D of AnyResult', // 后三包胆（单式）
    2525: 'Last 4D of AnyResult', // 后四包胆
    2526: 'Norm Last 4D of AnyResult', // 后四包胆（复式）
    2527: 'Manual Last 4D of AnyResult', // 后四包胆（单式）
    // 中南部
    2528: 'AnyRoll', // 包膽
    2530: 'Last 2D of AnyResult', // 后二包胆
    2531: 'Norm Last 2D of AnyResult', // 后二包胆(复式)
    2532: 'Manual Last 2D of AnyResult', // 后二包胆(单式)
    2534: 'Last 3D of AnyResult', // 后三包胆
    2535: 'Norm Last 3D of AnyResult', // 后三包胆（复式）
    2536: 'Manual Last 3D of AnyResult', // 后三包胆（单式）
    2538: 'Last 4D of AnyResult', // 后四包胆
    2539: 'Norm Last 4D of AnyResult', // 后四包胆（复式）
    2540: 'Manual Last 4D of AnyResult', // 后四包胆（单式）

    // LAO 老挝彩
    2127: '4D', // 四数
    2132: '3D', // 三数
    2137: '2D', // 二数
    2142: '1D', // 跑数

    2129: 'តួលេខពបួនខ្ទង់', // 上正四位数 Last_4_Straight_LAO
    2131: 'លេខបួនខ្ទង់លើ', // 上反四位数 Last_4_Combine_LAO
    2134: 'តួលេខបីខ្ទង់', // 上正三位数 Last_3_Straight_LAO
    2136: 'លេខបីខ្ទង់លើ', // 上反三位数 Last_3_Combine_LAO
    2139: 'តួលេខពីខ្ទង់', // 上正二位数 Last_2_Straight_LAO
    2141: 'លេខពីរខ្ទង់ក្រោម', // 下正二位数 First_2_Straight_LAO
    2144: 'រត់ពីរខ្ទង់ខាងលើ', // 上跑两位数 Last_2_Any_LAO
    2146: 'រត់ពីរខ្ទង់ខាងក្រោម', // 下跑两位数 First_2_Any_LAO

    2288: 'Norm EXACT 2D-last', // Last_2_Straight_LAO_Multi
    2289: 'Manual Enter EXACT 2D-last', // Last_2_Straight_LAO_Single
    2290: 'Norm EXACT 2D-first', // First_2_Straight_LAO_Multi
    2291: 'Manual Enter EXACT 2D-first', // First_2_Straight_LAO_Single
    2292: 'Norm ANY 3D', // Last_3_Combine_LAO_Multi
    2293: 'Norm EXACT 3D', // Last_3_Straight_LAO_Multi
    2294: 'Manual Enter EXACT 3D', // Last_3_Straight_LAO_Single
    2295: 'Norm EXACT 4D', // Last_4_Straight_LAO_Multi
    2296: 'Manual Enter EXACT 4D', // Last_4_Straight_LAO_Single

    2303: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2304: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2305: 'ត្រីនិងក្តាម', // 魚蝦蟹,
    2506: 'ហ្វានតាន់', //番摊
    2507: 'Fan',
    2508: 'Fan',
    2509: 'Nim',
    2510: 'Nim',
    2511: 'Kwok',
    2512: 'Kwok',
    2513: 'ធំតូចសេសគូ',
    2514: 'ធំតូចសេសគូ',
  },
};

export default PlayMenu;
