import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Footer from "./components/Footer";
import pokemons from "./pokemon.json";

class App extends Component {
  state = {
    pokemons,
    score: 0,
    topScore: 0,
    message: "Click on an image to start!",
    clicked: []
  };

  componentDidMount() {
    this.setState({ pokemons: this.shuffle(this.state.pokemons) });
  }

  handleOnClick = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        pokemons: this.shuffle(this.state.pokemons),
        score: 0,
        message: "You guessed incorrectly!",
        clicked: []
      });
    } else {
      this.setState({
        pokemons: this.shuffle(this.state.pokemons),
        score: this.state.score + 1,
        topScore:
          this.state.score + 1 <= this.state.topScore
            ? this.state.topScore
            : this.state.score + 1,
        message: "",
        clicked: this.state.clicked.concat(id)
      });
    }
  };

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
        ></Nav>
        <Title />
        <Wrapper>
          {this.state.pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
