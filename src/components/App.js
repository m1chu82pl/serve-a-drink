import React from "react";
import "./App.scss";
import Form from "./Form";
import CocktailsList from "./CocktailsList";
import CocktailDetails from "./CocktailDetails";

class App extends React.Component {
  state = {
    formDrinkName: "",
    cocktails: [],
    cocktailDetails: [],
    clickedCocktail: false,
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
        if (cocktails.drinks === null) {
          this.setState({ cocktails: [] });
          
        } else {
          this.setState({ cocktails: cocktails.drinks });
          console.log(this.state.cocktails);
        }
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
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("tu też coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((cocktailDetails) => {
        console.log(cocktailDetails.drinks[0]);
        this.setState({
          cocktailDetails: cocktailDetails.drinks[0],
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });
    this.setState({
      clickedCocktail: true,
    });
  };

  handleReturnToCocktailList = () => {
    this.setState({
      clickedCocktail: false,
    });
  };

  render() {
    console.log(this.state.cocktailDetails);
    const clickedCocktail = this.state.clickedCocktail;

    return (
      <div className="App">
        <Form
          value={this.state.formDrinkName}
          change={this.handleChangeInputValue}
          submit={this.handleDrinkSubmit}
        />
        <CocktailsList
          cocktails={this.state.cocktails}
          showDrink={this.handleShowDrink}
        />
        {clickedCocktail ? (
          <CocktailDetails
            cocktailDetails={this.state.cocktailDetails}
            clicked={this.handleReturnToCocktailList}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
