import { FC } from 'react';
import './TransactionsLayout.css';

interface TransactionsLayoutProps {
  isLoading?: boolean;
}

const TransactionsLayout: FC<TransactionsLayoutProps> = ({ isLoading = false }) => {
  if (isLoading) {
    return <div className="transactions">Loading...</div>;
  }

  return (
    <div className="transactions">
      {/* Transaction Management */}
      <section className="transactions-section management">
        <h2 className="section-title">Transaction Management</h2>
        <div className="management-grid">
          <div className="transaction-queue">
            <div className="transaction-card">
              <h3>Queue & History</h3>
              {/* Transaction queue will go here */}
            </div>
          </div>
          <div className="submit-transaction">
            <div className="transaction-card">
              <h3>Submit Transaction</h3>
            </div>
            {/* Transaction form will go here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransactionsLayout; 