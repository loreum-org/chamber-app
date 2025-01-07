import { FC } from 'react';
import ChamberStats from '../../components/Dashboard/ChamberStats';
import BoardOverview from '../../components/Dashboard/BoardOverview';
import ActivityFeed from '../../components/Dashboard/ActivityFeed';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  isLoading?: boolean;
}

// Generate sample TVL history data for the last 30 days
const generateTVLHistory = () => {
  const history = [];
  const startValue = 1000000000; // Start at $1B
  const endValue = 1234567890; // End at $1.23B
  const now = new Date();
  const totalDays = 30;
  
  // Calculate daily growth rate for smooth progression
  const dailyGrowthRate = Math.pow(endValue / startValue, 1 / totalDays) - 1;

  // Generate base values first
  const baseValues = [];
  for (let i = totalDays; i >= 0; i--) {
    const baseValue = startValue * Math.pow(1 + dailyGrowthRate, totalDays - i);
    baseValues.push(baseValue);
  }

  // Add volatility while preserving the general trend
  for (let i = totalDays; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const baseValue = baseValues[totalDays - i];
    
    // Add larger random swings (±3%) with occasional bigger moves
    const volatilityBase = 0.03; // 3% base volatility
    const extraVolatility = Math.random() < 0.2 ? 0.02 : 0; // 20% chance of extra 2% swing
    const totalVolatility = volatilityBase + extraVolatility;
    const randomSwing = 1 + (Math.random() - 0.5) * 2 * totalVolatility;
    
    // Ensure we don't deviate too far from the trend by applying a correction
    const maxDeviation = 0.1; // Maximum 10% deviation from trend
    const previousValue = history.length > 0 ? history[history.length - 1].value : baseValue;
    const trendValue = baseValue;
    const deviation = (previousValue * randomSwing - trendValue) / trendValue;
    
    let value;
    if (Math.abs(deviation) > maxDeviation) {
      // Pull back towards trend if deviation is too large
      const correction = (Math.abs(deviation) - maxDeviation) * (deviation > 0 ? -1 : 1);
      value = Math.round(previousValue * (1 + correction));
    } else {
      value = Math.round(previousValue * randomSwing);
    }

    history.push({
      timestamp: date.toISOString(),
      value: value
    });
  }

  return history;
};

// Sample chamber data
const chamberData = {
  tvl: 1234567890, // $1.23B TVL
  apy: 12.5, // 12.5% APY
  sharePrice: 1234.56, // $1.2K per share
  tvlChange: 23.4, // 23.4% increase
  apyChange: -0.5, // 0.5% decrease
  priceChange: 1.2, // 1.2% increase
  tvlHistory: generateTVLHistory()
};

// Sample activity data
const sampleActivities = [
  {
    id: '1',
    type: 'submit' as const,
    description: 'Submitted transaction to transfer 1000 USDC to Treasury',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    status: 'completed' as const
  },
  {
    id: '2',
    type: 'approve' as const,
    description: 'Approved transaction #123 for Treasury withdrawal',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    status: 'completed' as const
  },
  {
    id: '3',
    type: 'execute' as const,
    description: 'Executed transaction #122 for asset rebalancing',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    status: 'completed' as const
  },
  {
    id: '4',
    type: 'receive' as const,
    description: 'Received 5000 USDC from external wallet',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    status: 'completed' as const
  },
  {
    id: '5',
    type: 'delegation' as const,
    description: 'Director #3 received delegation of 100k voting power',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
    status: 'completed' as const
  }
];

const DashboardLayout: FC<DashboardLayoutProps> = ({ isLoading = false }) => {
  if (isLoading) {
    return <div className="dashboard">Loading...</div>;
  }

  return (
    <div className="dashboard">
      {/* Chamber Overview */}
      <section className="dashboard-section chamber-overview">
        <h2 className="section-title">Chamber Overview</h2>
        <ChamberStats data={chamberData} />
      </section>

      {/* Board Status */}
      <section className="dashboard-section board-status">
        <h2 className="section-title">Board Status</h2>
        <BoardOverview />
      </section>

      {/* Recent Activity */}
      <section className="dashboard-section recent-activity">
        <h2 className="section-title">Recent Activity</h2>
        <ActivityFeed activities={sampleActivities} />
      </section>
    </div>
  );
};

export default DashboardLayout; 