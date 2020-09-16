import React from 'react'
import classes from './Navbar.module.css'

const navbar = (props) => {

  const homeClickHandler = () => {
    props.navBarClickHandler('home')
  }

  const collectionClickHandler = () => {
    props.navBarClickHandler('collection')
  }

  return (
    <div className={classes.Container}>
      <img id='logo' src='./logo192.png' alt='logo' className={classes.Logo} />
      <nav className={classes.Nav}>
        <ul className={classes.NavItems}>
          <li onMouseDown={homeClickHandler}>Home</li>
          <li onMouseDown={collectionClickHandler}>Colletion</li>
          <li><a href='#logo'>About</a></li>
          <li><a href='#logo'>FAQ</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default navbar