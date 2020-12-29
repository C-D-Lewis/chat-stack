import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import ConnectionInfo from './components/ConnectionInfo';
import { connect } from './services/websocketService';

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  const [connectedState, setConnectedState] = useState(false);

  // Upon load, connect to WebSocket server
  useEffect(() => {
    connect(setConnectedState);
  }, []);

  return (
    <Column style={{
      backgroundColor: '#111',
      height: '100vh',
    }}>
      <ConnectionInfo connectedState={connectedState} />
    </Column>
  );
};

ReactDOM.render(<Application />, document.getElementById('app'));
