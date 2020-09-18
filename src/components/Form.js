import React from "react";

const Form = (props) => {

  const formStyles = {
    backgroundColor: "red",
  }

  const buttonStyles = {
    backgroundColor: "yellow"
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
