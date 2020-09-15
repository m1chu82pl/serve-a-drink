import React from "react";
import Cocktail from "./Cocktail";

const CocktailsList = (props) => {
  const cocktails = props.cocktails.map((cocktail) => (
    <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
  ));
  return (
    <div>
      {cocktails}
      {props.key}
    </div>
  );
};

export default CocktailsList;
