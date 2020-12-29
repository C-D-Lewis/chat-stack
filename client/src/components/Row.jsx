import React from 'react';

/**
 * Row component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Row = ({ children, style, ...rest }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      ...style,
    }}
    {...rest}>
    {children}
  </div>
);

export default Row;
