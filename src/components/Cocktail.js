import React from "react";
import "./Cocktail.scss";

const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

  return (
    <div className="cocktail--container">
      <p className="cocktail--name" onClick={() => props.showDrink(idDrink)}>
        "{strDrink}" have got: {idDrink} ID
      </p>
      <img className="cocktail--img"src={strDrinkThumb} alt="some drink"/>
    </div>
  );
};

export default Cocktail;
