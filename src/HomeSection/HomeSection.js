import React, { Component } from 'react'

import RandomButton from './RandomButton/RandomButton'

class HomeSection extends Component {
  state = {
    randomId: 1
  }

  randomButtonClickHandler = () => {
    let rand = Math.random() * 200 + 1  
    rand = Math.floor(rand)
    this.setState({randomId: rand})
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.randomId !== this.state.randomId) {
      console.log('componentDidUpdate the state and is rendering new things')
    }
  } 

  render () {
    return (
      <div>
        <p>content of home section here</p>
        <p>Generated random id: {this.state.randomId}</p>
        <RandomButton randomButtonClicked={this.randomButtonClickHandler} />
      </div>
    )
  }

}

export default HomeSection