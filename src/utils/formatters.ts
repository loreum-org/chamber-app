export const formatCompactCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  });

  // Format the number
  let formatted = formatter.format(value);

  // Replace 'T' with 'K' for thousands if needed
  formatted = formatted.replace('T', 'K');

  return formatted;
};

export const formatPercentage = (value: number): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}; 