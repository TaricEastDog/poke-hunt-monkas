import React from 'react'
import classes from './RandomButton.module.css'

const randomButton = (props) => {
  return <button className={classes.RandomButton} onClick={props.randomButtonClicked}>Find a Poke</button>
}

export default randomButton