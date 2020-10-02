import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const DoesntExist = (props) => {
  // const {idDrink, strDrink} = props.cocktail;

  const doesntExistTestStyle = {
    color: "whitesmoke",
    fontSize: "1rem",
    pading: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={doesntExistTestStyle}>
      <FontAwesomeIcon icon={faFrown} style={{fontSize: "20vh"}}/>
      <br />
      <h1>
        Eeee...
        <br />
        What do you drink?
        <br />
        That cocktail doesnt exist
      </h1>
    </div>
  );
};

export default DoesntExist;
