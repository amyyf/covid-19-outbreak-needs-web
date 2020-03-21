import React , { useState } from 'react';
import './App.css';
import List from '../List';
import Toggle from '../Toggle';

function App() {
  const toggleOptions = [
    {
      labelText: 'needs',
      type: 'needs'
    },
    {
      labelText: 'has offered',
      type: 'offers'
    }
  ];
  const [type, setType] = useState('needs');

  return (
    <div className="App">
      <h1>LMCC Community Assistance</h1>
      <p>A place to offer and ask for help</p>
      <Toggle
        onChange={setType}
        options={toggleOptions}
        selected={type}
      />
      <List type={type} />
      <p>Send us an <a href="/#">email address</a> to respond</p>
      <p>Submit a request or offer <a href="/#">link to form here</a></p>
    </div>
  );
}

export default App;
