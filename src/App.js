import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Footer from "./components/Footer";
import pokemons from "./pokemon.json";
// import { Col, Row, Container } from "./components/Grid";

class App extends Component {

  state = {
    pokemons,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    clicked: []
  };

  componentDidMount() {
    this.setState({ pokemons: this.shuffle(this.state.pokemons) });
  }

  handleOnClick = id => {

    let newTopScore = 0;
    let tempScore = 0;
    let tempMessage = "";
    let tempClicked = this.state.clicked;
   
    if (this.state.clicked.includes(id)) {
      newTopScore = this.state.score;
      tempClicked = [];
      tempMessage = "You guessed incorrectly!";
    }
    else {
      tempClicked.push(id);
      tempScore = this.state.score + 1;
      newTopScore = tempScore
      tempMessage = "You guessed correctly!";
    }

    let tempTopScore = newTopScore < this.state.topScore ? this.state.topScore : newTopScore;
    
    let tempPokemons = pokemons.sort(() => Math.random() - 0.5);

    this.setState({
      pokemons: tempPokemons,
      score : tempScore,
      topScore : tempTopScore,
      message : tempMessage,
      clicked : tempClicked
    });
  }

  shuffle = pokemons => {

    // https://stackoverflow.com/a/43235780/10503606

    let newPokemons = pokemons.sort(() => Math.random() - 0.5);
    return newPokemons;
  };

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        >
        </Nav>
        <Title />
        <Wrapper>
          {
            this.state.pokemons.map(pokemon => (
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                handleOnClick={this.handleOnClick}
              />
            ))
          }
        </Wrapper >
        <Footer />
      </div>
    );
  }
}

export default App;

