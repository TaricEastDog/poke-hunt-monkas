import React, { Component } from "react";
import axios from "axios";

import Navbar from "./Navbar/Navbar";
import HomeSection from "./HomeSection/HomeSection";
import Collection from "./Collection/Collection";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import classes from "./App.module.css";

// some dummy data to commit

class App extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokeName: "",
    sprite: "Loading poke sprite",
    pokeId: 50,
    pokeList: [],
    currentPage: "home",
    bgImage:
      "https://www.wallpaperflare.com/static/905/635/699/pok%C3%A9mon-video-games-retro-games-pokemon-wallpaper.jpg",
  };

  navBarClickHandler = (nav) => {
    this.setState({ currentPage: nav });
  };

  componentDidMount() {
    axios.get(this.state.url + this.state.pokeId).then((res) => {
      this.setState({
        pokeName: res.data.name,
        sprite: res.data.sprites.front_default,
        pokeId: res.data.id,
      });
      console.log(res.data.sprites.front_default);
    });
  }

  randomButtonClickHandler = () => {
    let rand = Math.random() * 151 + 1;
    rand = Math.floor(rand);
    axios.get(this.state.url + rand).then((res) => {
      this.setState({
        pokeName: res.data.name,
        sprite: res.data.sprites.front_default,
        pokeId: res.data.id,
      });
      console.log(res.data.sprites.front_default);
    });
  };

  catchButtonHandler = () => {
    this.setState({ pokeList: [...this.state.pokeList, this.state.pokeId] });
  };

  feedButtonClickHander = () => {
    console.log("you fed a Poke");
  };

  render() {
    const homeSection = (
      <HomeSection
        catchButtonClickHandler={this.catchButtonHandler}
        randomButtonClickHandler={this.randomButtonClickHandler}
        feedButtonClickHander={this.feedButtonClickHander}
        pokeId={this.state.pokeId}
        pokeName={this.state.pokeName}
        pokeList={this.state.pokeList}
        sprite={this.state.sprite}
      />
    );
    const collection = <Collection pokeList={this.state.pokeList} />;

    let currentDisplay = homeSection;

    if (this.state.currentPage === "home") {
      currentDisplay = homeSection;
    } else if (this.state.currentPage === "collection") {
      currentDisplay = collection;
    } else if (this.state.currentPage === "about") {
      currentDisplay = <About bgImage={this.state.bgImage} />;
    } else {
      currentDisplay = <FAQ />;
    }

    return (
      <div className={classes.App}>
        <Navbar navBarClickHandler={this.navBarClickHandler} />
        <div className={classes.Container}>{currentDisplay}</div>
      </div>
    );
  }
}

export default App;
