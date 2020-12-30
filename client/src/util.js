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
