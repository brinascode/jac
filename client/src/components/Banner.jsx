import React from "react"

var bannerStyle={
    backgroundImage:"url('/images/banner.png')",
    backgroundSize:"100% 100%",
    backgroundPosition:"top",
    backgroundRepeat:"no-repeat",
    height:"47vw",
    backgroundColor:"black",
    border:"solid pink",
    position:"relative"
}

var imgStyle={
    position:"absolute",
    top:"70vh",
    left:"46%"
}
export default function Banner(){
    return(
        <div style={bannerStyle}>
            
        <img src="/images/icons/bouncing-arrow.gif" alt="banner" width="5%" style={imgStyle}/>
        </div>
    )
}