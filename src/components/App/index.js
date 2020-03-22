import React , { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import List from '../List';
import Toggle from '../Toggle';

function App() {
  const toggleOptions = [
    {
      labelText: 'requests for',
      type: 'requests'
    },
    {
      labelText: 'offers to',
      type: 'offers'
    }
  ];
  const [type, setType] = useState('requests');

  return (
    <Container className="App">
      <h1>LMCC Community Assistance</h1>
      <p className="lead">A place to offer and ask for help</p>
      <p>Submit a request or offer <a href="/#">link to form here</a></p>
      <Toggle
        handleChange={setType}
        options={toggleOptions}
        selected={type}
      />
      <List type={type} />
      <p>Send us an <a href="/#">email address</a> to respond</p>
    </Container>
  );
}

export default App;
