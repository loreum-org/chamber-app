import { FC } from 'react';

interface NFTDisplayProps {
  tokenId?: string;
  boardPosition?: number;
}

const NFTDisplay: FC<NFTDisplayProps> = ({ tokenId, boardPosition }) => {
  return (
    <div className="nft-display">
      <div className="nft-image">
        {/* NFT Image placeholder */}
      </div>
      <div className="nft-info">
        <h2>Token ID #{tokenId}</h2>
        <p>Board Position #{boardPosition}</p>
      </div>
    </div>
  );
};

export default NFTDisplay;
