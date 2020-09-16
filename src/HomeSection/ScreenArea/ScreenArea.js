import classes from './ScreenArea.module.css'
import React from 'react'

const screenArea = (props) => {
  return (
    <div className={classes.Container}>
      <p>Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
      <p>#{`${props.id}`.padStart(3, "0")}</p>
      <img src={props.sprite} alt={props.name} />
    </div>
  )
}

export default screenArea