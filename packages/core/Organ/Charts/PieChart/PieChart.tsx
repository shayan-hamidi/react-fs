import { PieChart, type PieChartProps } from '@mui/x-charts';

type FsPieChartProps = PieChartProps;

function FsPieChart({
  width = 350,
  height = 300,
  series = [
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ],
  ...rest
}: FsPieChartProps) {
  return <PieChart width={width} height={height} series={series} {...rest} />;
}

export default FsPieChart;
