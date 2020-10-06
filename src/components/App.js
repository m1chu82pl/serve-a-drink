import React from "react";
import "./App.scss";
import Form from "./Form";
import CocktailsList from "./CocktailsList";
import CocktailDetails from "./CocktailDetails";
import champagner from "../images/champagner.png";

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

  handleShowDrink = (idDrink) => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("tu też coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((cocktailDetails) => {
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
      cocktailDetails: [],
    });
  };

  componentDidMount() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("tu też coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((cocktails) => {
        console.log(cocktails.drinks);
        this.setState({
          cocktails: cocktails.drinks,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.formDrinkName.length === 1 &&
      prevState.formDrinkName !== this.state.formDrinkName
    ) {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.formDrinkName}`;

      fetch(URL)
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response;
          }
          throw Error("tu też coś poszło nie tak");
        })
        .then((response) => response.json())
        .then((cocktails) => {
          console.log(cocktails.drinks);
          this.setState({
            cocktails: cocktails.drinks,
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: true,
          });
        });
    } else if (this.state.formDrinkName.length >= 2 &&
      prevState.formDrinkName !== this.state.formDrinkName) {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.formDrinkName}`;

      fetch(URL)
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response;
          }
          throw Error("tu też coś poszło nie tak");
        })
        .then((response) => response.json())
        .then((cocktails) => {
          console.log(cocktails.drinks);
          this.setState({
            cocktails: cocktails.drinks,
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: true,
          });
        });
      }
  }

  render() {
    const clickedCocktail = this.state.clickedCocktail;

    return (
      <div className="App">
        <img
          className="App--background"
          src={champagner}
          alt="drink background"
        />
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
