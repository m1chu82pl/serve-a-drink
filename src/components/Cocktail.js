import React from "react";

const Cocktail = (props) => {

const {idDrink, strDrink} = props.cocktail

return <div onClick={ () => props.showDrink(idDrink)}>"{strDrink}" have got: {idDrink} ID</div>;
};

export default Cocktail;
