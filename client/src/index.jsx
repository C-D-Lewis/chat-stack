import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Top level Application component.
 * 
 * @returns {HTMLElement}
 */
const Application = () => {
  return <div>Hello, world!</div>;
};

ReactDOM.render(<Application />, document.getElementById('app'));
