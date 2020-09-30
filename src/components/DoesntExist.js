import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const DoesntExist = (props) => {
  // const {idDrink, strDrink} = props.cocktail;

  return (
    <div>
      <FontAwesomeIcon icon={faFrown} />
      <br />
      <h3>
        Eeee...
        <br />
        What do you drink?
        <br />
        That cocktail doesnt exist
      </h3>
    </div>
  );
};

export default DoesntExist;
