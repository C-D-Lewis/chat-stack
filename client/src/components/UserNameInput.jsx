import React, { useState, useEffect } from 'react';
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

  /**
   * When the input value changes.
   * 
   * @param {object} event - onChange event. 
   */
  const onChange = ({ target }) => setValue(target.value);

  return (
    <Row style={{
      width: '100%',
      backgroundColor: '#222',
    }}>
      <input
        type="text"
        onChange={onChange}
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
        onClick={() => setUserName(value)}>
        Submit
      </Button>
    </Row>
  );
};

export default UserNameInput;
