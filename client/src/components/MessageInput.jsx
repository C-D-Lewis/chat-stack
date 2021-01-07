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

  /**
   * When a draft is ready to be sent.
   */
  const onDraftSubmitted = () => {
    setDraft(value);
    setValue('');

    inputRef.current.focus();
  };

  /**
   * When a key is pressed.
   * 
   * @param {object} event - Event. 
   */
  const onKeyPress = ({ key }) => {
    if (key === 'Enter') {
      onDraftSubmitted();
    }
  };

  // When the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Row style={{
      width: '100%',
      height: 40,
      backgroundColor: color,
      borderTop: 'solid 2px black',
    }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
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
        }} />
      <Button 
        disabled={value.length < 1}
        onClick={onDraftSubmitted}>
        Send
      </Button>
    </Row>
  );
};

export default MessageInput;
