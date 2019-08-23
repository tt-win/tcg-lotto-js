import { PlayMenu } from 'configs/play-menu';

const SSCPlayRuleConfig = {
  Straight_SSC_ENT: [
    PlayMenu.Combine_First_Straight_ENT,
    PlayMenu.Combine_Second_Straight_ENT,
    PlayMenu.Combine_Third_Straight_ENT,
    PlayMenu.Combine_Fourth_Straight_ENT,
    PlayMenu.Combine_Fifth_Straight_ENT,
    PlayMenu.First_Straight_ENT,
    PlayMenu.Second_Straight_ENT,
    PlayMenu.Third_Straight_ENT,
    PlayMenu.Fourth_Straight_ENT,
    PlayMenu.Fifth_Straight_ENT,
  ],
  BSOE_SSC_ENT: [
    PlayMenu.Combine_First_BSOE_ENT,
    PlayMenu.Combine_Second_BSOE_ENT,
    PlayMenu.Combine_Third_BSOE_ENT,
    PlayMenu.Combine_Fourth_BSOE_ENT,
    PlayMenu.Combine_Fifth_BSOE_ENT,

    PlayMenu.Two_Side_First_BSOE_ENT,
    PlayMenu.Two_Side_Second_BSOE_ENT,
    PlayMenu.Two_Side_Third_BSOE_ENT,
    PlayMenu.Two_Side_Fourth_BSOE_ENT,
    PlayMenu.Two_Side_Fifth_BSOE_ENT,

    PlayMenu.First_BSOE_ENT,
    PlayMenu.Second_BSOE_ENT,
    PlayMenu.Third_BSOE_ENT,
    PlayMenu.Fourth_BSOE_ENT,
    PlayMenu.Fifth_BSOE_ENT,
  ],
  Total_Sum_SSC_ENT: [
    PlayMenu.Combine_Total_Sum_ENT,
    PlayMenu.Two_Side_Total_Sum_BSOE_ENT,
    PlayMenu.First_Total_Sum_ENT,
    PlayMenu.Second_Total_Sum_ENT,
    PlayMenu.Third_Total_Sum_ENT,
    PlayMenu.Fourth_Total_Sum_ENT,
    PlayMenu.Fifth_Total_Sum_ENT,
  ],
  First3_SSC_ENT: [
    PlayMenu.Combine_First3_ENT,
    PlayMenu.First_First3_ENT,
    PlayMenu.Second_First3_ENT,
    PlayMenu.Third_First3_ENT,
    PlayMenu.Fourth_First3_ENT,
    PlayMenu.Fifth_First3_ENT,
  ],
  Middle3_SSC_ENT: [
    PlayMenu.Combine_Middle3_ENT,
    PlayMenu.First_Middle3_ENT,
    PlayMenu.Second_Middle3_ENT,
    PlayMenu.Third_Middle3_ENT,
    PlayMenu.Fourth_Middle3_ENT,
    PlayMenu.Fifth_Middle3_ENT,
  ],
  Last3_SSC_ENT: [
    PlayMenu.Combine_Last3_ENT,
    PlayMenu.First_Last3_ENT,
    PlayMenu.Second_Last3_ENT,
    PlayMenu.Fourth_Last3_ENT,
    PlayMenu.Third_Last3_ENT,
    PlayMenu.Fifth_Last3_ENT,
  ],
  Dragon_Tiger_Tie_SSC_ENT: [
    PlayMenu.Dragon_Tiger_Tie_5_4_ENT,
    PlayMenu.Dragon_Tiger_Tie_5_3_ENT,
    PlayMenu.Dragon_Tiger_Tie_5_2_ENT,
    PlayMenu.Dragon_Tiger_Tie_5_1_ENT,
    PlayMenu.Dragon_Tiger_Tie_4_3_ENT,
    PlayMenu.Dragon_Tiger_Tie_4_2_ENT,
    PlayMenu.Dragon_Tiger_Tie_4_1_ENT,
    PlayMenu.Dragon_Tiger_Tie_3_2_ENT,
    PlayMenu.Dragon_Tiger_Tie_3_1_ENT,
    PlayMenu.Dragon_Tiger_Tie_2_1_ENT,
  ],
  Five_Have_One_Straight_ENT: [
    PlayMenu.Five_Have_One_Straight_ENT,
  ],
  NN_SSC_ENT: [
    PlayMenu.NN_SSC_MAIN_ENT,
  ],
  NN_SSC_BSOE_ENT: [
    PlayMenu.NN_SSC_BSOE_ENT,
  ],
  HK5_SSC_ENT: [
    PlayMenu.HK5_SSC_ENT,
  ],
  Baccarat_SSC_ENT: [
    PlayMenu.Baccarat_With_Pair_SSC_ENT,
    PlayMenu.Baccarat_No_Pair_SSC_ENT,
  ],
};

const _11X5PlayRuleConfig = {
  Two_Side_11X5_ENT: [
    PlayMenu.Two_Side_11X5_ENT,
    PlayMenu.First_LV1_11X5_ENT,
    PlayMenu.Second_LV1_11X5_ENT,
    PlayMenu.Third_LV1_11X5_ENT,
    PlayMenu.Fourth_LV1_11X5_ENT,
    PlayMenu.Fifth_LV1_11X5_ENT,
  ],
  Total_Sum_Group_11X5_ENT: [
    PlayMenu.Two_Side_Total_Sum_Group_11X5_ENT,
  ],
  BSOE_11X5: [
    PlayMenu.Two_Side_First_BSOE_11X5_ENT,
    PlayMenu.Two_Side_Second_BSOE_11X5_ENT,
    PlayMenu.Two_Side_Third_BSOE_11X5_ENT,
    PlayMenu.Two_Side_Fourth_BSOE_11X5_ENT,
    PlayMenu.Two_Side_Fifth_BSOE_11X5_ENT,
    PlayMenu.First_BSOE_11X5_ENT,
    PlayMenu.Second_BSOE_11X5_ENT,
    PlayMenu.Third_BSOE_11X5_ENT,
    PlayMenu.Fourth_BSOE_11X5_ENT,
    PlayMenu.Fifth_BSOE_11X5_ENT,
  ],
  Fixed_Place_11X5_ENT: [
    PlayMenu.First_11X5_ENT,
    PlayMenu.Second_11X5_ENT,
    PlayMenu.Third_11X5_ENT,
    PlayMenu.Fourth_11X5_ENT,
    PlayMenu.Fifth_11X5_ENT,
  ],
  // 任選第一層
  Any_11X5_ENT: [
    PlayMenu.Any_11X5_ENT,
  ],
  // 任選第二層
  Any_Content_11X5_ENT: [
    PlayMenu.Any1_11X5_ENT,
    PlayMenu.Any2_11X5_ENT,
    PlayMenu.Any3_11X5_ENT,
    PlayMenu.Any4_11X5_ENT,
    PlayMenu.Any5_11X5_ENT,
    PlayMenu.Any6_11X5_ENT,
    PlayMenu.Any7_11X5_ENT,
    PlayMenu.Any8_11X5_ENT,

  ],
  // 組選第一層
  Com_11X5_ENT: [
    PlayMenu.Com_11X5_ENT,
  ],
  // 組選第二層
  Com_Content_11X5_ENT: [
    PlayMenu.First2_Com_11X5_ENT,
    PlayMenu.First3_Com_11X5_ENT,
  ],
  // 直選第一層
  Straight_11X5_ENT: [
    PlayMenu.Straight_11X5_ENT,
  ],
  // 直選第二層
  Straight_Content_11X5_ENT: [
    PlayMenu.First2_Straight_11X5_ENT,
    PlayMenu.First3_Straight_11X5_ENT,
  ],
  Dragon_Tiger_11X5_ENT: [
    PlayMenu.Dragon_Tiger_5_4_11X5_ENT,
    PlayMenu.Dragon_Tiger_5_3_11X5_ENT,
    PlayMenu.Dragon_Tiger_5_2_11X5_ENT,
    PlayMenu.Dragon_Tiger_5_1_11X5_ENT,
    PlayMenu.Dragon_Tiger_4_3_11X5_ENT,
    PlayMenu.Dragon_Tiger_4_2_11X5_ENT,
    PlayMenu.Dragon_Tiger_4_1_11X5_ENT,
    PlayMenu.Dragon_Tiger_3_2_11X5_ENT,
    PlayMenu.Dragon_Tiger_3_1_11X5_ENT,
    PlayMenu.Dragon_Tiger_2_1_11X5_ENT,
  ],
};

const LHCPlayRuleConfig = {
  Special_LHC: [
    PlayMenu.Special_LHC,
  ],
  Special_BSOE_LHC: [
    PlayMenu.SpecialB_BSOE_LHC,
    PlayMenu.Two_Sides_Special_BSOE_LHC,
    PlayMenu.Color_BSOE_LHC,
  ],
  Special_BS_OE_LHC: [
    PlayMenu.SpecialB_BS_OE_LHC,
    PlayMenu.Color_BS_OE_LHC,
  ],
  Special_TOSum_BSOE_LHC: [
    PlayMenu.SpecialB_TOSum_BSOE_LHC,
    PlayMenu.Two_Sides_Special_TOSum_BSOE_LHC,
  ],
  Special_Tail_BS_LHC: [
    PlayMenu.SpecialB_Tail_BS_LHC,
    PlayMenu.Two_Sides_Special_BS_LHC,
  ],
  Special_Total_Sum_BSOE_LHC: [
    PlayMenu.Two_Sides_Total_Sum_BSOE_LHC,
  ],
  Normal_LHC: [
    PlayMenu.Normal_LHC,
  ],
  Normal_Fixed_Place_LHC: [
    PlayMenu.Normal_Fixed_Place_LHC,
  ],
  Normal_FirstToSixth_LHC: [
    PlayMenu.Normal_FirstToSixth_LHC,
  ],
  Color_Straight_LHC: [
    PlayMenu.Color_Straight_LHC,
    PlayMenu.Color_BSOE_LHC,
    PlayMenu.Color_BS_OE_LHC,
  ],
  Color_BSOE_LHC: [
    PlayMenu.Color_BSOE_LHC,
  ],
  Color_BS_OE_LHC: [
    PlayMenu.Color_BS_OE_LHC,
  ],
  Special_Zodiac_Straight_LHC: [
    PlayMenu.SpecialB_Animal_LHC,
    PlayMenu.Two_Sides_Special_Animal_LHC,
    PlayMenu.Special_Zodiac_Straight_LHC,
  ],
  Head_Tail_Special_LHC: [
    PlayMenu.Head_Tail_Special_LHC,
  ],
  Normal_Special_One_Zodiac_LHC: [
    PlayMenu.Normal_Special_One_Zodiac_LHC,
  ],
  Normal_Special_Tail_No_LHC: [
    PlayMenu.Normal_Special_Tail_No_LHC,
  ],
  Join_Main_LHC: [
    PlayMenu.Join_Main_LHC,
  ],
  Join_Main_Content_LHC: [
    PlayMenu.Two_In_Normal_LHC,
    PlayMenu.Three_In_Normal_LHC,
    PlayMenu.Four_In_Normal_LHC,
    PlayMenu.Two_Of_Three_In_Normal_LHC,
    PlayMenu.Two_In_Normal_Or_Special_LHC,
    PlayMenu.In_Normal_And_Special_LHC,
  ],
  Special_Combine_Chinese_Zodiac_LHC: [
    PlayMenu.Special_Combine_Chinese_Zodiac_LHC,
  ],
  Not_Winning_Numbers_LHC: [
    PlayMenu.Not_Winning_Numbers_LHC,
  ],
  Not_Winning_Numbers_Content_LHC: [
    PlayMenu.Choose_Not_in_Winning_Numbers_LHC,
    PlayMenu['5_Not_in_Winning_Numbers_LHC'],
    PlayMenu['6_Not_in_Winning_Numbers_LHC'],
    PlayMenu['7_Not_in_Winning_Numbers_LHC'],
    PlayMenu['8_Not_in_Winning_Numbers_LHC'],
    PlayMenu['9_Not_in_Winning_Numbers_LHC'],
    PlayMenu['10_Not_in_Winning_Numbers_LHC'],
    PlayMenu['11_Not_in_Winning_Numbers_LHC'],
    PlayMenu['12_Not_in_Winning_Numbers_LHC'],
  ],
  Join_Zodiac_LHC: [
    PlayMenu.Join_Zodiac,
  ],
  Join_Zodiac_Content_LHC: [
    PlayMenu.Two_Join_Zodiac_LHC,
    PlayMenu.Three_Join_Zodiac_LHC,
    PlayMenu.Four_Join_Zodiac_LHC,
    PlayMenu.Five_Join_Zodiac_LHC,
  ],
};

const PK10PlayRuleConfig = {
  Two_Side_First2SumBSOE_PK10: [
    PlayMenu.Two_Side_First2SumBSOE_PK10,
  ],
  BSOE_PK10: [
    PlayMenu.Two_Side_FirstPlace_PK10,
    PlayMenu.Two_Side_SecondPlace_PK10,
    PlayMenu.Two_Side_ThirdPlace_PK10,
    PlayMenu.Two_Side_FourthPlace_PK10,
    PlayMenu.Two_Side_FifthPlace_PK10,
    PlayMenu.Two_Side_SixthPlace_PK10,
    PlayMenu.Two_Side_SeventhPlace_PK10,
    PlayMenu.Two_Side_EighthPlace_PK10,
    PlayMenu.Two_Side_NinthPlace_PK10,
    PlayMenu.Two_Side_TenthPlace_PK10,
  ],

  // playCode 重複改以playId辨識
  First2Sum_PK10: [1885],
  First3Sum_PK10: [1886],
  FirstLastSum_PK10: [1887],

  FixedPlace: [
    PlayMenu.FirstPlace_PK10,
    PlayMenu.SecondPlace_PK10,
    PlayMenu.ThirdPlace_PK10,
    PlayMenu.FourthPlace_PK10,
    PlayMenu.FifthPlace_PK10,
    PlayMenu.SixthPlace_PK10,
    PlayMenu.SeventhPlace_PK10,
    PlayMenu.EighthPlace_PK10,
    PlayMenu.NinthPlace_PK10,
  ],
  Dragon_Tiger_1_VS_10_PK10: [
    PlayMenu.Two_Side_FirstPlace_Dragon_PK10,
    PlayMenu.Dragon_Tiger_1_VS_10_PK10,
  ],
  Dragon_Tiger_2_VS_9_PK10: [
    PlayMenu.Two_Side_SecondPlace_Dragon_PK10,
    PlayMenu.Dragon_Tiger_2_VS_9_PK10,
  ],
  Dragon_Tiger_3_VS_8_PK10: [
    PlayMenu.Two_Side_ThirdPlace_Dragon_PK10,
    PlayMenu.Dragon_Tiger_3_VS_8_PK10,
  ],
  Dragon_Tiger_4_VS_7_PK10: [
    PlayMenu.Two_Side_FourthPlace_Dragon_PK10,
    PlayMenu.Dragon_Tiger_4_VS_7_PK10,
  ],
  Dragon_Tiger_5_VS_6_PK10: [
    PlayMenu.Two_Side_FifthPlace_Dragon_PK10,
    PlayMenu.Dragon_Tiger_5_VS_6_PK10,
  ],

};

const PCBPlayRuleConfig = {
  SpecialBSOE_PCB: [PlayMenu.SpecialBSOE_PCB],
  Special_BS_OE_PCB: [PlayMenu.Special_BS_OE_PCB],
  BOSE_WITH_TIE_PCB: [PlayMenu.BOSE_WITH_TIE_PCB],
  BS_OE_WITH_TIE_PCB: [PlayMenu.BS_OE_WITH_TIE_PCB],
  BOSE_ONLY_TIE_PCB: [PlayMenu.BOSE_ONLY_TIE_PCB],
  BS_OE_ONLY_TIE_PCB: [PlayMenu.BS_OE_ONLY_TIE_PCB],
  BOSE_ALL_KILL_PCB: [PlayMenu.BOSE_ALL_KILL_PCB],
  BS_OE_ALL_KILL_PCB: [PlayMenu.BS_OE_ALL_KILL_PCB],
  Special_Extremum_BS_PCB: [PlayMenu.Special_Extremum_BS_PCB],
  Color_PCB: [PlayMenu.Color_PCB],
  Boazi_PCB: [PlayMenu.Boazi_PCB],
  SpecialCom3_PCB: [PlayMenu.SpecialCom3_PCB],
};

const K3PlayRuleConfig = {
  Dragon_Tiger_1_VS_2_K3_Ent: [
    PlayMenu.Dragon_Tiger_1_VS_2_K3_Ent,
  ],
  Dragon_Tiger_1_VS_3_K3_Ent: [
    PlayMenu.Dragon_Tiger_1_VS_3_K3_Ent,
  ],
  Dragon_Tiger_2_VS_3_K3_Ent: [
    PlayMenu.Dragon_Tiger_2_VS_3_K3_Ent,
  ],
  Sum_K3: [
    PlayMenu.Sum_K3_ENT,
  ],
  Sum_BS_OE_K3_ENT: [
    PlayMenu.Sum_BS_OE_K3_ENT,
  ],
  SUM_COM_BS_OE_K3_ENT: [
    PlayMenu.SUM_COM_BS_OE_K3_ENT,
  ],
  Different_2_K3_ENT: [
    PlayMenu.Different_2_K3_ENT,
  ],
  Single_Same_K3_ENT: [
    PlayMenu.Single_Same_K3_ENT,
  ],
  Boazi_K3_ENT: [
    PlayMenu.Boazi_K3_ENT,
  ],
  Any_Boazi_K3_ENT: [
    PlayMenu.Any_Boazi_K3_ENT,
  ],
  Single_Same_2_K3_ENT: [
    PlayMenu.Single_Same_2_K3_ENT,
  ],
  Sum_BS_OE_Baozi_Kill_K3_ENT: [
    PlayMenu.Sum_BS_OE_Baozi_Kill_K3_ENT,
  ],
  Sum_Baozi_Kill_K3_ENT: [
    PlayMenu.Sum_Baozi_Kill_K3_ENT,
  ],
  Red_Black_Num_K3_Ent: [
    PlayMenu.Red_Black_Num_K3_Ent,
  ],
  Red_Num_Com_K3_Ent: [
    PlayMenu.Red_Num_Com_K3_Ent,
  ],
  Black_Num_Com_K3_Ent: [
    PlayMenu.Black_Num_Com_K3_Ent,
  ],
  Any_Code_Not_Win_K3_Ent: [
    PlayMenu.Any_Code_Not_Win_K3_Ent,
  ],
  Span_K3_Ent: [
    PlayMenu.Span_All_K3_Ent,
  ],  
};

const LF3DPlayRuleConfig = {
  Hundreds_Fixed_Place_LF: [
    PlayMenu.Hundreds_Fixed_Place_LF,
  ],
  Hundreds_BSOE_LF: [
    PlayMenu.Hundreds_BSOE_LF,
  ],
  Hundreds_Prime_And_Composite_LF: [
    PlayMenu.Hundreds_Prime_And_Composite_LF,
  ],
  Tens_Fixed_Place_LF: [
    PlayMenu.Tens_Fixed_Place_LF,
  ],
  Tens_BSOE_LF: [
    PlayMenu.Tens_BSOE_LF,
  ],
  Tens_Prime_And_Composite_LF: [
    PlayMenu.Tens_Prime_And_Composite_LF,
  ],
  Units_Fixed_Place_LF: [
    PlayMenu.Units_Fixed_Place_LF,
  ],
  Units_BSOE_LF: [
    PlayMenu.Units_BSOE_LF,
  ],
  Units_Prime_And_Composite_LF: [
    PlayMenu.Units_Prime_And_Composite_LF,
  ],
  // 一字組合
  One_Word_Combine_LF: [
    PlayMenu.One_Word_Combine_LF,
  ],
  // 二字定位
  Hundreds_Tens_Fixed_Place_LF: [
    PlayMenu.Hundreds_Tens_Fixed_Place_LF,
  ],
  Hundreds_Units_Fixed_Place_LF: [
    PlayMenu.Hundreds_Units_Fixed_Place_LF,
  ],
  Tens_Units_Fixed_Place_LF: [
    PlayMenu.Tens_Units_Fixed_Place_LF,
  ],
  // 二字組合
  Two_Word_Combine_LF: [
    PlayMenu.Two_Word_Combine_LF,
  ],
  // 二字和数
  Hundreds_Tens_Sum_LF: [
    PlayMenu.Hundreds_Tens_Sum_LF,
  ],
  Hundreds_Tens_Sum_Last_LF: [
    PlayMenu.Hundreds_Tens_Sum_Last_LF,
  ],
  Hundreds_Units_Sum_LF: [
    PlayMenu.Hundreds_Units_Sum_LF,
  ],
  Hundreds_Units_Sum_Last_LF: [
    PlayMenu.Hundreds_Units_Sum_Last_LF,
  ],
  Tens_Units_Sum_LF: [
    PlayMenu.Tens_Units_Sum_LF,
  ],
  Tens_Units_Sum_Last_LF: [
    PlayMenu.Tens_Units_Sum_Last_LF,
  ],
  // 三字定位 百十个定位
  Hundreds_Tens_Units_Fixed_Place_LF: [
    PlayMenu.Hundreds_Tens_Units_Fixed_Place_LF,
  ],
  // 三字组合
  Three_Word_Com_LF: [
    PlayMenu.Three_Word_Com_LF,
  ],
  // 三字和数
  Hundreds_Tens_Units_Sum_LF: [
    PlayMenu.Hundreds_Tens_Units_Sum_LF,
  ],
  Hundreds_Tens_Units_Sum_Tail_LF: [
    PlayMenu.Hundreds_Tens_Units_Sum_Tail_LF,
  ],
  // 组三组六
  Hundreds_Tens_Units_Com3_LF: [
    PlayMenu.Hundreds_Tens_Units_Com3_LF,
  ],
  Hundreds_Tens_Units_Com6_LF: [
    PlayMenu.Hundreds_Tens_Units_Com6_LF,
  ],
  // 跨度
  Hundreds_Tens_Units_Span_LF: [
    PlayMenu.Hundreds_Tens_Units_Span_LF,
  ],
  Hundreds_Tens_Span_LF: [
    PlayMenu.Hundreds_Tens_Span_LF,
  ],
  Hundreds_Units_Span_LF: [
    PlayMenu.Hundreds_Units_Span_LF,
  ],
  Tens_Units_Span_LF: [
    PlayMenu.Tens_Units_Span_LF,
  ],
};

export const playRuleConfig = {
  ...SSCPlayRuleConfig,
  ..._11X5PlayRuleConfig,
  ...LHCPlayRuleConfig,
  ...PK10PlayRuleConfig,
  ...PCBPlayRuleConfig,
  ...K3PlayRuleConfig,
  ...LF3DPlayRuleConfig,
};
export default playRuleConfig;
