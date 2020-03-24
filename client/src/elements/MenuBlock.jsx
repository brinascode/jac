import React from "react"


export default function MenuBlock(props){
    var menuBlockStyle={
        borderRadius:"5px",
        width:"15vw",
        height:"5vw",
        padding:"4vw",
        backgroundImage:`linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`,
        position:"relative",
        display:"flex",
        justifyContent:"center"
        
    }

    var textStyle = {
        color:"white",
        fontFamily:"Dosis",
        fontSize:"4vw",
        textAlign:"center",
        display:"flex",
        alignItems:"center"

    }
    return(
        <div style={menuBlockStyle}>
            <div style={textStyle}>
                 {props.title}
            </div>
        </div>

    )
}