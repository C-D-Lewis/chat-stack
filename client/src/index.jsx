import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import ConnectionInfo from './components/ConnectionInfo';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import UserNameInput from './components/UserNameInput';
import { connect } from './services/websocketService';

const TEST_USERNAME = 'foobar';
const TEST_MESSAGES = [{
  from: 'Obi-Wan Kenobi',
  content: 'Hello there',
  timestamp: 1609322773795,
  backgroundColor: 'CornflowerBlue',
}, {
  from: 'General Grevious',
  content: 'General Kenobi! You are a bold one. But foolish! I have been trained in your Jedi arts by Count Dooku himself!',
  timestamp: 1609322821450,
  backgroundColor: 'DarkRed',
}];

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  const [connectedState, setConnectedState] = useState(false);
  const [userName, setUserName] = useState(TEST_USERNAME);
  const [messages, setMessages] = useState(TEST_MESSAGES);
  const [draft, setDraft] = useState('');

  const sendMessage = () => {
    // send(userName, draft);
  }

  // Upon load, connect to WebSocket server
  useEffect(() => {
    connect(setConnectedState);
  }, []);

  // When the draft is updated, send it and clear
  useEffect(() => {
    if (draft.length < 1) return;

    sendMessage();
    setDraft('');
  }, [draft]);

  const showUserNameInput = connectedState === true && userName.length < 3;
  const showMessages = connectedState === true && !showUserNameInput;

  return (
    <Column style={{
      backgroundColor: '#111',
      height: '100vh',
    }}>
      <ConnectionInfo connectedState={connectedState} />
      <Column
        style={{
          height: '100%',
          justifyContent: 'flex-end'
        }}>
        {showUserNameInput && (
          <UserNameInput setUserName={setUserName} />
        )}
        {showMessages && (
          <Column>
            <MessageList messages={messages} />
            <MessageInput setDraft={setDraft} />
          </Column>
        )}
      </Column>
    </Column>
  );
};

ReactDOM.render(<Application />, document.getElementById('app'));
