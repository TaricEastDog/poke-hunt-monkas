import React, { Component } from 'react'
import axios from 'axios'

import FuncButton from './FuncButton/FuncButton'
import ScreenArea from './ScreenArea/ScreenArea'
import classes from './HomeSection.module.css'


class HomeSection extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokeName: '',
    sprite: "Loading poke sprite",
    pokeId: 50,
    pokeList: []
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
    if (prevState !== this.state) {
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

  catchButtonHandler = () => {
    this.setState({pokeList: [...this.state.pokeList, this.state.pokeId]})
  }

  render () {
    return (
      <div className={classes.Container}>
        <img src="https://fontmeme.com/permalink/200915/398089207f9b5502dc439f91e5967c69.png" alt="pokemon-font" border="0" />
        <ScreenArea 
          name={this.state.pokeName}
          id={this.state.pokeId}
          sprite={this.state.sprite}
        />
        <div className={classes.ButtonsContainer}>
          <FuncButton buttonClicked={this.randomButtonClickHandler} btnName='Find a Poke' btnStyle='RandomButton' />
          <FuncButton buttonClicked={this.catchButtonHandler} btnName='Catch a Poke' />
          <FuncButton buttonClicked={this.randomButtonClickHandler} btnName='Feed a Poke' />
        </div>
        <h5>Catched Poke IDs:</h5>
        <ul>
          {this.state.pokeList.map(poke => (
            <li>#{`${poke}`.padStart(3, "0")}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default HomeSection