import trendChartConfigSSC from './trend_chart_config_ssc';
import trendChartConfigST from './trend_chart_config_st';
import trendChartConfigPK10 from './trend_chart_config_pk10';
import trendChartConfigP3P5 from './trend_chart_config_p3p5';
import trendChartConfig11X5 from './trend_chart_config_11x5';
import trendChartConfig4d from './trend_chart_config_4d';

export const trendChartConfig = {
  ...trendChartConfigSSC,
  ...trendChartConfigST,
  ...trendChartConfigPK10,
  ...trendChartConfigP3P5,
  ...trendChartConfig11X5,
  ...trendChartConfig4d,
};
