import React, {Component} from 'react'

class Collection extends Component {

  state = {

  }

  render() {
    const list = this.props.pokeList.map(poke => {
      const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`
      return <img key={poke} src={pokeUrl} alt={poke} /> 
    })
    return (
      <div>
        {list}
      </div>
    )
  }

}

export default Collection
