import React from "react";
import './Cocktail.scss';

const Cocktail = (props) => {

const {idDrink, strDrink} = props.cocktail;

return <div className="cocktail" onClick={ () => props.showDrink(idDrink)}>"{strDrink}" have got: {idDrink} ID</div>;
};

export default Cocktail;
