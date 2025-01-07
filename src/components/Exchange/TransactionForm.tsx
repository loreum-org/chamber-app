import { FC, useState } from 'react';
import './TransactionForm.css';

interface TransactionFormProps {
  type: 'deposit' | 'withdraw' | 'mint' | 'redeem';
  inputToken: {
    symbol: string;
    balance: number;
  };
  outputToken: {
    symbol: string;
    balance: number;
  };
}

const TransactionForm: FC<TransactionFormProps> = ({ type, inputToken, outputToken }) => {
  const [inputAmount, setInputAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('');

  const handleInputChange = (value: string) => {
    setInputAmount(value);
    // Mock conversion rate (1:1.2 for example)
    const numValue = parseFloat(value) || 0;
    setOutputAmount((numValue * 1.2).toString());
  };

  const renderInput = (
    label: string,
    value: string,
    onChange: (value: string) => void,
    balance: number,
    symbol: string
  ) => (
    <div className="input-container">
      <div className="input-header">
        <span className="input-label">{label}</span>
        <span className="balance-label">
          Balance: {balance.toLocaleString()} {symbol}
        </span>
      </div>
      <div className="input-field">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0.0"
          min="0"
        />
        <span className="token-symbol">{symbol}</span>
      </div>
    </div>
  );

  // For withdraw operations, we want to show the equity token (eqLORE) input first
  const isWithdraw = type === 'withdraw';
  const firstToken = isWithdraw ? outputToken : inputToken;
  const secondToken = isWithdraw ? inputToken : outputToken;
  const firstValue = isWithdraw ? outputAmount : inputAmount;
  const secondValue = isWithdraw ? inputAmount : outputAmount;
  const firstLabel = isWithdraw ? 'You will withdraw' : 'You will deposit';
  const secondLabel = isWithdraw ? 'You will receive' : 'You will receive';

  return (
    <div className="transaction-form">
      {renderInput(
        firstLabel,
        firstValue,
        handleInputChange,
        firstToken.balance,
        firstToken.symbol
      )}

      {renderInput(
        secondLabel,
        secondValue,
        () => {}, // Read-only for output
        secondToken.balance,
        secondToken.symbol
      )}

      <button className="submit-button">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    </div>
  );
};

export default TransactionForm; 