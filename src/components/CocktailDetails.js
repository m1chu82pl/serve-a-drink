import React from "react";
import "./CocktailDetails.scss";

const CocktailDetails = (props) => {
  const { idDrink, strDrink, strInstructions } = props.cocktailDetails;

  // console.log(props.cocktailDetails);
  return (
    <div className="cocktailDetails">
      <h1>{strDrink}</h1>
      <h2>{idDrink}</h2>
      <h3>{strInstructions}</h3>
      <button onClick={props.clicked}>return to list</button>
    </div>
  );
};

export default CocktailDetails;
