import { FC } from 'react';
import BoardStatus from './BoardStatus';
import Directors from './Directors';
import './BoardOverview.css';

// Sample data - replace with actual data from props
const sampleDirectors = [
  {
    id: "1",
    nftImageUrl: "https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/1",
    ethAddress: "0x1234567890123456789012345678901234567890",
    totalDelegation: 1250000,
    delegatorCount: 156
  },
  {
    id: "2",
    nftImageUrl: "https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/2",
    ethAddress: "0x2345678901234567890123456789012345678901",
    totalDelegation: 980000,
    delegatorCount: 89
  },
  {
    id: "3",
    nftImageUrl: "https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/3",
    ethAddress: "0x3456789012345678901234567890123456789012",
    totalDelegation: 750000,
    delegatorCount: 234
  },
  {
    id: "4",
    nftImageUrl: "https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/2",
    ethAddress: "0x2345678901234567890123456789012345678901",
    totalDelegation: 600000,
    delegatorCount: 9
  },
  {
    id: "5",
    nftImageUrl: "https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/3",
    ethAddress: "0x3456789012345678901234567890123456789012",
    totalDelegation: 50000,
    delegatorCount: 34
  }
];

interface BoardOverviewProps {
  data?: {
    directors: Array<{
      id: string;
      tokenId: string;
      position: number;
      status: 'active' | 'inactive';
    }>;
    quorum: number;
    size: number;
    seats: number;
  };
}

const BoardOverview: FC<BoardOverviewProps> = ({ data }) => {
  return (
    <div className="board-overview">
      <div className="board-section">
        <BoardStatus />
      </div>
      
      <div className="board-section">
        <h3 className="section-title">Current Board Members</h3>
        <Directors directors={sampleDirectors} />
      </div>
    </div>
  );
};

export default BoardOverview; 