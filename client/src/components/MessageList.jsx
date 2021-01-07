import React from 'react';
import Column from './Column';
import { formatDate } from '../util';
import Row from './Row';

/**
 * Message component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Message = ({ message }) => (
  <Column
    style={{ padding: '5px 0px' }}>
      <Row>
      <div
        style={{
          color: 'lightgray',
          backgroundColor: '#222',
          padding: '3px 10px',
          fontSize: '0.9rem',
          paddingLeft: 5,
        }}>
        {message.from}
      </div>
      <Column
        style={{
          color: 'darkgray',
          backgroundColor: '#111',
          padding: '3px 10px',
          fontSize: '0.7rem',
          justifyContent: 'center',
          width: 'initial',
        }}>
        {formatDate(message.timestamp)}
      </Column>
    </Row>
    <div
      style={{
        color: 'white',
        backgroundColor: message.backgroundColor,
        padding: 10,
      }}>
      {message.content}
    </div>
  </Column>
);

/**
 * MessageList component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const MessageList = ({ messages }) => (
  <Column style={{
    paddingBottom: 20,
    overflowY: 'scroll',
    height: '100%',
  }}>
    {messages.map((p) => <Message message={p} />)}
  </Column>
);

export default MessageList;
