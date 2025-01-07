import { FC } from 'react';
import './GovernanceLayout.css';

interface GovernanceLayoutProps {
  isLoading?: boolean;
}

const GovernanceLayout: FC<GovernanceLayoutProps> = ({ isLoading = false }) => {
  if (isLoading) {
    return <div className="governance">Loading...</div>;
  }

  return (
    <div className="governance">
      {/* Board Management */}
      <section className="governance-section board-management">
        <h2 className="section-title">Board Management</h2>
        <div className="management-grid">
          <div className="delegation-interface">
            <h3>Delegation</h3>
            {/* Delegation interface will go here */}
          </div>
          <div className="seat-updates">
            <h3>Seat Updates</h3>
            {/* Seat updates will go here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernanceLayout; 