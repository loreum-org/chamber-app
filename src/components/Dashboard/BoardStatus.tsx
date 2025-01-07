import { FC } from 'react';
import './BoardStatus.css';

interface BoardStatusProps {
  className?: string;
}

const BoardStatus: FC<BoardStatusProps> = ({ className }) => {
  return (
    <div className={`board-status ${className || ''}`}>
      <div className="status-header">
        <div className="status-item">
          <div className="status-label">Total Seats</div>
          <div className="status-value">7</div>
        </div>
        <div className="status-item">
          <div className="status-label">Filled Seats</div>
          <div className="status-value">3</div>
        </div>
        <div className="status-item">
          <div className="status-label">Quorum</div>
          <div className="status-value">4</div>
        </div>
      </div>
    </div>
  );
};

export default BoardStatus; 