import React from "react";
import "./CocktailDetails.scss";
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
    background: `url(${strDrinkThumb}) no-repeat fixed center`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 100%",
    // "url(https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg) no-repeat",
    boxShadow: "15px 15px 50px 0 black inset, -15px -15px 50px 0 black inset",
    width: "100%",
    height: "100%",
  };

  // console.log(props.cocktailDetails);
  return (
    <div className="cocktailDetails">
      <div className="cocktailDetails--image" style={imgContainer}>
        <h1 style={{ fontSize: "60px" }}>{strDrink}</h1>
        <h2>{idDrink}</h2>
        <h3>{strInstructions}</h3>
        <button onClick={props.clicked}>return to list</button>
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
