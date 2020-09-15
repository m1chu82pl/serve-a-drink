import React from "react";
// import App from './App.css';
import Form from "./Form";
import CocktailsList from "./CocktailsList"

class App extends React.Component {
  state = {
    formDrinkName: "",
    cocktails: [],
    error: false,
  };

  handleChangeInputValue = (event) => {
    this.setState({
      formDrinkName: event.target.value,
    });
  };

  handleDrinkSubmit = (event) => {
    event.preventDefault();
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.formDrinkName}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((cocktails) => {
        this.setState({ cocktails: cocktails.drinks });
        console.log(this.state.cocktails);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });

    this.setState({
      formDrinkName: "",
    });
  };

  handleShowDrink = (idDrink) => {
    console.log(idDrink);
  }

  render() {
    // console.log(this.state.cocktails);
    return (
      <div className="appComponent">
        <Form
          value={this.state.formDrinkName}
          change={this.handleChangeInputValue}
          submit={this.handleDrinkSubmit}
        />
        <CocktailsList
        cocktails={this.state.cocktails}
        showDrink={this.handleShowDrink}
        />
      </div>
    );
  }
}

export default App;
