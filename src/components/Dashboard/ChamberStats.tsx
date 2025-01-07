import { FC } from 'react';
import StatCard from '../shared/StatCard';
import TVLChart from './TVLChart';
import { formatCompactCurrency, formatPercentage } from '../../utils/formatters';
import './TVLChart.css';

interface ChamberStatsProps {
  data?: {
    tvl: number;
    apy: number;
    sharePrice: number;
    tvlChange: number;
    apyChange: number;
    priceChange: number;
    totalAssets?: number;
    totalSupply?: number;
    assetsChange?: number;
    supplyChange?: number;
    tvlHistory?: Array<{
      timestamp: string;
      value: number;
    }>;
  };
}

const ChamberStats: FC<ChamberStatsProps> = ({ data }) => {
  return (
    <div className="chamber-stats">
      <div className="stats-cards">
        <StatCard
          title="Total Value Locked"
          value={formatCompactCurrency(data?.tvl ?? 0)}
          change={formatPercentage(data?.tvlChange ?? 0)}
          trend={data?.tvlChange ?? 0 >= 0 ? 'up' : 'down'}
        />
        <StatCard
          title="APY"
          value={formatPercentage(data?.apy ?? 0)}
          change={formatPercentage(data?.apyChange ?? 0)}
          trend={data?.apyChange ?? 0 >= 0 ? 'up' : 'down'}
        />
        <StatCard
          title="Share Price"
          value={formatCompactCurrency(data?.sharePrice ?? 0)}
          change={formatPercentage(data?.priceChange ?? 0)}
          trend={data?.priceChange ?? 0 >= 0 ? 'up' : 'down'}
        />
      </div>
      {data?.tvlHistory && <TVLChart data={data.tvlHistory} />}
    </div>
  );
};

export default ChamberStats; 