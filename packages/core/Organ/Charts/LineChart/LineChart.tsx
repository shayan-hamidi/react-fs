import { useState, useEffect } from 'react';
import { LineChart, type LineChartProps } from '@mui/x-charts';

type FsLineChartProps = LineChartProps;

function FsLineChart({
  width = 350,
  height = 300,
  xAxis = [{ data: [1, 2, 3, 5, 8, 10] }],
  series = [
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ],
  ...rest
}: FsLineChartProps) {
  const [chartData, setChartData] = useState({ xAxis, series });

  useEffect(() => {
    // render chart on onMount(because of mui bug)
    setChartData({ xAxis, series });
  }, [xAxis, series]);

  return (
    <LineChart
      width={width}
      height={height}
      xAxis={chartData.xAxis}
      series={chartData.series}
      {...rest}
    />
  );
}

export default FsLineChart;
