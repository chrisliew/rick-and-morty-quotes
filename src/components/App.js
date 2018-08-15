import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Home from './Home'; // eslint-disable-line no-unused-vars
import '../styles/App.css';
import quotes from '../quotes.json';

class App extends Component {
  render() {
    return (
      <div>
        <Home quotes={quotes}/>
      </div> 
    );
  }
}

export default App;
