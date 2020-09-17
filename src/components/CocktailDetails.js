import React from "react";

const CocktailDetails = (props) => {

const {idDrink, strDrink} = props.cocktailDetails;
console.log(props.cocktailDetails);
return <div className="cocktail" >"{strDrink}" have got: {idDrink} ID</div>;
};

export default CocktailDetails;
