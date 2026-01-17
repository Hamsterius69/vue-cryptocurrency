/**
 * Format a number as a percentage with sign
 * @param {number} value - The value to format
 * @returns {string} Formatted percentage string
 */
export function formatPercent(value) {
  if (value == null) return '-';
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

/**
 * Format a large number in compact notation (K, M, B, T)
 * @param {number} value - The value to format
 * @param {string} symbol - Currency symbol (default: '$')
 * @returns {string} Formatted compact string
 */
export function formatCompact(value, symbol = '$') {
  if (value == null) return '-';
  if (value >= 1e12) return `${symbol}${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `${symbol}${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${symbol}${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `${symbol}${(value / 1e3).toFixed(2)}K`;
  return `${symbol}${value.toFixed(2)}`;
}

/**
 * Format a number with locale-specific separators
 * @param {number} value - The value to format
 * @returns {string} Formatted number string
 */
export function formatNumber(value) {
  if (value == null) return '-';
  return value.toLocaleString();
}

/**
 * Format a price value with appropriate decimal places
 * @param {number} value - The price value to format
 * @param {string} symbol - Currency symbol (default: '$')
 * @returns {string} Formatted price string
 */
export function formatPrice(value, symbol = '$') {
  if (value == null) return '-';
  if (value >= 1) {
    return `${symbol}${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${symbol}${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}`;
}

/**
 * Get risk color class based on score
 * @param {number} score - Risk score (0-100)
 * @returns {string} Vuetify color class
 */
export function getRiskColor(score) {
  if (score == null) return '';
  if (score <= 30) return 'green--text';
  if (score <= 60) return 'orange--text';
  return 'red--text';
}

/**
 * Extract explorer name from URL
 * @param {string} url - The explorer URL
 * @returns {string} Formatted explorer name
 */
export function getExplorerName(url) {
  try {
    const hostname = new URL(url).hostname.replace('www.', '');
    const name = hostname.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {
    return 'Explorer';
  }
}
