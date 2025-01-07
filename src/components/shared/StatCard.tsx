import { FC } from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const StatCard: FC<StatCardProps> = ({ title, value, change, trend }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3 className="stat-title">{title}</h3>
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${trend}`}>
          <span className="change-value">{change}</span>
          <span className="change-icon">
            {trend === 'up' ? '↑' : '↓'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard; 