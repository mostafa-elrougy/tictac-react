import { findByDisplayValue } from "@testing-library/react";
import React from "react";

//import '../index.css';
let style={background: "white",
border: "2px solid red",
fontSize: "30px",
fontWeight: "800",
cursor: "pointer",
outline: "none",
color:"blue"
};


 function Square(props){
	// const style= props.value ? 'squares' $(props.value) : 'squares'; 
	//console.log(props.value)
     return(
        <button  data-testid={props.testId}  style={style} onClick={props.onClick}>
        {props.value}
      </button>
     )
 }
 export default Square;