import { FC } from 'react';
import { DirectorProfile } from '../../types/director';

interface TrustMetricsProps {
  trustScore?: number;
  metrics?: DirectorProfile['metrics'];
}

const TrustMetrics: FC<TrustMetricsProps> = ({ trustScore = 0, metrics }) => {
  const metricsList = [
    { label: 'Transaction Success', value: metrics?.transactionSuccess ?? 0, weight: '25%' },
    { label: 'Delegation Stability', value: metrics?.delegationStability ?? 0, weight: '20%' },
    { label: 'Governance Participation', value: metrics?.governanceParticipation ?? 0, weight: '15%' },
    { label: 'Value Management', value: metrics?.valueManagement ?? 0, weight: '15%' },
    { label: 'Community Trust', value: metrics?.communityTrust ?? 0, weight: '15%' },
    { label: 'Proposal Quality', value: metrics?.proposalQuality ?? 0, weight: '10%' }
  ];

  return (
    <div className="trust-metrics">
      {/* Trust Score Section */}
      <div className="trust-score">
        <h2>Trust Score</h2>
        <div className="score-value">{trustScore}%</div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metricsList.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.label}</h3>
            <div className="metric-value">{metric.value}%</div>
            <div className="metric-weight">Weight: {metric.weight}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustMetrics;
