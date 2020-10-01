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
    backgroundImage: `url(${strDrinkThumb})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 100%",
    // "url(https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg) no-repeat",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "15px 15px 50px 0 black inset, -15px -15px 50px 0 black inset",
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
