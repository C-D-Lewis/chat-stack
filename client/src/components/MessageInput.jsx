import React, { useState, useEffect } from 'react';
import Button from './Button';
import Row from './Row';

/**
 * MessageInput component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const MessageInput = ({ setDraft }) => {
  const [value, setValue] = useState('');

  /**
   * When the input value changes.
   * 
   * @param {object} event - onChange event. 
   */
  const onChange = ({ target }) => setValue(target.value);

  return (
    <Row style={{
      width: '100%',
      height: 40,
      backgroundColor: '#222',
    }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter message..."
        style={{
          border: 'none',
          color: 'white',
          outline: 'none',
          fontSize: '1rem',
          backgroundColor: '#0000',
          padding: 5,
          width: '100%',
        }}
        />
      <Button 
        disabled={value.length < 1}
        onClick={() => {
          setDraft(value);
          setValue('');
        }}>
        Send
      </Button>
    </Row>
  );
};

export default MessageInput;
