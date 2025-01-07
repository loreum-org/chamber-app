import { FC, useState } from 'react';
import DexPools from '../../components/Exchange/DexPools';
import Modal from '../../components/shared/Modal';
import TransactionForm from '../../components/Exchange/TransactionForm';
import './ExchangeLayout.css';

interface ExchangeLayoutProps {
  isLoading?: boolean;
}

type OperationType = 'deposit' | 'withdraw' | 'mint' | 'redeem' | null;

// Sample position data
const samplePosition = {
  underlying: {
    symbol: 'LORE',
    balance: 1250000,
    usdValue: 1250000
  },
  equity: {
    symbol: 'eqLORE',
    balance: 950000,
    usdValue: 1140000
  }
};

// Sample pool data
const samplePools = [
  {
    id: '1',
    name: 'USDC/ETH',
    token0: {
      symbol: 'USDC',
      amount: 5234567 // ~$5.2M USDC
    },
    token1: {
      symbol: 'ETH',
      amount: 2456.78 // ~$5.2M ETH at $2,100/ETH
    },
    tvl: 10469134, // ~$10.4M
    apy: 24.5,
    volume24h: 3456789 // ~$3.4M
  },
  {
    id: '2',
    name: 'USDC/WBTC',
    token0: {
      symbol: 'USDC',
      amount: 8765432 // ~$8.7M USDC
    },
    token1: {
      symbol: 'WBTC',
      amount: 187.65 // ~$8.7M WBTC at $47,000/BTC
    },
    tvl: 17530864, // ~$17.5M
    apy: 32.8,
    volume24h: 5678901 // ~$5.6M
  },
  {
    id: '3',
    name: 'ETH/WBTC',
    token0: {
      symbol: 'ETH',
      amount: 3456.78 // ~$7.2M ETH at $2,100/ETH
    },
    token1: {
      symbol: 'WBTC',
      amount: 154.32 // ~$7.2M WBTC at $47,000/BTC
    },
    tvl: 14523456, // ~$14.5M
    apy: 28.4,
    volume24h: 4321098 // ~$4.3M
  }
];

const ExchangeLayout: FC<ExchangeLayoutProps> = ({ isLoading = false }) => {
  const [activeOperation, setActiveOperation] = useState<OperationType>(null);

  if (isLoading) {
    return <div className="exchange">Loading...</div>;
  }

  const handleOperationClick = (operation: OperationType) => {
    setActiveOperation(operation);
  };

  const handleCloseModal = () => {
    setActiveOperation(null);
  };

  const getModalTitle = () => {
    switch (activeOperation) {
      case 'deposit':
        return 'Deposit LORE';
      case 'withdraw':
        return 'Withdraw LORE';
      case 'mint':
        return 'Mint eqLORE';
      case 'redeem':
        return 'Redeem eqLORE';
      default:
        return '';
    }
  };

  const getModalContent = () => {
    if (!activeOperation) return null;

    const inputToken = activeOperation === 'deposit' || activeOperation === 'withdraw'
      ? { symbol: 'LORE', balance: samplePosition.underlying.balance }
      : { symbol: 'eqLORE', balance: samplePosition.equity.balance };

    const outputToken = activeOperation === 'deposit' || activeOperation === 'withdraw'
      ? { symbol: 'eqLORE', balance: samplePosition.equity.balance }
      : { symbol: 'LORE', balance: samplePosition.underlying.balance };

    return (
      <TransactionForm
        type={activeOperation}
        inputToken={inputToken}
        outputToken={outputToken}
      />
    );
  };

  return (
    <div className="exchange">
      {/* Position Overview */}
      <section className="exchange-section position">
        <h2 className="section-title">Position Overview</h2>
        <div className="position-overview">
          <div className="balance-grid">
            <div className="balance-card">
              <div className="token-info">
                <span className="token-symbol">{samplePosition.underlying.symbol}</span>
                <span className="token-label">Underlying Asset</span>
              </div>
              <div className="balance-info">
                <span className="balance-amount">{samplePosition.underlying.balance.toLocaleString()}</span>
                <span className="balance-value">${samplePosition.underlying.usdValue.toLocaleString()}</span>
              </div>
            </div>
            <div className="balance-card">
              <div className="token-info">
                <span className="token-symbol">{samplePosition.equity.symbol}</span>
                <span className="token-label">Equity Token</span>
              </div>
              <div className="balance-info">
                <span className="balance-amount">{samplePosition.equity.balance.toLocaleString()}</span>
                <span className="balance-value">${samplePosition.equity.usdValue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Operations */}
      <section className="exchange-section operations">
        <h2 className="section-title">Vault Operations</h2>
        <div className="operations-buttons">
          <button className="operation-button" onClick={() => handleOperationClick('deposit')}>
            <span className="button-label">Deposit</span>
          </button>
          <button className="operation-button" onClick={() => handleOperationClick('withdraw')}>
            <span className="button-label">Withdraw</span>
          </button>
          <button className="operation-button" onClick={() => handleOperationClick('mint')}>
            <span className="button-label">Mint</span>
          </button>
          <button className="operation-button" onClick={() => handleOperationClick('redeem')}>
            <span className="button-label">Redeem</span>
          </button>
        </div>
      </section>

      {/* DEX Pools Section */}
      <section className="exchange-section pools">
        <h2 className="section-title">Liquidity Pools</h2>
        <DexPools pools={samplePools} />
      </section>

      {/* Transaction Modal */}
      <Modal
        isOpen={activeOperation !== null}
        onClose={handleCloseModal}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>
    </div>
  );
};

export default ExchangeLayout; 