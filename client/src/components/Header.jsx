import React from "react"

var headerStyle={
    fontSize:"3vw",
    fontWeight:"5px",
    textAlign:"left",
    fontFamily: 'Dosis',
    padding:"1vw",
    position:"sticky",
    top:"0px",
    backgroundColor:"white",
    color:"black",
    width:"100vw",
    border:"solid white",
    zIndex:"2",
    
}

export default function Header(){
        return(
            <header style={headerStyle}>
               
                       <strong> Jesus above Corona </strong>
               
            </header>
        )
}