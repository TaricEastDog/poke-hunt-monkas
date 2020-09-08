import React from 'react'
import classes from './Navbar.module.css'

const navbar = (props) => {
  return (
    <div className={classes.Container}>
      <img id='logo' src='./logo192.png' alt='logo' className={classes.Logo} />
      <nav className={classes.Nav}>
        <ul className={classes.NavItems}>
          <li><a href='#logo'>Home</a></li>
          <li><a href='#logo'>Collection</a></li>
          <li><a href='#logo'>About</a></li>
          <li><a href='#logo'>FAQ</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default navbar