import React, { useState } from 'react';
import './index.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import List from '../List';
import Toggle from '../Toggle';

export default function ListWrapper(props) {
  const {
    categories,
    handleClick,
    offerString,
    requestString,
    responseEmail
  } = props;
  const toggleOptions = ['all', 'needs', 'offers'];
  const [type, setType] = useState('all');

  return (
    <Container className="ListWrapper">
      <div className="border-bottom mb-3">
        <Button
          className="mr-2 mb-3"
          onClick={() => handleClick('/submit')}
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
