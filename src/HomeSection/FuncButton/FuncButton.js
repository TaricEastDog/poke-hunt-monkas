import React from 'react'
import classes from './FuncButton.module.css'

const funcButton = (props) => {
  let btnStyle = ''
  if (props.btnName === 'Find a Poke') {
    btnStyle = classes.RandomButton 
  } else if (props.btnName === 'Catch a Poke') {
    btnStyle = classes.CatchButton
  } else {
    btnStyle = classes.FeedButton
  }

return <button 
  className={btnStyle} 
  onClick={props.buttonClicked}>
    {props.btnName}
  </button>
}

export default funcButton