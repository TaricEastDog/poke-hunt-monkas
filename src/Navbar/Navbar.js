import React from 'react'
import classes from './Navbar.module.css'

const navbar = (props) => {

  const homeClickHandler = () => {
    props.navBarClickHandler('home')
  }

  const collectionClickHandler = () => {
    props.navBarClickHandler('collection')
  }

  const aboutClickHandler = () => {
    props.navBarClickHandler('about')
  }

  const faqClickHandler = () => {
    props.navBarClickHandler('faq')
  }

  return (
    <div className={classes.Container}>
      <img id='logo' src='https://pngimg.com/uploads/pokeball/pokeball_PNG8.png' alt='logo' className={classes.Logo} />
      <nav className={classes.Nav}>
        <ul className={classes.NavItems}>
          <li onMouseDown={homeClickHandler}>Home</li>
          <li onMouseDown={collectionClickHandler}>Colletion</li>
          <li onMouseDown={aboutClickHandler}>About</li>
          <li onMouseDown={faqClickHandler}>FAQ</li>
        </ul>
      </nav>
    </div>

  )
}

export default navbar