import React from 'react';

/**
 * Button component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Button = ({ children, style, disabled, ...rest }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '8px 12px',
      color: 'white',
      backgroundColor: '#6665',
      cursor: disabled ? 'initial' : 'pointer',
      filter: `brightness(${disabled ? 0.4 : 1}`,
      alignItems: 'center',
      ...style,
    }}
    {...rest}>
    {children}
  </div>
);

export default Button;
