import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  const formStyles = {
    position: "absolute",
    top: "2vh",
    left: "5vw",
    width: "90vw",
    height: "7vh",
    minHeight: "40px",
    // margin: "0 auto",
    borderRadius: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.548)",
    boxShadow: "inset 0px 0px 5px 5px white",
    textAlign: "center",
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const inputStyles = {
    // display: "block",
    // position: "relative",
    // top: "1vh",
    height: "5vh",
    minHeight: "30px",
    textIndent: "15px",
    // margin: "0 auto",
    // backgroundColor: "transparent",
    border: "none",   
    borderRadius: "10px",
    fontWeight: "700",
  };

  const buttonStyles = {
    // position: "relative",
    // top: "1vh",
    height: "5vh",
    color: "white",
    backgroundColor: "transparent",
    // margin: "0 auto",
    cursor: "pointer",
    borderRadius: "10px",
  };


  return (
    <form style={formStyles} onSubmit={props.submit}>
      <input
        style={inputStyles}
        type="text"
        name=""
        id=""
        placeholder="write something.."
        onChange={props.change}
        value={props.value}
      />
      <button style={buttonStyles}>
      <FontAwesomeIcon icon={faSearch} />{" "}
        {props.value.length < 7
          ? props.value.slice(0, 7)
          : props.value.slice(props.value.length - 7, props.value.length)}{" "}
        drink
      </button>
    </form>
  );
};

export default Form;