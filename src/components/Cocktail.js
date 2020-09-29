import React from "react";
import "./Cocktail.scss";

const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

  return (
    <div className="cocktail--container">
      <img className="cocktail--img" src={strDrinkThumb} alt="some drink" onClick={() => props.showDrink(idDrink)}/>
      <h2 className="cocktail--name" onClick={() => props.showDrink(idDrink)}>
        {strDrink}
      </h2>
    </div>
  );
};

export default Cocktail;
