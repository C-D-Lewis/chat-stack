/** System's chat color  */
const SYSTEM_COLOR = '#444';

/**
 * Get a random value 0 - 255
 * 
 * @returns {number} Value to use.
 */
const getColorValue = () => Math.floor(Math.random() * 200);

/**
 * Get a random color string.
 * 
 * @returns {string} CSS color string.
 */
export const getRandomColor = () => `rgb(${getColorValue()},${getColorValue()},${getColorValue()})`;

/**
 * Format a timestamp to a friendly date string.
 * 
 * @param {number} timestamp - Timestamp to use.
 * @returns {string} Date in format '2020-12-30 16:41:43'
 */
export const formatDate = (timestamp) => {
  const [date, time] = new Date(timestamp).toISOString().split('T');
  const [shortTime] = time.split('.');
  return `${shortTime} (${date})`;
};

export const createSystemMessage = (content) => ({
  content,
  backgroundColor: SYSTEM_COLOR,
  from: 'System',
  timestamp: Date.now(),
});
