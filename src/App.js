import React from 'react';
import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">
      <h1>LMCC Community Assistance</h1>
      <p>A place to offer and ask for help</p>
      {/* 
        lists - toggle/sort
          needs - listing components
          offers - listing components
       */}
      <List />
      <p>Send us an <a href="/#">email address</a> to respond</p>
      <p>Submit a request or offer <a href="/#">link to form here</a></p>
    </div>
  );
}

export default App;
