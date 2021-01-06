import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Row from './Row';

/**
 * MessageInput component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const MessageInput = ({ color, setDraft }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  /**
   * When the input value changes.
   * 
   * @param {object} event - onChange event. 
   */
  const onChange = ({ target }) => setValue(target.value);

  // When the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Row style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 40,
      backgroundColor: color,
    }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter message..."
        ref={inputRef}
        style={{
          border: 'none',
          color: 'white',
          outline: 'none',
          fontSize: '1rem',
          backgroundColor: '#0000',
          padding: 10,
          width: '100%',
        }}
        />
      <Button 
        disabled={value.length < 1}
        onClick={() => {
          setDraft(value);
          setValue('');

          inputRef.current.focus();
        }}>
        Send
      </Button>
    </Row>
  );
};

export default MessageInput;
