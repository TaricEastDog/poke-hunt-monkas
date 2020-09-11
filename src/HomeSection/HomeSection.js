import React, { Component } from 'react'
import axios from 'axios'

import RandomButton from './RandomButton/RandomButton'
import classes from './HomeSection.module.css'


class HomeSection extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokeName: '',
    sprite: "Loading poke sprite"
  }

  componentDidMount() {
    axios.get(this.state.url + 50)
      .then(res => {        
        this.setState({
          pokeName: res.data.name,
          sprite: res.data.sprites.front_default
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
          sprite: res.data.sprites.front_default
        })
        console.log(res.data.sprites.front_default)
      })
  }

  render () {
    return (
      <div className={classes.Container}>
        <p>content of home section here</p>
        <p>Name: {this.state.pokeName.charAt(0).toUpperCase() + this.state.pokeName.slice(1)}</p>
        <img src={this.state.sprite} alt={this.state.pokeName} />
        <RandomButton randomButtonClicked={this.randomButtonClickHandler} />
      </div>
    )
  }

}

export default HomeSection