import React from "react"

var headerStyle={
    fontSize:"3vw",
    fontWeight:"5px",
    textAlign:"left",
    fontFamily: "Dosis",
    padding:"1vw",
    position:"sticky",
    top:"0px",
    backgroundColor:"black",
    color:"black",
    width:"100vw",
    zIndex:"2",
    boxShadow:"2px 1px 5px #00c4cc"
    
}

var titleStyle = {
   color: "white",
//   "-webkit-text-fill-color": "white", /* Will override color (regardless of order) */
//   "-webkit-text-stroke-width": "0.5px",
//   "-webkit-text-stroke-color": "black"
}

export default function Header(){
        return(
            <header style={headerStyle}>
               
                       <strong style={titleStyle}> Jesus above Corona </strong>
               
            </header>
        )
}