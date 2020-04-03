import React, { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Form from '../Form';
import ListWrapper from '../ListWrapper';

import config from '../../config.json';

export default function App () {
  const {
    responseEmail,
    categories,
    offerString,
    requestString
  } = config;
  const [path, setPath] = useState(window.location.pathname);

  const handleClick = (path) => {
    setPath(path);
    window.location.assign(path);
  }

  return (
    <Container className="App">
      <header className="border-bottom mb-3 mt-3">
        <h1>LMCC Needs/Provides Forum</h1>
        <p className="lead">A place for the <a href="https://www.lowermanhattanchurch.com/">Lower Manhattan Community Church</a> community to share and meet our needs</p>
      </header>
      {
        path === '/submit' &&
        <Form />
      }
      {
        path === '/' &&
        <ListWrapper
          categories = {categories}
          handleClick={handleClick}
          offerString = {offerString}
          requestString = {requestString}
          responseEmail={responseEmail}
        />
      }
    </Container>
  );
}
