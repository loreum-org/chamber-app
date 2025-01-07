import { FC } from 'react';
import './DexPools.css';

interface Pool {
  id: string;
  name: string;
  tvl: number;
  apy: number;
  volume24h: number;
}

interface DexPoolsProps {
  pools: Pool[];
}

const DexPools: FC<DexPoolsProps> = ({ pools }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="dex-pools">
      <div className="pool-grid">
        {pools.map((pool) => (
          <div key={pool.id} className="pool-card">
            <div className="pool-header">
              <span className="pool-name">{pool.name}</span>
            </div>
            <div className="pool-stats">
              <div className="stat-item">
                <span className="stat-label">TVL</span>
                <span className="stat-value">{formatCurrency(pool.tvl)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">APY</span>
                <span className="stat-value">{formatPercentage(pool.apy)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">24h Volume</span>
                <span className="stat-value">{formatCurrency(pool.volume24h)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DexPools; 