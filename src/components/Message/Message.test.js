import React from 'react';
import ReactDOM from 'react-dom';
import Message from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message
    text='string'
  />, div);
});
