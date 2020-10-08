import React from "react";

const Ingredients = (props) => {
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  } = props.cocktailDetails;

const ingredientsStyle = {
  maxHeight: "20vh",
  width: "100vw",
  background: "rgba(0, 0, 0, 0.15)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
}

  return (
    <div style={ingredientsStyle}>
      {strIngredient1 ? <h3>{strIngredient1}  {strMeasure1}</h3> : null}
      {strIngredient2 ? <h3>{strIngredient2}  {strMeasure2}</h3> : null}
      {strIngredient3 ? <h3>{strIngredient3}  {strMeasure3}</h3> : null}
      {strIngredient4 ? <h3>{strIngredient4}  {strMeasure4}</h3> : null}
      {strIngredient5 ? <h3>{strIngredient5}  {strMeasure5}</h3> : null}
      {strIngredient6 ? <h3>{strIngredient6}  {strMeasure6}</h3> : null}
      {strIngredient7 ? <h3>{strIngredient7}  {strMeasure7}</h3> : null}
      {strIngredient8 ? <h3>{strIngredient8}  {strMeasure8}</h3> : null}
      {strIngredient9 ? <h3>{strIngredient9}  {strMeasure9}</h3> : null}
      {strIngredient10 ? <h3>{strIngredient10}  {strMeasure10}</h3> : null}
      {strIngredient11 ? <h3>{strIngredient11}  {strMeasure11}</h3> : null}
      {strIngredient12 ? <h3>{strIngredient12}  {strMeasure12}</h3> : null}
      {strIngredient13 ? <h3>{strIngredient13}  {strMeasure13}</h3> : null}
      {strIngredient14 ? <h3>{strIngredient14}  {strMeasure14}</h3> : null}
      {strIngredient15 ? <h3>{strIngredient15}  {strMeasure15}</h3> : null}
    </div>
  );
};

export default Ingredients;
