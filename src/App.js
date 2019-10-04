import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Avatar">
          <img className="ui small circular image" src="https://avatars0.githubusercontent.com/u/26219739?v=4" alt="" />
          <h2>Axel Vestberg</h2>
        </div>  
        <p>
          {'<Tech enthusiast />'}
          <br/>
          {'<Continuous learner />'}
        </p>
        <div className="ui text container">
          <p>Interested in modern webstacks <br/> from back to frontend</p>
        </div>
        
        <a 
          className="App-link"
          href="https://github.com/axelvestberg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my latest commits
        </a>
      </header>
    </div>
  );
}

export default App;
