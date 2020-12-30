import React, { useState, useEffect } from 'react';
import Column from './Column';

/**
 * Message component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const Message = ({ message }) => (
  <Column
    style={{
      padding: '2px 0px',
    }}>
    <div
      style={{
        color: 'lightgray',
        backgroundColor: '#222',
        padding: '3px 10px',
        fontSize: '0.9rem',
      }}>
      {message.from}
    </div>
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
    paddingBottom: 10,
  }}>
    {messages.map((p) => <Message message={p} />)}
  </Column>
);

export default MessageList;
