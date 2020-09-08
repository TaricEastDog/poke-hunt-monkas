import React, {Component} from 'react';
import './App.css';

import Navbar from './Navbar/Navbar'
import HomeSection from './HomeSection/HomeSection'

class App extends Component {
  state = {
    pokemons: []
  }
  render () {
    return (
      <div>
        <Navbar />
        <HomeSection />
      </div>

    )
  }
}

export default App;
