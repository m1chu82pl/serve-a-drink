import React from "react";
import "./Cocktail.scss";

const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

  return (
    <div className="cocktail--container">
      <img className="cocktail--img" src={strDrinkThumb} alt="some drink"/>
      <p className="cocktail--name" onClick={() => props.showDrink(idDrink)}>
        "{strDrink}"
      </p>
    </div>
  );
};

export default Cocktail;
