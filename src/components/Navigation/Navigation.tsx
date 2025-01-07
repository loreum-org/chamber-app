import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  isOpen: boolean;
}

interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/' },
  { id: 'exchange', label: 'Exchange', href: '/exchange' },
  { id: 'governance', label: 'Governance', href: '/governance' },
  { id: 'transactions', label: 'Transactions', href: '/transactions' }
];

const Navigation: FC<NavigationProps> = ({ isOpen }) => {
  const location = useLocation();

  if (!isOpen) {
    return null;
  }

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <div className="navigation-inner">
        {/* Logo Section */}
        <div className="navigation-header">
          <Link to="/" className="logo">Chamber</Link>
        </div>

        {/* Navigation Links */}
        <div className="navigation-links">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`navigation-item ${location.pathname === item.href ? 'active' : ''}`}
            >
              {item.icon && <span className="navigation-icon">{item.icon}</span>}
              <span className="navigation-label">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Footer Section */}
        <div className="navigation-footer">
          <div className="network-status">
            Network: Mainnet
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 