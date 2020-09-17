import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import Navbar from './Navbar/Navbar'
import HomeSection from './HomeSection/HomeSection'
import Collection from './Collection/Collection'
import About from './About/About'
import FAQ from './FAQ/FAQ'

class App extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokeName: '',
    sprite: "Loading poke sprite",
    pokeId: 50,
    pokeList: [1, 2, 4, 6],
    currentPage: 'about'
  }

  navBarClickHandler = (nav) => {
    this.setState({currentPage: nav})
  }

  componentDidMount() {
    axios.get(this.state.url + this.state.pokeId)
      .then(res => {        
        this.setState({
          pokeName: res.data.name,
          sprite: res.data.sprites.front_default,
          pokeId: res.data.id
        })
        console.log(res.data.sprites.front_default)
      })
  }

  randomButtonClickHandler = () => {
    let rand = Math.random() * 151 + 1  
    rand = Math.floor(rand)
    axios.get(this.state.url + rand)
      .then(res => {
        this.setState({
          pokeName: res.data.name,
          sprite: res.data.sprites.front_default,
          pokeId: res.data.id
        })
        console.log(res.data.sprites.front_default)
      })
  }

  catchButtonHandler = () => {
    this.setState({pokeList: [...this.state.pokeList, this.state.pokeId]})
  }

  feedButtonClickHander = () => {
    console.log('you fed a Poke')
  }

  render () {
    const homeSection = <HomeSection 
    catchButtonClickHandler={this.catchButtonHandler} 
    randomButtonClickHandler={this.randomButtonClickHandler}
    feedButtonClickHander={this.feedButtonClickHander}
    pokeId={this.state.pokeId}
    pokeName={this.state.pokeName}
    pokeList={this.state.pokeList}
    sprite={this.state.sprite}
    />
    const collection = <Collection pokeList={this.state.pokeList} />

    let currentDisplay = homeSection

    if (this.state.currentPage === 'home') {
      currentDisplay = homeSection
    } else if (this.state.currentPage === 'collection') {
      currentDisplay = collection
    } else if (this.state.currentPage === 'about') {
      currentDisplay = <About />
    } else {
      currentDisplay = <FAQ />
    }

    return (
      <div>
        <Navbar navBarClickHandler={this.navBarClickHandler} />
        {currentDisplay}
      </div>

    )
  }
}

export default App;
