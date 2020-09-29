import React from "react";

const Form = (props) => {

  const formStyles = {
    width: "90vw",
    padding: "10px",
    margin: "10px 0 20px",
    borderRadius: "40px",
    backgroundColor: "rgb(167, 255, 193)",
    boxShadow: "inset 0px 0px 5px 5px white",
    textAlign: "center"
  }

  const buttonStyles = {
    backgroundColor: "yellow",
    margin: "10px 50px",
  }

  return (
    <form style={formStyles} onSubmit={props.submit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="search by name"
        onChange={props.change}
        value={props.value}
      />
      <button style={buttonStyles}>show {props.value} drink</button>
    </form>
  );
};

export default Form;
