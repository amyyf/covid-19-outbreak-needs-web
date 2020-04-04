import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Form from '../Form';
import ListWrapper from '../ListWrapper';

export default function App () {
  let path = window.location.pathname;
  // ensure any other paths just return home
  if (path !== '/submit' && path !== '/') {
    window.history.replaceState(null, '', '/');
    path = '/';
  }

  return (
    <Container className="App">
      <header className="border-bottom mb-3 mt-3">
        <h1>LMCC Needs/Provides Forum</h1>
        {/* Not adding `noreferrer` so LMCC analytics see this site as the referrer */}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <p className="lead">A place for the <a className="info" href="https://www.lowermanhattanchurch.com/" target="_blank" rel="noopener">Lower Manhattan Community Church</a> community to share and meet our needs</p>
      </header>
      {
        path === '/submit' &&
        <Form />
      }
      {
        path === '/' &&
        <ListWrapper />
      }
    </Container>
  );
}
