import React , { useState } from 'react';
import './App.css';

import AlertWrapper from '../AlertWrapper';
import api from '../../api';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import List from '../List';
import Row from 'react-bootstrap/Row';
import Toggle from '../Toggle';

function App() {
  const toggleOptions = ['all', 'requests', 'offers'];
  const formLink = 'https://docs.google.com/forms/d/1j_Cha4mhNiegs8mDWGcPGQczYlMxnzYiQw8uKAK7ujY/viewform?edit_requested=true#responses';
  const responseLink = '/#';
  const [type, setType] = useState('all');

  return (
    <Container className="App">
      <header className="border-bottom mb-3">
        <h1>LMCC Community Assistance</h1>
        <p className="lead">A place to offer and ask for help</p>
      </header>
      <Container>
        <Row>
          <Col>
            <AlertWrapper
              link={formLink}
              linkText="here"
              textBeforeLink="Submit a request or offer"
              variant="info"
            />
          </Col>
          <Col>
            <AlertWrapper
              link={responseLink}
              linkText="Email us"
              textAfterLink="to respond to a listing"
              variant="info"
            />
          </Col>
        </Row>
      </Container>
      <h2>Listings</h2>
      <Toggle
        handleChange={setType}
        options={toggleOptions}
        selected={type}
      />
      <List
        data={api.getData()}
        type={type}
      />
      <AlertWrapper
        link={responseLink}
        linkText="Email us"
        textAfterLink="to respond to a listing"
        variant="info"
      />
    </Container>
  );
}

export default App;
