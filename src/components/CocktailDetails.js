import React from "react";
import "./CocktailDetails.scss";

const CocktailDetails = (props) => {
  const { idDrink, strDrink, strInstructions } = props.cocktailDetails;

  const imgContainer = {
    background:
      "url(https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg) no-repeat",
    boxShadow: "0 0 80px 80px white inset",
    width: "600px",
    height: "600px",
  };

  // console.log(props.cocktailDetails);
  return (
    <div className="cocktailDetails">
      <div className="cocktailDetails--image" style={imgContainer}></div>
      <h1>{strDrink}</h1>
      <h2>{idDrink}</h2>
      <h3>{strInstructions}</h3>
      <button onClick={props.clicked}>return to list</button>
    </div>
  );
};

export default CocktailDetails;
