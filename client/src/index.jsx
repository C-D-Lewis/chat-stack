import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import ConnectionInfo from './components/ConnectionInfo';
import UserNameInput from './components/UserNameInput';
import { connect } from './services/websocketService';

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  const [connectedState, setConnectedState] = useState(false);
  const [userName, setUserName] = useState('');

  // Upon load, connect to WebSocket server
  useEffect(() => {
    connect(setConnectedState);
  }, []);

  const showUserNameInput = connectedState === true && userName.length < 3;

  return (
    <Column style={{
      backgroundColor: '#111',
      height: '100vh',
    }}>
      <ConnectionInfo connectedState={connectedState} />
      {showUserNameInput && (
        <Column
          style={{
            height: '100%',
            justifyContent: 'flex-end'
          }}>
          <UserNameInput setUserName={setUserName} />
        </Column>
      )}
    </Column>
  );
};

ReactDOM.render(<Application />, document.getElementById('app'));
