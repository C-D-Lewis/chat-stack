import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ConnectionInfo from './components/ConnectionInfo';
import { connect } from './services/websocketService';

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  const [isConnected, setIsConnected] = useState(false);

  // Upon load, connect to WebSocket server
  useEffect(() => {
    connect(setIsConnected);
  }, []);

  return (
    <div>
      <ConnectionInfo isConnected={isConnected} />
    </div>
  );
};

ReactDOM.render(<Application />, document.getElementById('app'));
