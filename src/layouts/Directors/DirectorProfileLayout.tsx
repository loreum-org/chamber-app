import { FC } from 'react';
import NFTDisplay from '../../components/DirectorProfile/NFTDisplay';
import TrustMetrics from '../../components/DirectorProfile/TrustMetrics';
import ActivityFeed from '../../components/DirectorProfile/ActivityFeed';
import { DirectorProfile } from '../../types/director';
import './DirectorProfileLayout.css';

interface DirectorProfileLayoutProps {
  director?: DirectorProfile;
  isLoading?: boolean;
}

const DirectorProfileLayout: FC<DirectorProfileLayoutProps> = ({ 
  director,
  isLoading = false 
}) => {
  if (isLoading) {
    return <div className="director-profile">Loading...</div>;
  }

  return (
    <div className="director-profile">
      {/* Header Section */}
      <header className="director-profile-header">
        <h1>Director Profile</h1>
      </header>

      {/* Main Content Grid */}
      <main className="director-profile-content">
        {/* Left Column - NFT Display and Trust Metrics */}
        <div className="director-profile-column left-column">
          <NFTDisplay 
            tokenId={director?.tokenId} 
            boardPosition={director?.boardPosition} 
          />
          <TrustMetrics 
            trustScore={director?.trustScore}
            metrics={director?.metrics}
          />
        </div>

        {/* Right Column - Activity Feed */}
        <div className="director-profile-column">
          <ActivityFeed activities={director?.activities} />
        </div>
      </main>
    </div>
  );
};

export default DirectorProfileLayout;
