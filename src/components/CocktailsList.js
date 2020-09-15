import React from "react";
import Cocktail from "./Cocktail";

const CocktailsList = (props) => {
  console.log(props.cocktails);


  return (
    <div>
      {props.cocktails.map(cocktail => (
        <Cocktail key={cocktail.idDrink} cocktail={cocktail} showDrink={props.showDrink} />
      ))}
    </div>
  );
};

export default CocktailsList;
