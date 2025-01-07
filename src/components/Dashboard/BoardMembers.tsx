import { FC } from 'react';
import { Link } from 'react-router-dom';
import './BoardMembers.css';

interface Director {
  id: string;
  nftImageUrl: string;
  ethAddress: string;
  totalDelegation: number;
  delegatorCount: number;
}

interface BoardMembersProps {
  directors: Director[];
}

const BoardMembers: FC<BoardMembersProps> = ({ directors }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num);
  };

  if (directors.length === 0) {
    return (
      <div className="no-directors">
        No directors found
      </div>
    );
  }

  return (
    <div className="board-members">
      <div className="members-grid">
        {directors.map((director) => (
          <Link 
            to={`/director/${director.id}`} 
            className="member-row" 
            key={director.id}
          >
            <div className="member-nft">
              <img 
                src={director.nftImageUrl} 
                alt={`Director ${director.id}`}
                className="nft-image"
              />
            </div>
            <div className="member-info">
              <div className="info-row">
                <div className="info-label">ID</div>
                <div className="info-value">{director.id}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Total Delegation</div>
                <div className="info-value">{formatNumber(director.totalDelegation)} LORE</div>
              </div>
              <div className="info-row">
                <div className="info-label">Delegators</div>
                <div className="info-value">{formatNumber(director.delegatorCount)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers; 