import React from 'react';
import ReactDOM from 'react-dom';
import Listing from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Listing
    category='string'
    description='string'
    location='string'
    type='string'
  />, div);
});
