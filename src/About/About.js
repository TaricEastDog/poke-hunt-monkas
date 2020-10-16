import React from 'react'
import { Parallax } from 'react-parallax'

import classes from './About.module.css'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum placerat augue id placerat. Nam lobortis, ante ac condimentum malesuada, dolor nulla egestas metus, vitae viverra tellus erat sed justo. Maecenas ac magna pulvinar, dapibus neque ac, ultricies elit. Suspendisse eu luctus dolor. Ut eleifend at leo ac luctus. Vivamus tempor tortor ut purus dapibus, gravida condimentum lectus hendrerit. Proin nec sodales leo. Mauris finibus fringilla maximus. Suspendisse bibendum facilisis massa id iaculis. Proin vitae ante dolor.'

const about = (props) => {
  return (
    <Parallax 
      blur={2}
      bgImage={props.bgImage}
      bgImageAlt='background map'
      strength={900}
    >
      <div className={classes.GridContainer}>
        <div className={classes.GridItemDesc1}>
          <h2>About Poke Hunt</h2>
          <p>{loremIpsum}</p>
        </div>
        <div className={classes.GridItemImage1}>
          <img 
            src='http://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Image-File.png' 
            alt='Pikachu' 
            className={classes.PikachuImage} />
        </div> 
        <div className={classes.GridItemDesc2}>
          <h2>Some more about it</h2>
          <p>{loremIpsum}</p>
        </div>
        <div className={classes.GridItemImage2}>
          <img 
            src='https://www.pinclipart.com/picdir/big/570-5700657_collection-of-free-squirtle-transparent-character-pokemon-transparent.png' 
            alt='Squirtle' 
            className={classes.PikachuImage} />
        </div> 
      </div>      
    </Parallax>


  )
}

export default about
