import React from "react";

const Form = (props) => {
  const formStyles = {
    position: "absolute",
    top: "2vh",
    left: "5vw",
    width: "90vw",
    height: "7vh",
    minHeight: "40px",
    fontSize: "16px",
    borderRadius: "40px",
    backgroundColor: "white",
    boxShadow: "inset 0px 0px 5px 5px black",
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  
  const inputStyles = {
    position: "relative",
    height: "5vh",
    minHeight: "30px",
    width: "90vw",
    minWidth: "120px",
    fontSize: "1em",
    textIndent: "20px",
    backgroundColor: "transparent",
    border: "none",   
    outlineColor: "transparent",
    borderRadius: "10px",
    fontWeight: "700",
  };

  return (
    <form style={formStyles}>
      <input
        style={inputStyles}
        type="text"
        name=""
        id=""
        placeholder="a part of drink name..."
        onChange={props.change}
        value={props.value}
      />
    </form>
  );
};

export default Form;