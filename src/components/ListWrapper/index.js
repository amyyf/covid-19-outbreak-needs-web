import React, { useState } from 'react';
import './index.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import List from '../List';
import Toggle from '../Toggle';
import config from '../../config';

export default function ListWrapper() {
  const {
    categories,
    categoryDisplayTitles,
    categoryKeys,
    filters,
    filterDisplayTitles,
    filterKeys,
    offerString,
    requestString,
    responseEmail
  } = config;
  const [type, setType] = useState(filterKeys.all);

  return (
    <Container className="ListWrapper">
      <div className="border-bottom mb-3">
        <Button
          className="mr-2 mb-3"
          href={'/submit'}
          variant="info"
        >
          Submit a need or offer
        </Button>
        <Button
          className="mb-3"
          href={`mailto:${responseEmail}`}
          variant="info"
        >
          Email us to respond to a listing
        </Button>
      </div>
      <h2>Listings</h2>
      <Toggle
        displayTitles={filterDisplayTitles}
        handleChange={setType}
        options={filters}
        selected={type}
      />
      <List
        categories={categories}
        categoryDisplayTitles={categoryDisplayTitles}
        categoryKeys={categoryKeys}
        filterKeys={filterKeys}
        offerString={offerString}
        requestString={requestString}
        type={type}
      />
      <Button
        className="mb-3"
        href={`mailto:${responseEmail}`}
        variant="info"
      >
        Email us to respond to a listing
      </Button>
    </Container>
  );
}
