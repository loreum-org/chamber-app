import { FC } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import './TVLChart.css';

interface DataPoint {
  timestamp: number;
  value: number;
}

interface TVLChartProps {
  data: DataPoint[];
}

const TVLChart: FC<TVLChartProps> = ({ data }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="tvl-chart-tooltip">
          <p className="tooltip-date">{formatDate(label)}</p>
          <p className="tooltip-value">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="tvl-chart">
      <div className="chart-header">
        {/* <h3 className="chart-title">Total Value Locked</h3> */}
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color" />
            <span>TVL</span>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 15, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2c3e50" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2c3e50" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eee"
            />
            <XAxis
              dataKey="timestamp"
              tickFormatter={formatDate}
              tick={{ fontSize: 12, fill: '#6c757d' }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12, fill: '#6c757d' }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2c3e50"
              strokeWidth={2}
              fill="url(#tvlGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TVLChart; 