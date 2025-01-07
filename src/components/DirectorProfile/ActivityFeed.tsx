import { FC } from 'react';
import { Activity } from '../../types/director';

interface ActivityFeedProps {
  activities?: Activity[];
}

const ActivityFeed: FC<ActivityFeedProps> = ({ activities = [] }) => {
  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'completed':
        return 'status-success';
      case 'pending':
        return 'status-pending';
      case 'failed':
        return 'status-failed';
      default:
        return '';
    }
  };

  return (
    <div className="activity-feed">
      <h2>Recent Activity</h2>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className={`activity-item ${getStatusColor(activity.status)}`}>
            <div className="activity-header">
              <span className="activity-type">{activity.type}</span>
              <span className="activity-status">{activity.status}</span>
            </div>
            <p className="activity-description">{activity.description}</p>
            <span className="activity-timestamp">{activity.timestamp}</span>
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
