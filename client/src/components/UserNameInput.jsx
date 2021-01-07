import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Row from './Row';

/**
 * UserNameInput component.
 * 
 * @param {object} props - Component props.
 * @returns {HTMLElement} 
 */
const UserNameInput = ({ setUserName }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  /**
   * When the input value changes.
   * 
   * @param {object} event - onChange event. 
   */
  const onChange = ({ target }) => setValue(target.value);

  /**
   * When the username should be submitted.
   */
  const onSubmit = () => setUserName(value);

  /**
   * When a key is pressed.
   * 
   * @param {object} event - Event. 
   */
  const onKeyPress = ({ key }) => {
    if (key === 'Enter') {
      onSubmit();
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
      backgroundColor: '#222',
    }}>
      <input
        type="text"
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={inputRef}
        placeholder="Enter username..."
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
        disabled={value.length < 3}
        onClick={onSubmit}>
        Submit
      </Button>
    </Row>
  );
};

export default UserNameInput;
