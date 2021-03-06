import React from "react";
import Cocktail from "./Cocktail";
import DoesntExist from "./DoesntExist";

const CocktailsList = (props) => {

  return (
    <div className="cocktails--container">      
      {props.cocktails === null ? <DoesntExist/> : 
      props.cocktails.map(cocktail => (
        <Cocktail key={cocktail.idDrink} cocktail={cocktail} showDrink={props.showDrink} />
      ))}
    </div>
  );
};

export default CocktailsList;
