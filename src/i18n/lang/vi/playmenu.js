const PlayMenu = {
  playId: {
    // Thai
    2056: 'chọn ngay',
    2058: 'tổ chọn',
    2061: 'chọn ngay',
    2063: 'tổ chọn',
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
    2299: 'cược Bầu Cua', // 魚蝦蟹
    // vnc 越南彩
    2090: '4 số', // 四数
    2095: '3 số', // 三数
    2100: '2 số', // 二数
    2105: 'chạy số', // 跑数

    2092: 'trên ngay 4 chữ số', // 上正四位数 Last_4_Straight_1st_VNC
    2094: 'trên ngược 4 chữ số', // 上反四位数 Last_4_Combine_1st_VNC
    2097: 'trên ngay 3 chữ số', // 上正三位数 Last_3_Straight_1st_VNC
    2099: 'trên ngược 3 chữ số', // 上反三位数 Last_3_Combine_1st_VNC
    2102: 'trên ngay 2 chữ số', // 上正二位数 Last_2_Straight_1st_VNC
    2104: 'dưới ngay 2 chữ số', // 下正二位数 Last_2_Straight_2nd_VNC
    2107: 'trên chạy 2 chữ số', // 上跑两位数 Last_2_Any_1st_VNC
    2109: 'dưới chạy 2 chữ số', // 下跑两位数 Last_2_Any_2nd_VNC

    2286: 'Chọn Số Bốn chữ số chính xác', // Last_4_Straight_1st_VNC_Multi
    2287: 'Nhập Số Bốn chữ số chính xác', // Last_4_Straight_1st_VNC_Single
    2285: 'Nhập Số Ba chữ số đầu chính xác', // Last_3_Straight_1st_VNC_Single
    2284: 'Chọn Số Ba chữ số đầu chính xác', // Last_3_Straight_1st_VNC_Multi
    2283: 'Chọn Số Ba chữ số bất kỳ', // Last_3_Combine_1st_VNC_Multi
    2280: 'Nhập Số Nhập Số Hai chữ số chính xác', // Last_2_Straight_1st_VNC_Single
    2279: 'Chọn Số Hai chữ số chính xác', // Last_2_Straight_1st_VNC_Multi
    2282: 'Nhập Số Hai chữ số chính xác', // Last_2_Straight_2nd_VNC_Single
    2281: 'Chọn Số Hai chữ số chính xác', // Last_2_Straight_2nd_VNC_Multi

    2300: 'cược Bầu Cua', // 魚蝦蟹
    2301: 'cược Bầu Cua', // 魚蝦蟹
    2302: 'cược Bầu Cua', // 魚蝦蟹

    // LAO 老挝彩
    2127: '4 số', // 四数
    2132: '3 số', // 三数
    2137: '2 số', // 二数
    2142: 'chạy số', // 跑数

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
    2305: 'cược Bầu Cua', // 魚蝦蟹
  },
};

export default PlayMenu;
