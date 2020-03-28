import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toggle
    handleChange={() => {}}
    options={[]}
    selected='string'
  />, div);
});
