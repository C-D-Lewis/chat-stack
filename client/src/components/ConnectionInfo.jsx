import React from 'react';

const { HOST, PORT } = window.config;

/**
 * ConnectionInfo component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const ConnectionInfo = ({ isConnected }) => {
  let backgroundColor = isConnected ? 'green' : 'black';
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: 35,
      color: 'white',
      backgroundColor,
      paddingLeft: 10,
    }}>
      <div>Connected to: {HOST}:{PORT}</div>
    </div>
  );
};

export default ConnectionInfo;
