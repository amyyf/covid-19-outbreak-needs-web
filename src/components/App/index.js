import React, { useState } from 'react';
import './App.css';

import config from '../../config.json';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import List from '../List';
import Toggle from '../Toggle';

function App() {
  // TODO: update responseEmail in config
  const {
    formLink,
    responseEmail,
    categories,
    offerString,
    requestString
  } = config;
  const toggleOptions = ['all', 'needs', 'offers'];
  const [type, setType] = useState('all');

  return (
    <Container className="App">
      <header className="border-bottom mb-3">
        <h1>LMCC Community Assistance</h1>
        <p className="lead">A place to offer and ask for help</p>
      </header>
      <div className="border-bottom mb-3">
        <Button
          className="mr-2 mb-3"
          href={formLink}
          variant="outline-secondary"
        >
          Submit a need or offer
        </Button>
        <Button
          className="mb-3"
          href={`mailto:${responseEmail}`}
          variant="outline-secondary"
        >
          Email us to respond to a listing
        </Button>
      </div>
      <h2>Listings</h2>
      <Toggle
        handleChange={setType}
        options={toggleOptions}
        prependOptionText="See "
        selected={type}
      />
      <List
        categories={categories}
        offerString={offerString}
        requestString={requestString}
        type={type}
      />
      <Button
        className="mb-3"
        href={`mailto:${responseEmail}`}
        variant="outline-secondary"
      >
        Email us to respond to a listing
      </Button>
    </Container>
  );
}

export default App;
