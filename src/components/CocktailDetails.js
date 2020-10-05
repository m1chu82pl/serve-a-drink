import React from "react";
import "./CocktailDetails.scss";
import Ingredients from "./Ingredients.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const CocktailDetails = (props) => {
  const {
    idDrink,
    strDrink,
    strInstructions,
    strDrinkThumb,
  } = props.cocktailDetails;

  const imgContainer = {
    backgroundImage: `url(${strDrinkThumb})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "15px 15px 50px 0 black inset, -15px -15px 50px 0 black inset",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="cocktailDetails">
      <div className="cocktailDetails--image" style={imgContainer}>
        <h1>{strDrink}</h1>
        <h2>{idDrink}</h2>
        <Ingredients cocktailDetails={props.cocktailDetails} />
        <div className="cocktailDetails--instructions">
          <h2>{strInstructions}</h2>
        </div>
        <button onClick={props.clicked}>return</button>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          className="back-button"
          onClick={props.clicked}
        />
      </div>
    </div>
  );
};

export default CocktailDetails;
