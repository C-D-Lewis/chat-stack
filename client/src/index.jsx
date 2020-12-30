import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import ConnectionInfo from './components/ConnectionInfo';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import UserNameInput from './components/UserNameInput';
import { connect, sendMessage } from './services/websocketService';
import { getRandomColor } from './util';

/** Max width */
const MAX_WIDTH = 800;

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  const [connectedState, setConnectedState] = useState(false);
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [color, setColor] = useState(getRandomColor());

  /**
   * Send a message to the server.
   */
  const sendDraft = () => sendMessage(userName, draft, color);

  /**
   * When a message from the server is received, add it to the chat list.
   * 
   * @param {object} json - JSON data received
   */
  const onMessage = (json) => {
    // New message
    if (json.messages) {
      setMessages(state => [...state, ...json.messages]);
    }

    // New participant
    // TODO: Message type for events
  };

  // Upon load, connect to WebSocket server
  useEffect(() => {
    connect(setConnectedState, onMessage);
  }, []);

  // When the draft is updated, send it and clear
  useEffect(() => {
    if (draft.length < 1) return;

    sendDraft();
    setDraft('');
  }, [draft]);

  const showUserNameInput = connectedState === true && userName.length < 3;
  const showMessages = connectedState === true && !showUserNameInput;

  return (
    <Column style={{
      backgroundColor: '#111',
      height: '100%',
    }}>
      <ConnectionInfo connectedState={connectedState} />
      <Column
        style={{
          height: '100%',
          justifyContent: 'flex-end',
          maxWidth: MAX_WIDTH,
          margin: 'auto',
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
