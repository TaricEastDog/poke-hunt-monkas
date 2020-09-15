import React, { Component } from 'react'
import axios from 'axios'

import RandomButton from './RandomButton/RandomButton'
import ScreenArea from './ScreenArea/ScreenArea'
import classes from './HomeSection.module.css'


class HomeSection extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokeName: '',
    sprite: "Loading poke sprite",
    pokeId: 50
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokeName !== this.state.pokeName) {
      console.log('componentDidUpdate the state and is rendering new things')
    }
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

  render () {
    return (
      <div className={classes.Container}>
        <p>content of home section here</p>
        <ScreenArea 
          name={this.state.pokeName}
          id={this.state.pokeId}
          sprite={this.state.sprite}
        />
        <div className={classes.ButtonsContainer}>
          <RandomButton randomButtonClicked={this.randomButtonClickHandler} />
          <RandomButton randomButtonClicked={this.randomButtonClickHandler} />
          <RandomButton randomButtonClicked={this.randomButtonClickHandler} />
        </div>
      </div>
    )
  }

}

export default HomeSection