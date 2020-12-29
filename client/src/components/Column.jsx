import React from 'react';

/**
 * Column component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Column = ({ children, ...rest }) => (
  <div
  style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
    {...rest}>
    {children}
  </div>
);

export default Column;
