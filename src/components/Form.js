import React from "react";

const Form = (props) => {

  const formStyles = {
    position: "relative",
    // top: "10px",
    // left: "5vw",
    width: "90vw",
    height: "7vh",
    // padding: "20px",
    // textAlign: "center",
    margin: "0 auto",
    borderRadius: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.548)",
    boxShadow: "inset 0px 0px 5px 5px white",
    textAlign: "center",
    zIndex: "1",
    display: "flex",
  }

  const inputStyles = {
    position: "relative",
    top: "1vh",
    height: "5vh",
    margin: "0 auto",
    backgroundColor: "black",
    color: "white",
  }

  const buttonStyles = {
    position: "relative",
    top: "1vh",
    height: "5vh",
    color: "white",
    backgroundColor: "black",
    margin: "0 auto",
  }

  return (
    <form style={formStyles} onSubmit={props.submit}>
      <input
      style={inputStyles}
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
