import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Form from '../Form';
import ListWrapper from '../ListWrapper';
import config from '../../config.json';

export default function App () {
  const {
    categories,
    categoryDisplayTitles,
    filters,
    filterDisplayTitles,
    offerString,
    requestString,
    responseEmail
  } = config;
  const path = window.location.pathname;

  return (
    <Container className="App">
      <header className="border-bottom mb-3 mt-3">
        <h1>LMCC Needs/Provides Forum</h1>
        <p className="lead">A place for the <a className="info" href="https://www.lowermanhattanchurch.com/">Lower Manhattan Community Church</a> community to share and meet our needs</p>
      </header>
      {
        path === '/submit' &&
        <Form />
      }
      {
        path === '/' &&
        <ListWrapper
          categories={categories}
          categoryDisplayTitles={categoryDisplayTitles}
          filters={filters}
          filterDisplayTitles={filterDisplayTitles}
          offerString={offerString}
          requestString={requestString}
          responseEmail={responseEmail}
        />
      }
    </Container>
  );
}
