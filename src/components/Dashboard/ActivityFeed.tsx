import { FC } from 'react';

interface Activity {
  id: string;
  type: 'submit' | 'approve' | 'execute' | 'receive' | 'delegation';
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
}

interface ActivityFeedProps {
  activities?: Activity[];
}

const ActivityFeed: FC<ActivityFeedProps> = ({ activities = [] }) => {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'submit': return '📝';
      case 'approve': return '✅';
      case 'execute': return '🔄';
      case 'receive': return '📥';
      case 'delegation': return '👥';
      default: return '•';
    }
  };

  return (
    <div className="activity-feed">
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className={`activity-item ${activity.status}`}>
            <div className="activity-header">
              <span className="activity-icon">{getActivityIcon(activity.type)}</span>
              <span className="activity-type">{activity.type}</span>
              <span className="activity-status">{activity.status}</span>
            </div>
            <p className="activity-description">{activity.description}</p>
            <span className="activity-timestamp">
              {formatTimestamp(activity.timestamp)}
            </span>
          </div>
        ))}
        {activities.length === 0 && (
          <div className="no-activity">
            No recent activity
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed; 