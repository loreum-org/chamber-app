import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import DashboardLayout from './Dashboard/DashboardLayout';
import ExchangeLayout from './Exchange/ExchangeLayout';
import GovernanceLayout from './Governance/GovernanceLayout';
import TransactionsLayout from './Transactions/TransactionsLayout';
import DirectorProfileLayout from './Directors/DirectorProfileLayout';
import { DirectorProfile } from '../types/director';
import './MainLayout.css';

// Mock data for testing
const mockDirector: DirectorProfile = {
  tokenId: "1234",
  boardPosition: 1,
  trustScore: 85,
  metrics: {
    transactionSuccess: 90,
    delegationStability: 85,
    governanceParticipation: 80,
    valueManagement: 88,
    communityTrust: 82,
    proposalQuality: 86
  },
  activities: [
    {
      id: "1",
      type: "transaction",
      description: "Proposed transaction #123",
      timestamp: "2024-01-06T12:00:00Z",
      status: "completed"
    },
    {
      id: "2",
      type: "delegation",
      description: "Received delegation from 0x123...",
      timestamp: "2024-01-06T11:30:00Z",
      status: "completed"
    }
  ] as const
};

const MainLayout: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="main-layout">
      <button className="menu-toggle" onClick={toggleNav}>
        {isNavOpen ? '×' : '☰'}
      </button>
      <aside className={`navigation-container ${isNavOpen ? 'open' : ''}`}>
        <Navigation isOpen={isNavOpen} />
      </aside>
      <main className={`main-layout-content ${isNavOpen ? 'nav-open' : ''}`}>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="/exchange" element={<ExchangeLayout />} />
          <Route path="/governance" element={<GovernanceLayout />} />
          <Route path="/transactions" element={<TransactionsLayout />} />
          <Route path="/director/:id" element={<DirectorProfileLayout director={mockDirector} />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainLayout; 