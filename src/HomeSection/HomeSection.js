import React from 'react'

import FuncButton from './FuncButton/FuncButton'
import ScreenArea from './ScreenArea/ScreenArea'
import classes from './HomeSection.module.css'

const homeSection = (props) => {
  return (
    <div className={classes.Container}>
    <img src="https://fontmeme.com/permalink/200915/398089207f9b5502dc439f91e5967c69.png" alt="pokemon-font" border="0" />
    <ScreenArea 
      name={props.pokeName}
      id={props.pokeId}
      sprite={props.sprite}
    />
    <div className={classes.ButtonsContainer}>
      <FuncButton buttonClicked={props.randomButtonClickHandler} btnName='Find a Poke' btnStyle='RandomButton' />
      <FuncButton buttonClicked={props.catchButtonClickHandler} btnName='Catch a Poke' />
      <FuncButton buttonClicked={props.feedButtonClickHander} btnName='Feed a Poke' />
    </div>
  </div>
  )
}

export default homeSection
