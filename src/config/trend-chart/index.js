import trendChartConfigSSC from './trend_chart_config_ssc';
import trendChartConfigST from './trend_chart_config_st';
import trendChartConfigPK10 from './trend_chart_config_pk10';
import trendChartConfigP3P5 from './trend_chart_config_p3p5';
import trendChartConfig11X5 from './trend_chart_config_11x5';
import trendChartConfig4D from './trend_chart_config_4d';
import trendChartConfig3D from './trend_chart_config_3d';
import trendChartConfigLHC from './trend_chart_config_lhc';
import trendChartConfigPCB28 from './trend_chart_config_pcb28';

export const trendChartConfig = {
  ...trendChartConfigSSC,
  ...trendChartConfigST,
  ...trendChartConfigPK10,
  ...trendChartConfigP3P5,
  ...trendChartConfig11X5,
  ...trendChartConfig4D,
  ...trendChartConfig3D,
  ...trendChartConfigLHC,
  ...trendChartConfigPCB28,
};
